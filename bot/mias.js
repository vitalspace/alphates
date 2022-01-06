
'use strict'
// ========== [ Dependencies ] ========== //
const puppeteer = require('puppeteer-core');
const path = require('path');
const dir = path.join(__dirname, './data');
// ========== [ Utils ] ========== //
// const { getExecutablePath } = require('');
const { getExecutablePath } = require('../utils/utils');
// ========== [ Run Program ] ========== //
const run = async () => {
    const executablePath = await getExecutablePath({});
    await lauchpuppeteer({ executablePath });
}
// ========== [ TIime ] ========== //
let date_ob = new Date();
// current hours
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();
// ========== [ Program ] ========== //
const lauchpuppeteer = async launchOptions => {
    const browser = await puppeteer.launch({
        headless: true,
        userDataDir: dir,
        args: [
            // `--app=${web}`,
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

    const page1 = await browser.newPage();          // open new tab1
    await page1.goto('https://vitalspace.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page1.waitFor(5000)

    const page2 = await browser.newPage();          // open new tab1
    await page2.goto('https://smartwatches.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page2.waitFor(5000)

    const page3 = await browser.newPage();          // open new tab1
    await page3.goto('https://winetime.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page3.waitFor(5000)

    const page4 = await browser.newPage();          // open new tab1
    await page4.goto('https://hypercars.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page4.waitFor(5000)

    const page5 = await browser.newPage();          // open new tab1
    await page5.goto('https://catnation.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page5.waitFor(5000)

    const page6 = await browser.newPage();          // open new tab1
    await page6.goto('https://sneakersshop.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page6.waitFor(5000)

    const page7 = await browser.newPage();          // open new tab1
    await page7.goto('https://chameleons.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page7.waitFor(5000)

    const page8 = await browser.newPage();          // open new tab1
    await page8.goto('https://smartcells.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page8.waitFor(5000)

    const page9 = await browser.newPage();          // open new tab1
    await page9.goto('https://gamingzne.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page9.waitFor(5000)

    const page10 = await browser.newPage();          // open new tab1
    await page10.goto('https://roompool.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page10.waitFor(5000)

    const page11 = await browser.newPage();          // open new tab1
    await page11.goto('https://rushbanggeeks.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page11.waitFor(5000)

    const page12 = await browser.newPage();          // open new tab1
    await page12.goto('https://bagnation.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page12.waitFor(5000)

    const page13 = await browser.newPage();          // open new tab1
    await page13.goto('https://blakywhite.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page13.waitFor(5000)

    const page14 = await browser.newPage();          // open new tab1
    await page14.goto('https://codenerd.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page14.waitFor(5000)

    const page15 = await browser.newPage();          // open new tab1
    await page15.goto('https://cosplans.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page15.waitFor(5000)

    const page16 = await browser.newPage();          // open new tab1
    await page16.goto('https://darkcaps.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page16.waitFor(5000)

    const page17 = await browser.newPage();          // open new tab1
    await page17.goto('https://fastmotors.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page17.waitFor(5000)

    const page18 = await browser.newPage();          // open new tab1
    await page18.goto('https://judisnow.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page18.waitFor(5000)

    const page19 = await browser.newPage();          // open new tab1
    await page19.goto('https://milenianarqs.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page19.waitFor(5000)

    const page20 = await browser.newPage();          // open new tab1
    await page20.goto('https://wavesbag.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page20.waitFor(5000)

    const page21 = await browser.newPage();          // open new tab1
    await page21.goto('https://zuskim.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page21.waitFor(5000)

    const page22 = await browser.newPage();          // open new tab1
    await page22.goto('https://vestrig.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page22.waitFor(5000)

}

console.log('Firts program', hours, ":", minutes, ':', seconds);
run();
