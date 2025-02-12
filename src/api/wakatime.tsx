import { VercelResponse } from '@vercel/node'

export default async function handler(res: VercelResponse) {
  const wakaURL = "https://wakatime.com/api/v1/users/current/stats?api_key="
  const apiKey = import.meta.env.VITE_WAKA_API

  try {
    const response = await fetch(`${wakaURL}${apiKey}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Erro ao obter dados do WakaTime ${error}` });
  }
}