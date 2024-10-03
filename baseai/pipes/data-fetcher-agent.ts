// baseai/pipes/data-fetcher-agent.ts
import { PipeI } from '@baseai/core';
import axios from 'axios';

const dataFetcherPipe = (): PipeI => ({
  apiKey: process.env.OPENAI_API_KEY!, // Use your API key
  name: 'data-fetcher',
  description: 'Pipe to fetch data from a given URL',
  status: 'private',
  model: 'openai:gpt-4o-mini',
  task: async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
});

export default dataFetcherPipe;
