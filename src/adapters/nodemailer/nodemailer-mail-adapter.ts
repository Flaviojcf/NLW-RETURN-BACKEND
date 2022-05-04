import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bfc92e17ff06b7",
      pass: "c45e405c701ce9"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Flavio Costa <fjcf@poli.br>',
        subject,
        html:body,
    })
  }
}
