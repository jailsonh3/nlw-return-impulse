import { prisma } from "../../prisma";
import { IFeedbackCreateData, IFeedbacksRespository } from "../IFeedbacksRespository";

export class FeedbacksRepository implements IFeedbacksRespository{
    async create({ type, comment, screenshot }: IFeedbackCreateData): Promise<void> {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }
}