// baseai/pipes/text-classifier.pipe.ts
import { PipeI } from '@baseai/core';

const textClassifierPipe = (): PipeI => ({
  apiKey: process.env.OPENAI_API_KEY!, // Use your API key
  name: 'text-classifier',
  description: 'Pipe to classify text as positive, negative, or neutral',
  status: 'private',
  model: 'openai:gpt-4o-mini',
  task: async (input: string) => {
    const categories = ['positive', 'negative', 'neutral'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    return `Classified as: ${category}`;
  },
});

export default textClassifierPipe;
