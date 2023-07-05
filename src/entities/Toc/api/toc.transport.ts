import { isTocData, TocData } from '../models/toc';

const endpoint = 'https://www.jetbrains.com/help/idea/2023.1/HelpTOC.json';

function buildTocTransport() {
  return {
    getTocData: async (): Promise<TocData> => {
      return fetch(endpoint)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
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
