import { INodeMailerAdapter } from "../../adapters/INodeMailerAdapter";
import { IFeedbacksRespository } from "../../repositories/IFeedbacksRespository";

interface CreateFeedBackUseCaseRequest {
   type: string;
   comment: string;
   screenshot?: string;
}

export class CreateFeedBackUseCase {
    constructor (
        private feedbacksRepository: IFeedbacksRespository,
        private mailAdapter: INodeMailerAdapter
    ) {}

    async execute({ type, comment, screenshot }: CreateFeedBackUseCaseRequest) {

        if(!type) {
            throw new Error('Type is required.');
        }

        if(!comment) {
            throw new Error('Comment is required.');
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.seedMail({
            subject: "Novo feeback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px, color: #111;">`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot && `<img src='${screenshot}' width='400px' />`,
                '</div>'
            ].join('\n')
        });
        
    }
}