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

    await page.goto('https://juegosgeek.xyz', "width=200,height=100", { timeout: 0, waitUntil: "networkidle2" });

    if (await page.$('.web1') !== null) {
      await page.$eval('.web1', elem => elem.click());
      await page.bringToFront();
      await page.waitFor(5000)
    } else {
      console.log('no se pudo 1');
    }

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

    if (await page.$('.web23') !== null) {
      await page.$eval('.web23', elem => elem.click());
    } else {
      console.log('pase por 23')
    }

    if (await page.$('.web24') !== null) {
      await page.$eval('.web24', elem => elem.click());
    } else {
      console.log('pase por 24')
    }

    // if (await page.$('.web25') !== null) {
    //   await page.$eval('.web25', elem => elem.click());
    // } else {
    //   console.log('pase por 25')
    // }

    // if (await page.$('.web26') !== null) {
    //   await page.$eval('.web26', elem => elem.click());
    // } else {
    //   console.log('pase por 26')
    // }

    // if (await page.$('.web27') !== null) {
    //   await page.$eval('.web27', elem => elem.click());
    // } else {
    //   console.log('pase por 27')
    // }

    // if (await page.$('.web28') !== null) {
    //   await page.$eval('.web28', elem => elem.click());
    // } else {
    //   console.log('pase por 28')
    // }

    // if (await page.$('.web29') !== null) {
    //   await page.$eval('.web29', elem => elem.click());
    // } else {
    //   console.log('pase por 29')
    // }

    // if (await page.$('.web30') !== null) {
    //   await page.$eval('.web30', elem => elem.click());
    // } else {
    //   console.log('pase por 30')
    // }

    // if (await page.$('.web31') !== null) {
    //   await page.$eval('.web31', elem => elem.click());
    // } else {
    //   console.log('pase por 31')
    // }


    // if (await page.$('.web32') !== null) {
    //   await page.$eval('.web32', elem => elem.click());
    // } else {
    //   console.log('pase por 32')
    // }

    // if (await page.$('.web33') !== null) {
    //   await page.$eval('.web33', elem => elem.click());
    // } else {
    //   console.log('pase por 33')
    // }

    // if (await page.$('.web34') !== null) {
    //   await page.$eval('.web34', elem => elem.click());
    // } else {
    //   console.log('pase por 34')
    // }

    // if (await page.$('.web35') !== null) {
    //   await page.$eval('.web35', elem => elem.click());
    // } else {
    //   console.log('pase por 35')
    // }


    // if (await page.$('.web36') !== null) {
    //   await page.$eval('.web36', elem => elem.click());
    // } else {
    //   console.log('pase por 36')
    // }

    // if (await page.$('.web37') !== null) {
    //   await page.$eval('.web37', elem => elem.click());
    // } else {
    //   console.log('pase por 37')
    // }

    // if (await page.$('.web38') !== null) {
    //   await page.$eval('.web38', elem => elem.click());
    // } else {
    //   console.log('pase por 38')
    // }

    // if (await page.$('.web39') !== null) {
    //   await page.$eval('.web39', elem => elem.click());
    // } else {
    //   console.log('pase por 39')
    // }

    // if (await page.$('.web40') !== null) {
    //   await page.$eval('.web40', elem => elem.click());
    // } else {
    //   console.log('pase por 40')
    // }

    // if (await page.$('.web41') !== null) {
    //   await page.$eval('.web41', elem => elem.click());
    // } else {
    //   console.log('pase por 41')
    // }

    // if (await page.$('.web42') !== null) {
    //   await page.$eval('.web42', elem => elem.click());
    // } else {
    //   console.log('pase por 42')
    // }

    // if (await page.$('.web43') !== null) {
    //   await page.$eval('.web43', elem => elem.click());
    // } else {
    //   console.log('pase por 43')
    // }

    // if (await page.$('.web44') !== null) {
    //   await page.$eval('.web44', elem => elem.click());
    // } else {
    //   console.log('pase por 44')
    // }

    // if (await page.$('.web45') !== null) {
    //   await page.$eval('.web45', elem => elem.click());
    // } else {
    //   console.log('pase por 45')
    // }

    // if (await page.$('.web46') !== null) {
    //   await page.$eval('.web46', elem => elem.click());
    // } else {
    //   console.log('pase por 46')
    // }

    // if (await page.$('.web47') !== null) {
    //   await page.$eval('.web47', elem => elem.click());
    // } else {
    //   console.log('pase por 47')
    // }

    // if (await page.$('.web48') !== null) {
    //   await page.$eval('.web48', elem => elem.click());
    // } else {
    //   console.log('pase por 48')
    // }

    // if (await page.$('.web49') !== null) {
    //   await page.$eval('.web49', elem => elem.click());
    // } else {
    //   console.log('pase por 49')
    // }

    // if (await page.$('.web50') !== null) {
    //   await page.$eval('.web50', elem => elem.click());
    // } else {
    //   console.log('pase por 50')
    // }


  } catch (error) {
    console.log(error)
  }
}


