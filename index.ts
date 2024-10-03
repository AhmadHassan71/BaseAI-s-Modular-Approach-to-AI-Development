// index.ts
import combinedPipe from './baseai/pipes/combined-agent.ts';

async function run() {
  const url = process.env.URL; 
  const pipe = combinedPipe();

  try {
    const result = await pipe.run(url);
    console.log('Classification Result:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

run();
