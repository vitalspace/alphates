
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

    const page51 = await browser.newPage();          // open new tab1
    await page51.goto('https://zonemovies.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page51.waitFor(5000)

    const page52 = await browser.newPage();          // open new tab1
    await page52.goto('https://bpintures.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page52.waitFor(5000)

    const page53 = await browser.newPage();          // open new tab1
    await page53.goto('https://poetsue.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page53.waitFor(5000)

    const page54 = await browser.newPage();          // open new tab1
    await page54.goto('https://datacloudy.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page54.waitFor(5000)

    const page55 = await browser.newPage();          // open new tab1
    await page55.goto('https://animspace.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page55.waitFor(5000)

    const page56 = await browser.newPage();          // open new tab1
    await page56.goto('https://animchildren.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page56.waitFor(5000)

    const page57 = await browser.newPage();          // open new tab1
    await page57.goto('https://shounems.gq ', { timeout: 0, waitUntil: "networkidle2" });
    await page57.waitFor(5000)

    const page58 = await browser.newPage();          // open new tab1
    await page58.goto('https://cerealtop.ga ', { timeout: 0, waitUntil: "networkidle2" });
    await page58.waitFor(5000)

    const page59 = await browser.newPage();          // open new tab1
    await page59.goto('https://sockone.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page59.waitFor(5000)

    const page60 = await browser.newPage();          // open new tab1
    await page60.goto('https://cheapcars.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page60.waitFor(5000)

    const page61 = await browser.newPage();          // open new tab1
    await page61.goto('https://animlove.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page61.waitFor(5000)

    const page62 = await browser.newPage();          // open new tab1
    await page62.goto('https://animmagic.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page62.waitFor(5000)

    const page63 = await browser.newPage();          // open new tab1
    await page63.goto('https://comedyc.cf ', { timeout: 0, waitUntil: "networkidle2" });
    await page63.waitFor(5000)

    const page64 = await browser.newPage();          // open new tab1
    await page64.goto('https://animsports.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page64.waitFor(5000)

    const page65 = await browser.newPage();          // open new tab1
    await page65.goto('https://animschool.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page65.waitFor(5000)

    const page66 = await browser.newPage();          // open new tab1
    await page66.goto('https://mybikes.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page66.waitFor(5000)

    const page67 = await browser.newPage();          // open new tab1
    await page67.goto('https://animfiction.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page67.waitFor(5000)

    const page68 = await browser.newPage();          // open new tab1
    await page68.goto('https://animmusic.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page68.waitFor(5000)

    const page69 = await browser.newPage();          // open new tab1
    await page69.goto('https://animgames.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page69.waitFor(5000)

    const page70 = await browser.newPage();          // open new tab1
    await page70.goto('https://animspeed.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page70.waitFor(5000)

    const page71 = await browser.newPage();          // open new tab1
    await page71.goto('https://animlaugh.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page71.waitFor(5000)

    const page72 = await browser.newPage();          // open new tab2
    await page72.goto('https://animmarts.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page72.waitFor(5000)

    const page73 = await browser.newPage();          // open new tab2
    await page73.goto('https://animbots.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page73.waitFor(5000)

    const page74 = await browser.newPage();          // open new tab2
    await page74.goto('https://viostrings.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page74.waitFor(5000)

    const page75 = await browser.newPage();          // open new tab2
    await page75.goto('https://animtion.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page75.waitFor(5000)

    const page76 = await browser.newPage();          // open new tab2
    await page76.goto('https://animdb.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page76.waitFor(5000)

    const page77 = await browser.newPage();          // open new tab2
    await page77.goto('https://arcabeast.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page77.waitFor(5000)

    const page78 = await browser.newPage();          // open new tab2
    await page78.goto('https://arcafun.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page78.waitFor(5000)

    const page79 = await browser.newPage();          // open new tab2
    await page79.goto('https://arcanum.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page79.waitFor(5000)

    const page80 = await browser.newPage();          // open new tab2
    await page80.goto('https://aventureclub.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page80.waitFor(5000)

    const page81 = await browser.newPage();          // open new tab2
    await page81.goto('https://blankstarts.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page81.waitFor(5000)

    const page82 = await browser.newPage();          // open new tab2
    await page82.goto('https://cinematix.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page82.waitFor(5000)

    const page83 = await browser.newPage();          // open new tab2
    await page83.goto('https://coperx.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page83.waitFor(5000)

    const page84 = await browser.newPage();          // open new tab2
    await page84.goto('https://exomove.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page84.waitFor(5000)

    const page85 = await browser.newPage();          // open new tab2
    await page85.goto('https://ezerox.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page85.waitFor(5000)

    const page86 = await browser.newPage();          // open new tab2
    await page86.goto('https://fightcadez.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page86.waitFor(5000)

    const page87 = await browser.newPage();          // open new tab2
    await page87.goto('https://galzbang.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page87.waitFor(5000)

    const page88 = await browser.newPage();          // open new tab2
    await page88.goto('https://hondaland.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page88.waitFor(5000)

    const page89 = await browser.newPage();          // open new tab2
    await page89.goto('https://moviemost.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page89.waitFor(5000)

    const page90 = await browser.newPage();          // open new tab2
    await page90.goto('https://musiciibdm.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page90.waitFor(5000)

    const page91 = await browser.newPage();          // open new tab2
    await page91.goto('https://nextdogs.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page91.waitFor(5000)

    const page92 = await browser.newPage();          // open new tab2
    await page92.goto('https://rxtype.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page92.waitFor(5000)

    const page93 = await browser.newPage();          // open new tab2
    await page93.goto('https://sidekicks.tk', { timeout: 0, waitUntil: "networkidle2" });
    await page93.waitFor(5000)

    const page94 = await browser.newPage();          // open new tab2
    await page94.goto('https://skateshops.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page94.waitFor(5000)

    const page95 = await browser.newPage();          // open new tab2
    await page95.goto('https://stringrank.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page95.waitFor(5000)

    const page96 = await browser.newPage();          // open new tab2
    await page96.goto('https://thrillerzen.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page96.waitFor(5000)

    const page97 = await browser.newPage();          // open new tab2
    await page97.goto('https://travelcia.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page97.waitFor(5000)

    const page98 = await browser.newPage();          // open new tab2
    await page98.goto('https://vialactium.cf ', { timeout: 0, waitUntil: "networkidle2" });
    await page98.waitFor(5000)

    const page99 = await browser.newPage();          // open new tab2
    await page99.goto('https://virtualbrawl.ga ', { timeout: 0, waitUntil: "networkidle2" });
    await page99.waitFor(5000)

    const page100 = await browser.newPage();          // open new tab2
    await page100.goto('https://westernmad.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page100.waitFor(5000)

    const page101 = await browser.newPage();          // open new tab2
    await page101.goto('https://westernwar.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page101.waitFor(5000)

    const page102 = await browser.newPage();          // open new tab2
    await page102.goto('https://westpazck.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page102.waitFor(5000)

    const page103 = await browser.newPage();          // open new tab2
    await page103.goto('https://weststorn.ga ', { timeout: 0, waitUntil: "networkidle2" });
    await page103.waitFor(5000)

}

console.log('Firts program', hours, ":", minutes, ':', seconds);
run();
