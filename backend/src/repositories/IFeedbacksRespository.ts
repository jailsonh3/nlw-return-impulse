export interface IFeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface IFeedbacksRespository {
    create: (data: IFeedbackCreateData) => Promise<void>;
}