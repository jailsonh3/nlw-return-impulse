import { NodeMaillerAdapter } from "../../adapters/nodemailer/NodeMaillerAdapter";
import { FeedbacksRepository } from "../../repositories/implementations/FeedbacksRepository";
import { CreateFeedBackController } from "./createFeedbackController";
import { CreateFeedBackUseCase } from "./createFeedbackUseCase";

const feedbacksRepository = new FeedbacksRepository();

const nodeMailerAdapter = new NodeMaillerAdapter();

const createFeedbackUseCase = new CreateFeedBackUseCase(
    feedbacksRepository,
    nodeMailerAdapter
);

const createFeedBackController = new CreateFeedBackController(createFeedbackUseCase);


export { createFeedBackController };