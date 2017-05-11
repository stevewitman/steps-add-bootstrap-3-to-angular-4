import { StepsAngular4AddBootstrap3Page } from './app.po';

describe('steps-angular4-add-bootstrap3 App', () => {
  let page: StepsAngular4AddBootstrap3Page;

  beforeEach(() => {
    page = new StepsAngular4AddBootstrap3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
