import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(_: VercelRequest, res: VercelResponse) {
  const wakaURL = "https://wakatime.com/api/v1/users/current/stats?api_key="
  const apiKey = process.env.WAKA_API

  console.log(process.env.WAKA_API)
  try {
    const response = await fetch(`${wakaURL}${apiKey}`);


    if (response.ok) {
      const errorText = await response.text();  // Tente pegar o erro como texto
      return res.status(response.status).json({ error: `Erro na requisição: ${errorText}` });
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const errorText = await response.text();
      return res.status(500).json({ error: `Resposta não-JSON recebida: ${errorText}` });
    }
  }

  catch (error) {
    res.json({ error: `Erro ao obter dados do WakaTime ${error}` });
  }
}