// mengakses URL
beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:5173');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught Exception:', err.message);
        return false;
        }
    );
});

// validasi isi konten dalam Landing Page
describe('Landing Page', () => {
    it('successfully accessed Landing Page', () => {
        cy.contains('Partai Politik');
        cy.contains('Pelajari Pemilu 2024');
        cy.contains('Capres dan Cawapres 2024');
        cy.contains('Kilas Balik Pemilu 2019');
    });
});

// mengakses Partai Page dari Landing Page
describe('Partai Page', () => {
    it('successfully accessed Partai Page', async () => {        
        cy.contains('Partai').click();
        cy.url().should('include', '/partai-politik');
        
        // validasi kelengkapan partai (24 partai)
        cy.contains('Partai Kebangkitan Nusantara (PKN)');
        cy.contains('Partai Hati Nurani Rakyat (Hanura)');
        cy.contains('Partai Demokrat');
        cy.contains('Partai Kebangkitan Bangsa (PKB)');
        cy.contains('Partai Demokrasi Indonesia Perjuangan (PDI-P)');
        cy.contains('Partai Darul Aceh (PDA)');
        cy.contains('Partai Gelombang Rakyat Indonesia (Gelora)');
        cy.contains('Partai Persatuan Pembangunan (PPP)');
        cy.contains('Partai Aceh');
        cy.contains('Partai Adil Sejahtera Aceh (PAS Aceh)');
        cy.contains('Partai Persatuan Indonesia (Perindo)');
        cy.contains('Partai Bulan Bintang (PBB)');
        cy.contains('Partai Soliditas Independent Rakyat Aceh (SIRA)');
        cy.contains('Partai Garda Perubahan Indonesia (Garuda)');
        cy.contains('Partai Nasional Demokrat (NasDem)');
        cy.contains('Partai Gerakan Indonesia Raya (Gerindra)');
        cy.contains('Partai Ummat');
        cy.contains('Partai Nangroe Aceh (PNA)');
        cy.contains('Partai Amanat Nasional (PAN)');
        cy.contains('Partai Golongan Karya (Golkar)');
        cy.contains('Partai Buruh');
        cy.contains('Partai Keadilan Sejahtera (PKS)');
        cy.contains('Partai Solidaritas Indonesia (PSI)');
        cy.contains("Partai Generasi Atjeh Beusaboh Tha'at Dan Taqwa (Gabthat)");
    });

    // it('find data using the search bar', () => {
    //     cy.get('input[placeholder="Search"]').type('demokrat{enter}');
    // });

    it('clicks all "View here" button', async () => {
        const response = await fetch('http://localhost:5000/partaiInfos');
        const partai = await response.json();
        partai.map((element, index) => {
            cy.get(`.card:nth-child(${index}) a[href^="/partai-politik/${element._id}"]`).click();
        });
    });
});

describe('Detail Partai Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/partai-politik/');
        cy.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught Exception:', err.message);
            return false;
            }
        );
    });
    
    it('successfully accessed Detail Partai from buttons', () => {
        cy.get('a:contains("View here")').eq(20).click()
    });
});


// describe('Login Page', () => {
//     it('should login by email', () => {
//         cy.contains('Login').click();
//     });
// });
