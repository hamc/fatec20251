import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, token } = body;

  // Validação básica
  if (!email || !password || !token) {
    return NextResponse.json(
      { error: 'Email, senha e token são obrigatórios.' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Email inválido.' },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: 'A senha deve ter pelo menos 6 caracteres.' },
      { status: 400 }
    );
  }

  const validTokens = ['abcdef', '123456', 'tokenValido123'];
  if (!validTokens.includes(token)) {
    return NextResponse.json(
      { authenticated: false, error: 'Token inválido.' },
      { status: 401 }
    );
  }

  // Se tudo estiver certo
  return NextResponse.json({ authenticated: true });
}
