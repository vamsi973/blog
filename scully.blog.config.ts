import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import puppeteer from 'puppeteer';


export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'blog',
  outDir: './dist/static',
  routes: {},
  puppeteerLaunchOptions: {
    executablePath: puppeteer.executablePath(),
  },
};

