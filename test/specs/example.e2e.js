import LoginPage from  '../pageobjects/login.page.js';

describe('My Login application', () => {
    beforeAll('Navigate to url', () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('should not login with empty inputs', async () => {
        await LoginPage.inputUsername.setValue('')
        await LoginPage.inputPassword.setValue('')
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required')
        //await LoginPage.login('', '');
    });
});
