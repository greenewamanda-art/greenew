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






import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    console.log('Iniciando processo de envio de email...');

    const { name, from, message } = await req.json();

    // Validação básica
    if (!name || !from || !message) {
      return NextResponse.json(
        { error: 'Dados obrigatórios ausentes' },
        { status: 400 }
      );
    }

    // Configuração otimizada para Vercel
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Configurações extras para Vercel
      pool: true,
      maxConnections: 1,
      maxMessages: 3,
      rateDelta: 20000,
      rateLimit: 5,
    });

    console.log('Transporter criado, enviando email...');

    // Verificar conexão primeiro
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"GREENEW Contact" <${process.env.SMTP_USER}>`, // Use sempre o email autenticado
      replyTo: from, // Email do remetente vai no replyTo
      to: process.env.SMTP_TO,
      subject: `Contato Site - ${name}`,
      html: `
        <h3>Novo contato do site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${from}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `Nome: ${name}\nE-mail: ${from}\nMensagem: ${message}` // Fallback texto
    });

    console.log('Email enviado:', info.messageId);

    return NextResponse.json({
      message: 'Email enviado com sucesso!',
      status: true
    }, { status: 200 });

  } catch (error: any) {
    console.error('Erro detalhado:', error);

    return NextResponse.json({
      error: 'Erro ao enviar email',
      details: error.message,
      code: error.code || 'UNKNOWN'
    }, { status: 500 });
  }
}