 import {Page} from "@playwright/test";
 import Homepage from "./Homepage";
 
 export default class Loginpage {
    private readonly usernameInputselector="#username";
    private readonly passwordInputselector="#password";
    private readonly loginButtonselector="#Login";

    constructor(private page:Page) {

    }
    async navigateToLoginPage() {
        await this.page.goto("/");
    }

    async  fillUsername(username: string){
        await this.page.locator(this.usernameInputselector).fill(username);
    
    }
    async fillPassword(password: string){
        await this.page.locator(this.passwordInputselector).fill(password);
    
    }

    async clickLoginButton() {
        await this.page.locator(this.loginButtonselector).click().catch((error)=>{
            console.error('Error clicking login button: ${error}');
            throw error;
        });

        const homepage= new Homepage(this.page);
        return homepage;

        
        
    }
 }


