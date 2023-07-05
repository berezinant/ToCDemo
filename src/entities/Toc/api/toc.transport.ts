import { isTocData, TocData } from '../models';

const endpoint = `${process.env.API_URL}/data.json`;

function buildTocTransport() {
  return {
    getTocData: async (): Promise<TocData> => {
      return fetch(endpoint)
        .then((response) => response.json())
        .then((data: unknown) => {
          if (isTocData(data)) {
            return data;
          } else {
            throw new Error('Invalid TOC data');
          }
        });
    },
  };
}

export const tocTransport = buildTocTransport();
