import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(_: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.WAKA_API
  const user = process.env.WAKA_USER
  const wakaURL = `https://wakatime.com/api/v1/users/${user}/stats?api_key=${apiKey}`

  console.log(process.env.WAKA_API)
  try {
    const response = await fetch(wakaURL);


    if (response.ok) {
      const data = await response.json();  // Tente pegar o erro como texto
      return res.status(response.status).json({ data: data, response: response.status });
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