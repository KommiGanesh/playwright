import { test } from '@playwright/test';
import Loginpage from '../pages/loginpage';

test("test", async ({page})=>{

    const loginpage= new Loginpage(page);

    await loginpage.navigateToLoginPage();
    await loginpage.fillUsername("ganeshkmmi@gamil.com");
    await loginpage.fillPassword("Ganesh@1234");

    const homepage= await loginpage.clickLoginButton();
    await homepage.expectservicetitleTobevisible();
});