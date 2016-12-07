import 'chromedriver'
import { Builder } from 'selenium-webdriver'
import normalizeUrl from 'normalize-url'
import { join } from 'path'
import { Page } from './page'

export class Browser {
  constructor () {
    this.driver = new Builder().forBrowser('chrome').build()
    this.tmpDir = join(process.cwd(), 'tmp')
  }

  async open (url) {
    await this.driver.get(normalizeUrl(url))
    const page = new Page(this)
    await page.load()
    return page
  }

  quit () {
    this.driver.quit()
  }
}

export { Key } from 'selenium-webdriver'
