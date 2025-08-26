import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, from, message } = await req.json();

    if (!name || !from || !message) {
      return NextResponse.json(
        { error: 'Dados obrigatórios ausentes' },
        { status: 400 }
      );
    }


    const resend = new Resend(process.env.RESEND_API_KEY);

    resend.emails.send({
      from, 
      to: process.env.SMTP_TO!,
      subject: `Contato Site - ${name}`,
      replyTo: from,
      html: `<p>Nome: ${name}</p><p>Email: ${from}</p><p>Mensagem: ${message}</p>`
    });

    return NextResponse.json({ message: 'Email enviado!', status: true });
  } catch (error) {
    return NextResponse.json({ error, status: false },);
  }
}