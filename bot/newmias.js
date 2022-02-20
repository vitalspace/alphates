'use strict';
const puppeteer = require('puppeteer-core');
const path = require('path');
let chromePaths = require('chrome-paths');
process.setMaxListeners(Infinity);

(async () => {
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
  let dir = {}

  try {
    for (const i of webLists) {
      num++
      const newe = web + num
      dir = path.join(__dirname, newe);

      const browser = await puppeteer.launch({
        headless: false,
        userDataDir: dir,
        executablePath: chromePaths.chrome,
        args: [
          '--disable-audio-output',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding',
          '--disable-dev-shm-usage',
          '--no-sandbox',
          "--disable-setuid-sandbox"
        ],
        defaultViewport: null
      });

      const [page] = await browser.pages();
      await page.goto(i, { waitUntil: 'networkidle0' });

    }
  } catch (error) {
    console.log(error)
  }

})();

