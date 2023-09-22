import { describe, beforeAll, beforeEach, it } from '@jest/globals';
import { by, element, expect, device } from 'detox';



describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    
    await device.launchApp({ newInstance: false, launchArgs: { detoxPrintBusyIdleResources: 'YES' } });
  });

  it('should login and signup visible', async () => {

    await expect(element(by.id('login'))).toBeVisible();

    await expect(element(by.id('signup'))).toBeVisible();

    await element(by.id('login')).tap()

  });
});
