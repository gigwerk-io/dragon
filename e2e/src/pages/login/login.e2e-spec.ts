import {LoginPage} from './login.po';
import {browser, by, element, ExpectedConditions} from 'protractor';

describe('login page', () => {
  const page = new LoginPage();

  beforeEach(() => {
    page.load();
  });

  afterEach(() => {
    page.restartBrowser();
  });

  it('should go to login', function () {
    page.load();
    expect(page.wentToNextPage()).toBe(browser.baseUrl + 'login');
  });
});
