import OpenAI from "openai";
import { GPT_SECRET_KEYS } from "./constant";

const openai = new OpenAI({
  apiKey: GPT_SECRET_KEYS, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;
