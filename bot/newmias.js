'use strict';
const puppeteer = require('puppeteer-core');
const path = require('path');

let dir = {}

const { getExecutablePath } = require('../utils/utils')

const program = async () => {
  const executablePath = await getExecutablePath({});
  const webLists = [
    'https://vitalspace.ml',
    'https://smartwatches.gq',
    'https://winetime.gq',
    'https://hypercars.ml',
    'https://catnation.cf',
    'https://sneakersshop.gq',
    'https://chameleons.ga',
    'https://smartcells.gq',
    'https://gamingzne.cf',
    'https://roompool.gq',
    'https://rushbanggeeks.ga',
    'https://bagnation.ga',
    'https://blakywhite.gq',
    'https://codenerd.ml',
    'https://cosplans.cf',
    'https://darkcaps.ga',
    'https://fastmotors.gq',
    'https://judisnow.cf',
    'https://milenianarqs.ml',
    'https://wavesbag.cf',
    'https://zuskim.ga',
    'https://vestrig.ga',
  ];

  let num = 0
  let web = 'web'

  try {
    for (const i of webLists) {
      num++
      const newe = web + num
      dir = path.join(__dirname, newe);
      await lauchpuppeteer({ executablePath }, i, dir);
    }
  } catch (error) {
    console.log(error)
  }

}

const lauchpuppeteer = async (launchOptions, e, dir) => {
  const browser = await puppeteer.launch({
    //headless: false,
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

  const [page] = await browser.pages();
  await page.waitFor(5000);
}

program()
