import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(_: VercelRequest, res: VercelResponse) {
  const wakaURL = "https://wakatime.com/api/v1/users/current/stats?api_key="
  const apiKey = process.env.VITE_WAKA_API

  console.log(process.env.VITE_WAKA_API)
  try {
    const response = await fetch(`${wakaURL}${apiKey}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.json({ error: `Erro ao obter dados do WakaTime ${error}` });
  }
}