const { test, expect } = require('@playwright/test');

const testCases = [
    { 
        id: 'Pos_Fun_0001', 
        input: 'aayuboovan ! suba udhaeesanak veevaa siyalu dhenaatama. palaveni paadama perala ganna ', 
        expected: 'ආයුබෝවන් ! සුබ උදෑසනක් වේවා සියලු දෙනාටම. පලවෙනි පාඩම පෙරල ගන්න' 
    },
    { 
        id: 'Pos_Fun_0002', 
        input: 'machan mata adha school ekee igaennuva note tika evanna puluvandha?  mata science class adha  7pm  iita kalin ivara karannone. vaeda tika evalaa  call ekak gahanna. monahari geenna kivuvanam ee tikath evannakoo. time table ekath ohomama dhaanna.', 
        expected: 'මචන් මට අද school එකේ ඉගැන්නුව note ටික එවන්න පුලුවන්ද?  මට science class අද  7pm ඊට කලින් ඉවර කරන්නොනෙ. වැඩ ටික එවලා  call එකක් ගහන්න. මොනහරි ගේන්න කිවුවනම් ඒ ටිකත් එවන්නකෝ. time table එකත් ඔහොමම දාන්න.' 
    },
    { 
        id: 'Pos_Fun_0003', 
        input: 'api haema christmas ekatama aachchi ammalaage gedhara yanavaa.', 
        expected: 'අපි හැම christmas එකටම ආච්චි අම්මලාගෙ ගෙදර යනවා.' 
    },
    { 
        id: 'Pos_Fun_0004', 
        input: 'havasata sellam karamudha ?', 
        expected: 'හවසට සෙල්ලම් කරමුද ?' 
    },
    { 
        id: 'Pos_Fun_0005', 
        input: 'aayee kavadhaadha ennee oyaalaa?', 
        expected: 'ආයේ කවදාද එන්නේ ඔයාලා?' 
    },
    { 
        id: 'Pos_Fun_0006', 
        input: 'ohoma aluthin patan ganna paththaravalata leeKakayoo gannava kiyala thiyana dhaenviim dhaekalaa eevata liyala mata hari hari vaeda velath thiyanava.', 
        expected: 'ඔහොම අලුතින් පටන් ගන්න පත්තරවලට ලේඛකයෝ ගන්නව කියල තියන දැන්වීම් දැකලා ඒවට ලියල මට හරි හරි වැඩ වෙලත් තියනව.' 
    },
    { 
        id: 'Pos_Fun_0007', 
        input: 'badagini mata mama yanavaa kanna', 
        expected: 'බඩගිනි මට මම යනවා කන්න' 
    },
    { 
        id: 'Pos_Fun_0008', 
        input: 'mee thiyenne ara aluthin aapu chocolate eka. api eeka aragamudha? ', 
        expected: 'මේ තියෙන්නෙ අර අලුතින් ආපු chocolate එක. අපි ඒක අරගමුද? ' 
    },
    { 
        id: 'Pos_Fun_0009', 
        input: 'anee innakoo', 
        expected: 'අනේ ඉන්නකෝ' 
    },
    { 
        id: 'Pos_Fun_0010', 
        input: 'oyaa dhannavadha iiyee match eka balanna mama giyaa apee class ekee yaluvoo ekka. api edhdhi godak raee unee naee apee kattiya mulin bat karapu nisaa.', 
        expected: 'ඔයා දන්නවද ඊයේ match එක බලන්න මම ගියා අපේ class එකේ යලුවෝ එක්ක. අපි එද්දි ගොඩක් රෑ උනේ නෑ අපේ කට්ටිය මුලින් bat කරපු නිසා. ' 
    },
    { 
        id: 'Pos_Fun_0011', 
        input: 'ithin mata mokoo ', 
        expected: 'ඉතින් මට මොකෝ ' 
    },
    { 
        id: 'Pos_Fun_0012', 
        input: 'mama aasanaee ehee yanna. mama innavaa gedhara', 
        expected: 'මම ආසනෑ එහේ යන්න. මම ඉන්නවා ගෙදර' 
    },
    { 
        id: 'Pos_Fun_0013', 
        input: 'api giyaa giya sathiyee trip ekak nuvara eLiye. harima lassanayi api hitapu hotel eken eliyata aavama muLu paaLaathama peenavaa. hotel ekata yatin main road eka. haemathaenama gas valin pirilaa. ee gas atharin reel paara yanavaa. eeka oyaa gihinma balanna oone. api hithan innavaa aayemath ehe yanna. ethakota oyath yamu apith ekka. dhaemmama ammalaagen ahala thiyaganna. matanam ivasillak naee  aayee paarak ehee yanakan.', 
        expected: 'අපි ගියා ගිය සතියේ trip එකක් නුවර එළියෙ. හරිම ලස්සනයි අපි හිටපු hotel එකෙන් එලියට ආවම මුළු පාළාතම පේනවා. hotel එකට යටින් main road එක. හැමතැනම ගස් වලින් පිරිලා. ඒ ගස් අතරින් රේල් පාර යනවා. ඒක ඔයා ගිහින්ම බලන්න ඕනෙ. අපි හිතන් ඉන්නවා ආයෙමත් එහෙ යන්න. එතකොට ඔයත් යමු අපිත් එක්ක. දැම්මම අම්මලාගෙන් අහල තියගන්න. මටනම් ඉවසිල්ලක් නෑ  ආයේ පාරක් එහේ යනකන්.' 
    },
    { 
        id: 'Pos_Fun_0014', 
        input: 'api heta mokadha karannee machan. film ekak balanna  yamudha?', 
        expected: 'අපි හෙට මොකද කරන්නේ මචන්. film එකක් බලන්න  යමුද?' 
    },
    { 
        id: 'Pos_Fun_0015', 
        input: 'mama adha gedhara naehae. mama yanavaa airport ee nisaa edhdhi paandhara veyi. ', 
        expected: 'මම අද ගෙදර නැහැ. මම යනවා airport ඒ නිසා එද්දි පාන්දර වෙයි. ' 
    },
    { 
        id: 'Pos_Fun_0016', 
        input: 'api mee pooyata pansalee silganna inne. enavadha oyaalath. ethakota apita puluvan haemooma ekka havasata dhansal yanna. mee paara huGAk dhansal thiyanavaa kiyala apee maamaa kivuvaa.', 
        expected: 'අපි මේ පෝයට පන්සලේ සිල්ගන්න ඉන්නේ. එනවද ඔයාලත්. එතකොට අපිට පුලුවන් හැමෝම එක්ක හවසට දන්සල් යන්න. මේ පාර හුඟක් දන්සල් තියනවා කියල අපේ මාමා කිවුවා.' 
    },
    { 
        id: 'Pos_Fun_0017', 
        input: 'mata kiyannepaa mama tharahayi', 
        expected: 'මට කියන්නෙපා මම තරහයි' 
    },
    { 
        id: 'Pos_Fun_0018', 
        input: 'Oyaa adha koovil yanavadha ? yanavanam maath ennam.', 
        expected: 'ඔයා අද කෝවිල් යනවද ? යනවනම් මාත් එන්නම්.' 
    },
    { 
        id: 'Pos_Fun_0019', 
        input: 'Adha havasa staff bus eka naee kiyalaa kiyanna kivvaa.', 
        expected: 'අද හවස staff bus එක නෑ කියලා කියන්න කිව්වා.' 
    },
    { 
        id: 'Pos_Fun_0020', 
        input: 'mata thalapath 500g dhenna puluvandha ?', 
        expected: 'මට තලපත් 500g දෙන්න පුලුවන්ද ?' 
    },
    { 
        id: 'Pos_Fun_0021', 
        input: 'Ammee mama adha saman lagee gedhara raeeta nathara venavaa.', 
        expected: 'අම්මේ මම අද සමන් ලගේ ගෙදර රෑට නතර වෙනවා.' 
    },
    { 
        id: 'Pos_Fun_0022', 
        input: 'thaaththee thee eka laeesthyi.', 
        expected: 'තාත්තේ තේ එක ලෑස්ත්යි.' 
    },
    { 
        id: 'Pos_Fun_0023', 
        input: 'siithala vaedi nedha? AC eka adu karamudha?', 
        expected: 'සීතල වැඩි නේද? AC එක අඩු කරමුද? ' 
    },
    { 
        id: 'Pos_Fun_0024', 
        input: 'oyaa adha lectures enavadha? enavanam PAF vala giya sathiyee notes tika genna puluvandha?', 
        expected: 'ඔයා අද lectures එනවද? එනවනම් PAF වල ගිය සතියේ notes ටික ගෙන්න පුලුවන්ද?' 
    },
];

test.describe('SwiftTranslator Positive Functional Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    });
for (const scenario of testCases) {
        test(`${scenario.id}`, async ({ page }) => {
            const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
            
            await inputArea.click();
            
            // Fix 1: Speed up typing and increase action timeout to 60 seconds
            await inputArea.pressSequentially(scenario.input, { 
                delay: 30, 
                timeout: 60000 
            });

            // Fix 2: Use exact: false to handle invisible character differences
            // Fix 3: Standardize timeout to 30s (more than enough once typed)
            await expect(page.getByText(scenario.expected, { exact: false }))
                .toBeVisible({ timeout: 30000 });
            
            console.log(`PASSED: ${scenario.id}`);
        });
    }
});