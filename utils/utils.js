const puppeteer = require('puppeteer-core');
const findChrome = require('carlo/lib/find_chrome');
const fs = require('fs').promises;
const ProgressBar = require('progress');
const revision = require('puppeteer-core/package').puppeteer.chromium_revision;


// import { puppeteer } from 'puppeteer-core';
// import findChrome from 'carlo/lib/find_chrome';
// import fs from 'fs/promises';
// import revision from 'progress';
// // import { re } from 'puppeteer-core/package';
// // import revision from 'puppeteer-core/package';
// import test from 'puppeteer-core/package';
// const revision = test.puppeteer.chromium_revision

const getExecutablePath = async ({ useLocalChromium = false } = {}) => {
  if (!useLocalChromium) {
    try {
      const { executablePath } = await findChrome({});
      return executablePath;
    } catch (e) {
      console.log('No Chrome install found, trying local Chromium');
    }
  }

const expectedPath = puppeteer.executablePath();
  try {
    await fs.stat(expectedPath);
  } catch (e) {
    await download();
  }
  return expectedPath;
};

module.exports = {
  getExecutablePath
};

const download = async () => {
  console.log(`Downloading Chromium ${revision}`);

  let bar;
  await puppeteer
    .createBrowserFetcher()
    .download(revision, (downloaded, total) => {
      if (!bar) bar = new ProgressBar('[:bar] :percent :etas', { total });
      bar.update(downloaded / total);
    });
};