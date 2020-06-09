import { AllOptions as Options } from 'k6/options';

export let options: Partial<Options> = {
  vus: 10,
  duration: '10s',
};
