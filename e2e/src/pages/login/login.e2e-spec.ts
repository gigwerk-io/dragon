import {LoginPage} from './login.po';
import {browser, by, element, ExpectedConditions} from 'protractor';

describe('login page', () => {
  const page = new LoginPage();
  
  it('should fill out form', () => {
    page.load();
    element(by.id('email')).sendKeys('admin_one');
    element(by.id('password')).sendKeys('password');
    expect(element(by.id('email')).getAttribute('value')).toBe('admin_one')
    expect(element(by.id('password')).getAttribute('value')).toBe('password')
  });

  it('should submit form and succeed', () => {
    page.load();

    element(by.id('email')).sendKeys('admin_one');
    element(by.id('password')).sendKeys('password');
    element(by.id('login-button')).click();
    browser.wait(expect(page.wentToNextPage()).toBe(browser.baseUrl + 'dashboard'), 5000)
  })
});
