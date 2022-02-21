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
      headless: false,
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

    // await page.waitForSelector('#web2')
    // await page.$eval('#web2', elem => elem.click());
    // await page.waitFor(5000)
    if (await page.$('.web2') !== null) {
      await page.$eval('.web2', elem => elem.click());
      await page.waitFor(5000)

    } else {
      console.log('no se pudo 2');
    }

    // await page.waitForSelector('#web3')
    // await page.$eval('#web3', elem => elem.click());
    // await page.waitFor(5000)
    if (await page.$('.web3') !== null) {
      await page.$eval('.web3', elem => elem.click());
      await page.waitFor(5000)

    } else {
      console.log('pase por 3')
    }

    // await page.waitForSelector('#web4')
    // await page.$eval('#web4', elem => elem.click());
    // await page.waitFor(5000)
    if (await page.$('.web4') !== null) {
      await page.$eval('.web4', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 4')
    }

    // await page.waitForSelector('#web5')
    // await page.$eval('#web5', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 5')
    if (await page.$('.web5') !== null) {
      await page.$eval('.web5', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 5')
    }

    // await page.waitForSelector('#web6')
    // await page.$eval('#web6', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 6')
    if (await page.$('.web6') !== null) {
      await page.$eval('.web6', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 6')
    }

    // await page.waitForSelector('#web7')
    // await page.$eval('#web7', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 7')
    if (await page.$('.web7') !== null) {
      await page.$eval('.web7', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 7')
    }

    // await page.waitForSelector('#web8')
    // await page.$eval('#web8', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 8')
    if (await page.$('.web8') !== null) {
      await page.$eval('.web8', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 8')
    }

    // await page.waitForSelector('#web9')
    // await page.$eval('#web9', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 9')
    if (await page.$('.web9') !== null) {
      await page.$eval('.web9', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 9')
    }

    // await page.waitForSelector('#web10')
    // await page.$eval('#web10', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 10')
    if (await page.$('.web10') !== null) {
      await page.$eval('.web10', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 10')
    }


    // await page.waitForSelector('#web11')
    // await page.$eval('#web11', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 11')
    if (await page.$('.web11') !== null) {
      await page.$eval('.web11', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 11')
    }

    // await page.waitForSelector('#web12')
    // await page.$eval('#web12', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 12')
    if (await page.$('.web12') !== null) {
      await page.$eval('.web12', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 12')
    }
    // await page.waitForSelector('#web13')
    // await page.$eval('#web13', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 13')
    if (await page.$('.web13') !== null) {
      await page.$eval('.web13', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 13')
    }

    // await page.waitForSelector('#web14')
    // await page.$eval('#web14', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 14')
    if (await page.$('.web14') !== null) {
      await page.$eval('.web14', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 14')
    }

    // await page.waitForSelector('#web15')
    // await page.$eval('#web15', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 15')
    if (await page.$('.web15') !== null) {
      await page.$eval('.web15', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 15')
    }

    // await page.waitForSelector('#web16')
    // await page.$eval('#web16', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 16')
    if (await page.$('.web16') !== null) {
      await page.$eval('.web16', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 16')
    }

    // await page.waitForSelector('#web17')
    // await page.$eval('#web17', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 17')
    if (await page.$('.web17') !== null) {
      await page.$eval('.web17', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 17')
    }

    // await page.waitForSelector('#web18')
    // await page.$eval('#web18', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 18')
    if (await page.$('.web18') !== null) {
      await page.$eval('.web18', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 18')
    }
    // await page.waitForSelector('#web19')
    // await page.$eval('#web19', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 19')
    if (await page.$('.web19') !== null) {
      await page.$eval('.web19', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 19')
    }

    // await page.waitForSelector('#web20')
    // await page.$eval('#web20', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 20')
    if (await page.$('.web20') !== null) {
      await page.$eval('.web20', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 20')
    }
    // await page.waitForSelector('#web21')
    // await page.$eval('#web21', elem => elem.click());
    // await page.waitFor(5000)
    // console.log('pase por 21')
    if (await page.$('.web21') !== null) {
      await page.$eval('.web21', elem => elem.click());
      await page.waitFor(5000)
    } else {
      console.log('pase por 21')
    }
    // await page.waitForSelector('#web22')
    // await page.$eval('#web22', elem => elem.click());
    // console.log('pase por 22')
    if (await page.$('.web22') !== null) {
      await page.$eval('.web22', elem => elem.click());
    } else {
      console.log('pase por 2')
    }

  } catch (error) {
    console.log(error)
  }
}


