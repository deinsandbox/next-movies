import {} from "next";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  error?: string;
};

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
  signal?: AbortSignal
) => {
  const { TMDB_URL, TMDB_READ_KEY } = process?.env ?? {};
  // const TMDB_URL = process?.env?.TMDB_URL;
  // const TMDB_READ_KEY = process?.env?.TMDB_READ_KEY;

  const page = req.query ?? { page: 1 };

  if (!TMDB_URL || !TMDB_READ_KEY) {
    return res
      .status(400)
      .json({ message: "", error: "not valid body parameters" });
  }

  const headers = new Headers();
  headers.append("accept", "application/json");
  headers.append("Authorization", `Bearer ${TMDB_READ_KEY}`);

  const url = new URL(`movie/top_rated`, TMDB_URL);
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", String(page));

  const options = {
    method: "GET",
    headers,
    signal,
  };

  try {
    const result = await fetch(url.toString(), options).then((res) =>
      res.json()
    );
    console.log({ result });
  } catch (error) {
    console.error("API Movies Error: ", error);
    return res.status(500).json({
      message: "",
      error: "Failed to fetch data",
    });
  }

  return res.json({ name: "John Doe" });
};

export { getHandler as GET };
