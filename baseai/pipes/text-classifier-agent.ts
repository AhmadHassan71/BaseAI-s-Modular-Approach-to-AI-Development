// baseai/pipes/text-classifier-agent.ts
import { PipeI } from '@baseai/core';

const textClassifierPipe = (): PipeI => ({
  apiKey: process.env.OPENAI_API_KEY!, // Use your API key
  name: 'text-classifier',
  description: 'Pipe to classify text as positive, negative, or neutral',
  status: 'private',
  model: 'openai:gpt-4o-mini',
  stream: true,
  json: false,
  store: true,
  moderate: true,
  top_p: 1,
  max_tokens: 1000,
  temperature: 0.7,
  presence_penalty: 1,
  frequency_penalty: 1,
  stop: [],
  tool_choice: 'auto',
  parallel_tool_calls: false,
  messages: [{ role: 'system', content: `You are an expert at classifying sentences
  as positive, negative or neutral. You will classify the sentences into those types` }],
  variables: [],
  memory: [],
  tools: []
});

export default textClassifierPipe;