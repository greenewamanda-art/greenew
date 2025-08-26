// import nodemailer from 'nodemailer';
// import type SMTPTransport from 'nodemailer/lib/smtp-transport';
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const { name, from, message } = await req.json();

//     const transportOptions: SMTPTransport.Options = {
//       service: 'gmail',
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     };

//     const transporter = nodemailer.createTransport(transportOptions);

//     await transporter.sendMail({
//        from: `GREENEW ${from}`,
//        replyTo: from,
//        to: process.env.SMTP_TO,
//        subject: 'Contato Site',
//        html: `Nome: ${name} <br> E-mail: ${from} <br> Mensagem: ${message}`,
//      });

//     return NextResponse.json({ message: 'Email enviado com sucesso!', status: true,  }, { status: 200 });
//   } catch (error: any) {
//     console.error('Erro:', error);
//     return NextResponse.json({ error: 'Erro ao processar requisição', details: error.message }, { status: 500 });
//   }
// }



import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: 'API funcionando!' }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ message: 'GET funcionando!' }, { status: 200 });
}