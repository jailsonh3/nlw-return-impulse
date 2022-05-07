export interface ISendMailData {
    subject: string;
    body: string;
}


export interface INodeMailerAdapter {
    seedMail: (data: ISendMailData) => Promise<void>;
}