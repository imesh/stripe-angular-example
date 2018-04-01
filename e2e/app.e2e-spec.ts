import { StripeAngularExamplePage } from './app.po';

describe('stripe-angular-example App', () => {
  let page: StripeAngularExamplePage;

  beforeEach(() => {
    page = new StripeAngularExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
