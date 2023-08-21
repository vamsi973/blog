import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import puppeteer from 'puppeteer';


export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'blog',
  outDir: './dist/static',
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },},
  puppeteerLaunchOptions: {
    executablePath: puppeteer.executablePath(),
  },
};

