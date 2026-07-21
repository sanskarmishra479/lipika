import ffmpeg from "fluent-ffmpeg";

const inputFileDir = "input/input.mp4"

async function convertAudio() {
  ffmpeg()
    .input(`${inputFileDir}`)
    .audioFrequency(16000)
    .audioChannels(1)
    .audioCodec("pcm_s16le")
    .output(`output/audio.wav`)
    .on("end", async () => {
      console.log("Conversion finished");
    })
    .on("error", (err) => {
      console.error("Error:", err);
    })
    .run();
}

convertAudio();