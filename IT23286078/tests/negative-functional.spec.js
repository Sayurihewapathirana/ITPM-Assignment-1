const { test, expect } = require('@playwright/test');

const negativeCases = [
    { 
        id: 'Neg_Fun_0001', 
        input: 'oyaa waeda tika iwaradha?', 
        expected: 'ඔයා වැඩ ටික ඉවරද?' 
    },
    { 
        id: 'Neg_Fun_0002',  
        input: 'Adhamataofficeekataennawennenae', 
        expected: 'අද මට office එකට එන්න වෙන්නෙ නැ' 
    },
    { 
        id: 'Neg_Fun_0003', 
        input: 'AdA MaMa HaWaSaTa AkKaLaaGe GeDhArA YaNaWaa', 
        expected: 'අද මම හවසට අක්කලාගෙ ගෙදර යනවා' 
    },
    { 
        id: 'Neg_Fun_0004', 
        input: 'Api heta hwsata film ekk blnna ymudaa', 
        expected: 'අපි හෙට හවසට film එකක් බලන්න යමුද' 
    },
    { 
        id: 'Neg_Fun_0005',  
        input: 'Magee sayuri2002@gmail.com address ekata document tika evanna puluvandha', 
        expected: 'මගේ sayuri2002@gmail.com address එකට document ටික එවන්න පුලුවන්ද' 
    },
    { 
        id: 'Neg_Fun_0006',  
        input: 'mee dhavas vala mama Springboot valin project ekak karana gaman innee.', 
        expected: 'මේ දවස් වල මම springboot වලින් project එකක් කරන ගමන් ඉන්නේ.' 
    },
    { 
        id: 'Neg_Fun_0007', 
        input: 'mama adha abc aayathanayee yaaluvekva hamba venna giyaa', 
        expected: 'මම අද abc ආයතනයේ යාලුwඑක්ව හම්බ්හ wඑන්න ගියා' 
    },
    { 
        id: 'Neg_Fun_0008', 
        input: 'Mama Adha #NewPost ekak daanavaa oyaala ekata comment karanna', 
        expected: 'මම අද #NewPost එකක් දානවා ඔයාල එකට comment කරන්න' 
    },
    { 
        id: 'Neg_Fun_0009',  
        input: 'mage  birthday gift ekata ammaa nike sapaththu dhekak aran dhunnaa. mata hari santhoosayi.', 
        expected: 'mage  birthday gift එකට අම්මා nike සපත්තු දෙකක් අරන් දුන්නා. මට හරි සන්තෝසයි.' 
    },
    { 
        id: 'Neg_Fun_0010',  
        input: 'Mata lenovo lap ekak maamaa rata idhan evvaa', 
        expected: 'මට lenovo lap එකක් මාමා රට ඉදන් එව්වා' 
    }
];

test.describe('SwiftTranslator Negative Functional Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    });

    for (const scenario of negativeCases) {
        test(`${scenario.id}: ${scenario.desc}`, async ({ page }) => {
            const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
            
            await inputArea.click();
            // pressSequentially triggers the conversion engine correctly
            await inputArea.pressSequentially(scenario.input, { delay: 35 });

            // check for the expected output string to be visible on the page
            await expect(page.getByText(scenario.expected, { exact: false })).toBeVisible({ timeout: 15000 });
            
            console.log(`PASSED: ${scenario.id}`);
        });
    }
});