import { CreateFeedBackUseCase } from "./createFeedbackUseCase"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const createFeedback = new CreateFeedBackUseCase(
    { create: createFeedbackSpy},
    { seedMail: sendMailSpy }
);

describe('Create feedback', () => {
    it('should be able to create a feedback', async () => {

        await expect(createFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64idwjidiwjoidja',
        })).resolves.not.toThrow();


        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();

    });

    it('should not be able to create a feedback without a type', async () => {

        await expect(createFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64p9uwd9uawd9u',
        })).rejects.toThrow();

    });

    it('should not be able to create a feedback without a comment', async () => {

        await expect(createFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64p9uwd9uawd9u',
        })).rejects.toThrow();

    });

    it('should not be able to create a feedback with an invalid screenshot', async () => {

        await expect(createFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'base64p9uwd9uawd9u',
        })).rejects.toThrow();

    });
})