import fs from "fs";
import { writeFile } from "fs/promises";
import path from "path";
import OpenAI from "openai";
import dotenv from "dotenv";
const outputPath = path.join(process.cwd(), "temp", "transcript.json");
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function transcribe() {
  const transcription = await client.audio.transcriptions.create({
    file: fs.createReadStream("./output/audio.wav"),
    model: "whisper-1",
    response_format: "verbose_json",
    timestamp_granularities: ["word"],
  });
    
  await writeFile(
    outputPath,
    JSON.stringify(transcription.words, null, 2),
    "utf-8"
  );
}

transcribe();