import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "9a07f4f9a52827",
    pass: "292030a85eb173"
    }
});