'use strict';
const cron = require('node-cron');
const puppeteer = require('puppeteer-core');
let chromePaths = require('chrome-paths');

mylist()

cron.schedule('0 */25 * * * *', function () {
  mylist()
});

async function mylist() {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      // userDataDir: dir,
      executablePath: chromePaths.chrome,
      args: [
        '--incognito',
        '--aggressive-cache-discard',
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

    browser.on('targetcreated', async (target) => { //
      if (target.type() === 'page') {               // if it tab/page
        const page = await target.page();      // declare it
        const url = page.url();
        if (url.search('https://vitalspace.ml') == -1) {     // if url is not like site.com (pop-up window whith ads to anower site)

          setTimeout(async () => {

            await page.close();           // close this page
          }, 1320000);

        }
      }
    });

    const [page] = await browser.pages();
    setTimeout(async () => {
      await page.close();
    }, 1320000);

    await page.goto('https://vitalspace.ml', { timeout: 0, waitUntil: "networkidle2" });

    await page.$eval('#web2', elem => elem.click());
    await page.waitFor(5000)
    await page.$eval('#web3', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web4', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web5', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web6', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web7', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web8', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web9', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web10', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web11', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web12', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web13', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web15', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web16', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web17', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web18', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web19', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web20', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web21', elem => elem.click());
    await page.waitFor(5000)

    await page.$eval('#web22', elem => elem.click());

  } catch (error) {
    console.log(error)
  }
}
