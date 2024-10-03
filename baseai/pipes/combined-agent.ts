// baseai/pipes/combined.pipe.ts
import { Pipe } from '@baseai/core';
import dataFetcherPipe from './data-fetcher-agent.ts';
import textClassifierPipe from './text-classifier-agent.ts';

const combinedPipe = () => {
  const fetcher = new Pipe(dataFetcherPipe());
  const classifier = new Pipe(textClassifierPipe());

  return {
    name: 'combined-agent',
    async run(url: string) {
      const data = await fetcher.run({ url });
      const classification = await classifier.run({ input: data });
      return classification;
    },
  };
};

export default combinedPipe;
