'use strict';
const puppeteer = require('puppeteer-core');
const path = require('path');

let dir = {}

const { getExecutablePath } = require('../utils/utils')

const program = async () => {
  const executablePath = await getExecutablePath({});
  const webLists = {
    web1: 'https://vitalspace.ml',
    web2: 'https://smartwatches.gq',
    web3: 'https://winetime.gq',
    web4: 'https://hypercars.ml',
    web5: 'https://catnation.cf',
    web6: 'https://sneakersshop.gq',
    web7: 'https://chameleons.ga',
    web8: 'https://smartcells.gq',
    web9: 'https://gamingzne.cf',
    web10: 'https://roompool.gq',
    web11: 'https://rushbanggeeks.ga',
    web12: 'https://bagnation.ga',
    web13: 'https://blakywhite.gq',
    web14: 'https://codenerd.ml',
    web15: 'https://cosplans.cf',
    web16: 'https://darkcaps.ga',
    web17: 'https://fastmotors.gq',
    web18: 'https://judisnow.cf',
    web19: 'https://milenianarqs.ml',
    web20: 'https://wavesbag.cf',
    web21: 'https://zuskim.ga',
    web22: 'https://vestrig.ga',
  };

  Object.keys(webLists).forEach(async (k, i) => {
    dir = path.join(__dirname, k);
    await lauchpuppeteer({ executablePath }, webLists[k], dir);
  });

}

const lauchpuppeteer = async (launchOptions, e, dir) => {
  const browser = await puppeteer.launch({
    // headless: false,
    userDataDir: dir,
    args: [
      `--app=${e}`,
      // '--window-size=800,600',
      '--disable-audio-output',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--disable-dev-shm-usage',
      '--no-sandbox', "--disable-setuid-sandbox"],
    ignoreDefaultArgs: ['--enable-automation'],
    ...launchOptions
  });
}

program()