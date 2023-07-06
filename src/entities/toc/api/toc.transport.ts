import { isTocDataDto, TocDataDto } from '../models';

const endpoint = `${process.env.API_URL}/data.json`;

function buildTocTransport() {
  return {
    getTocData: async (): Promise<TocDataDto> => {
      return fetch(endpoint)
        .then((response) => response.json())
        .then((data: unknown) => {
          if (isTocDataDto(data)) {
            return data;
          } else {
            throw new Error('Invalid TOC data');
          }
        });
    },
  };
}

export const tocTransport = buildTocTransport();
