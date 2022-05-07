import { Request, Response } from "express";
import { CreateFeedBackUseCase } from "./createFeedbackUseCase";


export class CreateFeedBackController {

    constructor( 
        private createFeedbackUseCase: CreateFeedBackUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { type, comment, screenshot } = request.body

        await this.createFeedbackUseCase.execute({
            type,
            comment,
            screenshot
        });

        return response.status(201).send();

    }
}