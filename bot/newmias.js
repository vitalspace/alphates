'use strict';
const puppeteer = require('puppeteer-core');
let chromePaths = require('chrome-paths');
process.setMaxListeners(Infinity);

mylist()

async function mylist() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      // userDataDir: dir,
      executablePath: chromePaths.chrome,
      args: [
        '--incognito',
        '--aggressive-cache-discard',
        '--unlimited-storage',
        '--full-memory-crash-report',
        '--disable-dev-shm-usage',
        '--force-gpu-mem-available-mb',
        '--disable-gpu',
        '--no-sandbox',
        "--disable-setuid-sandbox"
      ],
      defaultViewport: null
    });

    const [page] = await browser.pages();

    browser.on('disconnected', async () => {
      mylist();
    });

    await page.goto('https://vitalspace.ml',  "width=200,height=100",  { timeout: 0, waitUntil: "networkidle2" });

 
    if (await page.$('.web2') !== null) {
      await page.$eval('.web2', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('no se pudo 2');
    }

    if (await page.$('.web3') !== null) {
      await page.$eval('.web3', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 3')
    }

    if (await page.$('.web4') !== null) {
      await page.$eval('.web4', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 4')
    }

    if (await page.$('.web5') !== null) {
      await page.$eval('.web5', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 5')
    }

    if (await page.$('.web6') !== null) {
      await page.$eval('.web6', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 6')
    }

    if (await page.$('.web7') !== null) {
      await page.$eval('.web7', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 7')
    }

    if (await page.$('.web8') !== null) {
      await page.$eval('.web8', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 8')
    }

    if (await page.$('.web9') !== null) {
      await page.$eval('.web9', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 9')
    }

    if (await page.$('.web10') !== null) {
      await page.$eval('.web10', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 10')
    }

    if (await page.$('.web11') !== null) {
      await page.$eval('.web11', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 11')
    }

    if (await page.$('.web12') !== null) {
      await page.$eval('.web12', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 12')
    }

    if (await page.$('.web13') !== null) {
      await page.$eval('.web13', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 13')
    }

    if (await page.$('.web14') !== null) {
      await page.$eval('.web14', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 14')
    }

    if (await page.$('.web15') !== null) {
      await page.$eval('.web15', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 15')
    }

    if (await page.$('.web16') !== null) {
      await page.$eval('.web16', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 16')
    }

    if (await page.$('.web17') !== null) {
      await page.$eval('.web17', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 17')
    }

    if (await page.$('.web18') !== null) {
      await page.$eval('.web18', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 18')
    }

    if (await page.$('.web19') !== null) {
      await page.$eval('.web19', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 19')
    }

    if (await page.$('.web20') !== null) {
      await page.$eval('.web20', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 20')
    }

    if (await page.$('.web21') !== null) {
      await page.$eval('.web21', elem => elem.click());
      await page.bringToFront();  
      await page.waitFor(5000)
    } else {
      console.log('pase por 21')
    }

    if (await page.$('.web22') !== null) {
      await page.$eval('.web22', elem => elem.click());
    } else {
      console.log('pase por 2')
    }

    await page.waitFor(1080000)
    await browser.close()

  } catch (error) {
    console.log(error)
  }
}


