
'use strict'
// ========== [ Dependencies ] ========== //
const puppeteer = require('puppeteer-core');
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
        userDataDir: './data',
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
    await page1.goto('https://juegosgeek.xyz', { timeout: 0, waitUntil: "networkidle2" });
    await page1.waitFor(5000)

    const page2 = await browser.newPage();          // open new tab1
    await page2.goto('https://marioexplorer.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page2.waitFor(5000)

    const page3 = await browser.newPage();          // open new tab1
    await page3.goto('https://comicland.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page3.waitFor(5000)

    const page4 = await browser.newPage();          // open new tab1
    await page4.goto('https://parasyteanime.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page4.waitFor(5000)

    const page5 = await browser.newPage();          // open new tab1
    await page5.goto('https://nftsite.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page5.waitFor(5000)

    const page6 = await browser.newPage();          // open new tab1
    await page6.goto('https://creativeclouddev.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page6.waitFor(5000)

    const page7 = await browser.newPage();          // open new tab1
    await page7.goto('https://volant.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page7.waitFor(5000)

    const page8 = await browser.newPage();          // open new tab1
    await page8.goto('https://techgeek.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page8.waitFor(5000)

    const page9 = await browser.newPage();          // open new tab1
    await page9.goto('https://jeannews.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page9.waitFor(5000)

    const page10 = await browser.newPage();          // open new tab1
    await page10.goto('https://fastnetworkue.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page10.waitFor(5000)

    const page11 = await browser.newPage();          // open new tab1
    await page11.goto('https://vrncoin.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page11.waitFor(5000)

    const page12 = await browser.newPage();          // open new tab1
    await page12.goto('https://trackup.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page12.waitFor(5000)

    const page13 = await browser.newPage();          // open new tab1
    await page13.goto('https://urbancars.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page13.waitFor(5000)

    const page14 = await browser.newPage();          // open new tab1
    await page14.goto('https://bluemountain.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page14.waitFor(5000)

    const page15 = await browser.newPage();          // open new tab1
    await page15.goto('https://rickandmortybook.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page15.waitFor(5000)

    const page16 = await browser.newPage();          // open new tab1
    await page16.goto('https://architectsone.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page16.waitFor(5000)

    const page17 = await browser.newPage();          // open new tab1
    await page17.goto('https://gameteka.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page17.waitFor(5000)

    const page18 = await browser.newPage();          // open new tab1
    await page18.goto('https://ratoconsoles.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page18.waitFor(5000)

    const page19 = await browser.newPage();          // open new tab1
    await page19.goto('https://ourvine.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page19.waitFor(5000)

    const page20 = await browser.newPage();          // open new tab1
    await page20.goto('https://spidersclub.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page20.waitFor(5000)

    const page21 = await browser.newPage();          // open new tab1
    await page21.goto('https://sciencesnet.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page21.waitFor(5000)

    const page22 = await browser.newPage();          // open new tab2
    await page22.goto('https://angkotemple.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page22.waitFor(5000)

    const page23 = await browser.newPage();          // open new tab2
    await page23.goto('https://threenature.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page23.waitFor(5000)

    const page24 = await browser.newPage();          // open new tab2
    await page24.goto('https://chocoland.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page24.waitFor(5000)

    const page25 = await browser.newPage();          // open new tab2
    await page25.goto('https://futurefraganse.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page25.waitFor(5000)

    const page26 = await browser.newPage();          // open new tab2
    await page26.goto('https://valentinconti.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page26.waitFor(5000)

    const page27 = await browser.newPage();          // open new tab2
    await page27.goto('https://airnavigation.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page27.waitFor(5000)

    const page28 = await browser.newPage();          // open new tab2
    await page28.goto('https://headmix.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page28.waitFor(5000)

    const page29 = await browser.newPage();          // open new tab2
    await page29.goto('https://genpokemon.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page29.waitFor(5000)

    const page30 = await browser.newPage();          // open new tab2
    await page30.goto('https://keyclass.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page30.waitFor(5000)

    const page31 = await browser.newPage();          // open new tab2
    await page31.goto('https://colorfuyt.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page31.waitFor(5000)

    const page32 = await browser.newPage();          // open new tab2
    await page32.goto('https://mineralsqx.gq ', { timeout: 0, waitUntil: "networkidle2" });
    await page32.waitFor(5000)

    const page33 = await browser.newPage();          // open new tab2
    await page33.goto('https://fastmobile.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page33.waitFor(5000)

    const page34 = await browser.newPage();          // open new tab2
    await page34.goto('https://newgraphics.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page34.waitFor(5000)

    const page35 = await browser.newPage();          // open new tab2
    await page35.goto('https://pokecenter.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page35.waitFor(5000)

    const page36 = await browser.newPage();          // open new tab2
    await page36.goto('https://waterpice.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page36.waitFor(5000)

    const page37 = await browser.newPage();          // open new tab2
    await page37.goto('https://cheapclocks.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page37.waitFor(5000)

    const page38 = await browser.newPage();          // open new tab2
    await page38.goto('https://hotcarsnash.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page38.waitFor(5000)

    const page39 = await browser.newPage();          // open new tab2
    await page39.goto('https://maountains.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page39.waitFor(5000)

    const page40 = await browser.newPage();          // open new tab2
    await page40.goto('https://oldcastles.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page40.waitFor(5000)

    const page41 = await browser.newPage();          // open new tab2
    await page41.goto('https://legotrack.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page41.waitFor(5000)

    const page42 = await browser.newPage();          // open new tab2
    await page42.goto('https://saurioland.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page42.waitFor(5000)

    const page43 = await browser.newPage();          // open new tab2
    await page43.goto('https://seriesone.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page43.waitFor(5000)

    const page44 = await browser.newPage();          // open new tab2
    await page44.goto('https://slidecitys.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page44.waitFor(5000)

    const page45 = await browser.newPage();          // open new tab2
    await page45.goto('https://tinycartoons.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page45.waitFor(5000)

    const page46 = await browser.newPage();          // open new tab2
    await page46.goto('https://worldpowers.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page46.waitFor(5000)

    const page47 = await browser.newPage();          // open new tab2
    await page47.goto('https://animetransforms.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page47.waitFor(5000)

    const page48 = await browser.newPage();          // open new tab2
    await page48.goto('https://rockbands.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page48.waitFor(5000)

    const page49 = await browser.newPage();          // open new tab2
    await page49.goto('https://towergame.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page49.waitFor(5000)

    const page50 = await browser.newPage();          // open new tab2
    await page50.goto('https://gamemonitors.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page50.waitFor(5000)

}

console.log('Firts program', hours, ":", minutes, ':', seconds);
run();
