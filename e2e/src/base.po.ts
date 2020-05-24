import {browser, by, element, ElementFinder, ExpectedConditions} from 'protractor';

export class PageObjectBase {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  load() {
    return browser.get(this.path);
  }

  async waitForSelector(el: ElementFinder, timeout = 5000) {
    return browser.wait(ExpectedConditions.presenceOf(el), timeout);
  }

  async enterInputById(id: string, text: string) {
    const el = element(by.id(id));
    await this.waitForSelector(el);
    console.log(id);
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  async enterInputByCss(css: string, text: string) {
    const el = element(by.css(css));
    await this.waitForSelector(el);
    const inp = el.element(by.css('input'));
    const val = await inp.getId();
    console.log('val');
    inp.sendKeys(text);
  }

  async enterTextareaText(id: string, text: string) {
    const el = element(by.id(id));
    await this.waitForSelector(el);
    const inp = el.element(by.css('textarea'));
    inp.sendKeys(text);
  }

  async wentToNextPage() {
    browser.waitForAngular();
    return browser.getCurrentUrl();
  }

  restartBrowser() {
   return browser.restart();
  }

  async clickButton(id: string) {
    const el = element(by.id(id));
    browser.wait(ExpectedConditions.elementToBeClickable(el), 200);
    el.click();
  }
}
