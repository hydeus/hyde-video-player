import { Options } from './options'

export interface Player {
  container: HTMLDivElement | string;
  options: Options;
  
  constructor(container: HTMLDivElement | string, options: Options)
}