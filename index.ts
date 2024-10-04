// index.ts
import 'dotenv/config';
import textClassifierPipe from './baseai/pipes/text-classifier-agent.ts';
import { Pipe, getRunner } from '@baseai/core';

const pipe = new Pipe(textClassifierPipe());
const message = 'Ali is a good person';

async function run() {
  const { stream } = await pipe.run({
  messages: [{ role: 'user', content: message}],
  stream: true
 });

 const runner = getRunner(stream);

 
 runner.on('connect', () => {
  console.log('Stream started.\n');
 });

 runner.on('content', content => {
  process.stdout.write(content);
 });

 runner.on('end', () => {
  console.log('\nStream ended.');
 });

 runner.on('error', error => {
  console.error('Error:', error);
 });
}

run();