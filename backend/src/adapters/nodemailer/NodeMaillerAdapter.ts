import { INodeMailerAdapter, ISendMailData } from "../INodeMailerAdapter";
import { transport } from "../../config/nodemailer";

export class NodeMaillerAdapter implements INodeMailerAdapter {
    async seedMail({ subject, body }: ISendMailData): Promise<void> {
         await transport.sendMail({
            from: 'Equipe feedget <oi@feedget.com>',
            to: 'Jailson Silva <jailson@gmail.com>',
            subject,
            html: body
        })
    }

}