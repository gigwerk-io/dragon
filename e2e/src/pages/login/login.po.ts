import {browser, by, element, ElementFinder, ExpectedConditions} from 'protractor';
import {PageObjectBase} from '../../base.po';

export class LoginPage extends PageObjectBase {

  constructor() {
    super('/login');
  }
}
