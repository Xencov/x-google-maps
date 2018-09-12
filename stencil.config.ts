import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'x-google-maps',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
