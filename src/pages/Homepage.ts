import {Page, expect} from '@playwright/test';
import { timeout } from '../../playwright.config';

export default class Homepage {
    private readonly serviceTitlelocator="Service";


    constructor(private page: Page) {

    }

    async expectservicetitleTobevisible() {
        await expect(this.page.getByTitle(this.serviceTitlelocator)).toBeVisible({timeout:1500});
    }
}