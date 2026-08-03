import {mkdirSync, writeFileSync} from "node:fs";
import {dirname, resolve} from "node:path";

const sampleRate = 44100;
const durationSeconds = 18;
const channels = 2;
const samples = sampleRate * durationSeconds;
const data = Buffer.alloc(samples * channels * 2);
const chords = [
  [55, 82.41, 110],
  [65.41, 98, 130.81],
  [73.42, 110, 146.83],
  [49, 73.42, 98],
];
const motif = [220, 261.63, 293.66, 329.63, 293.66, 261.63];
let seed = 1478;
let previousNoise = 0;

const random = () => {
  seed ^= seed << 13;
  seed ^= seed >>> 17;
  seed ^= seed << 5;
  return ((seed >>> 0) / 4294967295) * 2 - 1;
};

for (let i = 0; i < samples; i++) {
  const t = i / sampleRate;
  const chord = chords[Math.floor(t / 4.5) % chords.length];
  const pulsePhase = t % 0.5;
  const kickEnvelope = Math.exp(-pulsePhase * 22);
  const kickFrequency = 46 + 62 * Math.exp(-pulsePhase * 30);
  const kick = Math.sin(2 * Math.PI * kickFrequency * pulsePhase) * kickEnvelope * 0.18;

  const offbeatPhase = (t + 0.25) % 0.5;
  const noise = random();
  const brightNoise = noise - previousNoise * 0.72;
  previousNoise = noise;
  const hat = brightNoise * Math.exp(-offbeatPhase * 70) * 0.022;

  const padEnvelope = 0.72 + Math.sin(2 * Math.PI * t * 0.08) * 0.18;
  const pad = chord.reduce((sum, frequency, index) => {
    return sum + Math.sin(2 * Math.PI * frequency * t + index * 0.7) * (0.022 - index * 0.004);
  }, 0) * padEnvelope;

  const motifPhase = t % 3;
  const motifIndex = Math.floor(t / 3) % motif.length;
  const pluck = Math.sin(2 * Math.PI * motif[motifIndex] * motifPhase) * Math.exp(-motifPhase * 3.8) * 0.055;
  const rise = Math.sin(2 * Math.PI * (180 + t * 5) * t) * Math.max(0, (t - 15.6) / 2.4) * 0.018;

  const left = Math.tanh((kick + hat + pad + pluck * 0.82 + rise) * 1.7);
  const right = Math.tanh((kick + hat * 0.86 + pad * 0.96 + pluck + rise) * 1.7);
  data.writeInt16LE(Math.round(left * 32767), i * 4);
  data.writeInt16LE(Math.round(right * 32767), i * 4 + 2);
}

const header = Buffer.alloc(44);
header.write("RIFF", 0);
header.writeUInt32LE(36 + data.length, 4);
header.write("WAVE", 8);
header.write("fmt ", 12);
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20);
header.writeUInt16LE(channels, 22);
header.writeUInt32LE(sampleRate, 24);
header.writeUInt32LE(sampleRate * channels * 2, 28);
header.writeUInt16LE(channels * 2, 32);
header.writeUInt16LE(16, 34);
header.write("data", 36);
header.writeUInt32LE(data.length, 40);

const output = resolve("public/audio/editorial-pulse.wav");
mkdirSync(dirname(output), {recursive: true});
writeFileSync(output, Buffer.concat([header, data]));
console.log(output);
