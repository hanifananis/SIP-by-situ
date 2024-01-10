// mengakses URL website SIP
beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://ppl2-sip.vercel.app/');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught Exception:', err.message);
        return false;
        }
    );
});

// validasi isi konten dalam Landing Page
describe('Landing Page', () => {
    it('successfully accessed Landing Page', () => {
        cy.contains('Kenali Proses Pemilu dengan Lebih Dekat');
        cy.contains('Ayo Bergabung di Forum Kami').click();
        cy.contains('Partai Politik');
    });

    it('successfully accessed Pelajari Pemilu 2024', () => {
        cy.contains('Pelajari Pemilu 2024');
        cy.get('a:contains("Klik untuk membaca")').eq(0).click();
        cy.go('back');
    });

    it('successfully accessed Capres dan Cawapres 2024', () => {
        cy.contains('Capres dan Cawapres 2024');

        // open card Calon 1
        cy.get('a:contains("Lihat Profil Calon")').eq(0).click();
        cy.contains('Deskripsi').click();
        cy.contains('Visi').click();
        cy.contains('Misi').click();
        cy.go('back');

        // open card Calon 2
        cy.get('a:contains("Lihat Profil Calon")').eq(1).click();
        cy.contains('Deskripsi').click();
        cy.contains('Visi').click();
        cy.contains('Misi').click();
        cy.go('back');

        // open card Calon 3
        cy.get('a:contains("Lihat Profil Calon")').eq(2).click();
        cy.contains('Deskripsi').click();
        cy.contains('Visi').click();
        cy.contains('Misi').click();
        cy.go('back');
    });

    it('successfully accessed Kilas Balik Pemilu 2019', () => {
        cy.contains('Kilas Balik Pemilu 2019');
        cy.get('a:contains("Klik untuk membaca")').eq(1).click();
        cy.contains('Presiden').click();
        cy.go('back');
    });
});

// mengakses Partai Page dari Landing Page
describe('Partai Page', () => {
    beforeEach(() => {
        cy.visit('https://ppl2-sip.vercel.app/');
        cy.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught Exception:', err.message);
            return false;
            }
        );

        cy.contains('Partai').click();
        cy.url().should('include', '/partai-politik');
    });

    it('successfully accessed Partai Page', async () => {
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

    it('find partai using the search bar', () => {
        cy.get('input[placeholder="Search"]').type('demo{enter}');
        cy.wait(1000);
        cy.get('input[placeholder="Search"]').clear().type('hampura{enter}');
        cy.wait(1000);
    });
    
    it('successfully accessed Detail Partai Page', async () => {
        const response = await fetch('https://ppl-sip.onrender.com/partaiInfos');
        const partai = await response.json();
        partai.map(({_id, website, ig_sosmed, fb_sosmed}) => {
            // clicks all "View here" button
            cy.get(`a[href^="/partai-politik/${_id}"]`).click()
            // akses isi Detail Partai Page
            cy.contains('Deskripsi').click()
            cy.contains('Koalisi').click()
            cy.contains('Calon Legislatif 2024')
            cy.contains('Filter Dapil').click()
            // cy.contains('Bali').check(['Bali', 'Papua'])
            // cy.get('Submit').click();

            // cek social media partai
            if (website != ''){cy.contains(`${website}`)}
            if (ig_sosmed != ''){cy.contains(`${ig_sosmed}`)}
            if (fb_sosmed != ''){cy.contains(`${fb_sosmed}`)}
            cy.go('back')
        });
    });
});

// akses Forum Page sebelum login
describe('Forum Page (before login)', () => {
    beforeEach(() => {
        cy.visit('https://ppl2-sip.vercel.app/');
        cy.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught Exception:', err.message);
            return false;
            }
        );
        
        cy.contains('Forum').click();
        cy.url().should('include', '/forum')
    });

    it('successfully accessed Forum Page', () => {
        cy.contains('Kami dengan bangga mempersembahkan wadah ini sebagai tempat bertemunya pikiran-pikiran brilian dan pandangan yang beragam.')
        
        cy.get('.chakra-button.css-14ey0po')
            .should('be.visible')
            .click()
            .wait(2000).go('back')
    });

    it('successfully clicked a forum card', () => {
        // Ensure that at least one card exists
        cy.get('div.css-1r9s9sb')
        .find('div.chakra-card__body.css-1idwstw')
        .should('exist')
        .then(() => {
            // Get the total number of cards
            cy.get('div.css-1r9s9sb')
                .find('div.chakra-card__body.css-1idwstw')
                .its('length')
                .then((cardCount) => {
                // Scroll to each card
                for (let i = 0; i < cardCount; i++) {
                    cy.get('div.css-1r9s9sb')
                    .find('div.chakra-card__body.css-1idwstw')
                    .eq(i)
                    .scrollIntoView({ duration: 2000 });
                }

                // Click on the 7th card after scrolling
                cy.get('div.css-1r9s9sb')
                    .find('div.chakra-card__body.css-1idwstw')
                    .eq(6)
                    .click();
                });
            }
        );
        cy.go('back')
    });

    it('find forum using the search bar', () => {
        cy.get('input[placeholder="Search"]').type('debat{enter}');
        cy.wait(1000);
        cy.get('input[placeholder="Search"]').clear().type('forum{enter}');
        cy.wait(1000);
    });
});


//------------------ USER ACTIVITY ------------------

// register dan login sebagai user
describe('Register & Login Page (User)', () => {
    it('successfully register a new user account', () => {
        cy.contains('Login').click();
        cy.contains('Daftar').click();

        cy.get('input[name=name]').type('Anis')
        cy.get('input[name=email]').type('martabakma.niisss@gmail.com')
        cy.get('input[id=no_telp]').type('087770907143')
        cy.get('input[id=password]').type('Martabak66')
        cy.get('input[id=confirmPassword]').type('Martabak66{enter}')
    });

    // Login User
    it('successfully login as a user', () => {
        cy.contains('Login').click();
        cy.get('input[name=email]').type('martabakma.niisss@gmail.com')
        cy.get('input[id=password]').type('Martabak66{enter}').wait(5000)
    });
});

// akses Forum Page setelah login
describe('Forum Page (after login)', () => {
    beforeEach(() => {
        // Login User
        cy.contains('Login').click();
        cy.get('input[name=email]').type('martabakma.niisss@gmail.com')
        cy.get('input[id=password]').type('Martabak66{enter}').wait(8000)

        cy.contains('Forum').click();
        cy.url().should('include', '/forum')
    });

    it('successfully create a new forum', () => {
        cy.get('.chakra-button.css-14ey0po')
            .should('be.visible')
            .click();
        cy.get('input#judul').type('Udah tau mau milih siapa?');
        cy.get('input#isi').type('Cung yg sampe sekarang masih bingung mau milih siapa!{enter}');

        cy.get('.chakra-button.css-14ey0po')
            .should('be.visible')
            .click();
        cy.get('input#judul').type('Delete Forum');
        cy.get('input#isi').type('Ini forum yang bakal di delete{enter}').wait(3000);
    });

    it('successfully create comment', () => {
        // Click a forum card
        cy.get('div.css-1r9s9sb')
        .find('div.chakra-card__body.css-1idwstw')
        .should('exist')
        .then(() => {
            cy.get('div.css-1r9s9sb')
                .find('div.chakra-card__body.css-1idwstw')
                .eq(1)
                .click()
                .wait(2000);
            }
        );

        cy.get('input#content')
            .type('AKU! jujur aku masih bingung mau milih siapa:({enter}')
            .wait(5000)
            .clear();
        cy.get('input#content')
            .type('Delete Comment{enter}')
            .wait(5000)
            .clear()
            .go('back');
    });

    it('successfully reply a comment', () => {
        // Click a forum card
        cy.get('div.css-1r9s9sb')
        .find('div.chakra-card__body.css-1idwstw')
        .should('exist')
        .then(() => {
            cy.get('div.css-1r9s9sb')
                .find('div.chakra-card__body.css-1idwstw')
                .eq(1)
                .click()
                .wait(2000);
            }
        );

        // Add reply
        cy.get('.chakra-button.css-59vqqt')
            .should('be.visible')
            .eq(1)
            .click();
        cy.get('input#content.chakra-input.css-zh4v6t')
            .eq(2)
            .type('ini reply yang bakal di delete{enter}')
            .wait(5000)
            .clear();
        cy.get('input#content.chakra-input.css-zh4v6t')
            .eq(2)
            .type('yang penting jangan golput yaa{enter}')
            .wait(5000)
            .go('back');

        // See detail forum, comment, and reply
        cy.get('div.css-1r9s9sb')
        .find('div.chakra-card__body.css-1idwstw')
        .should('exist')
        .then(() => {
            cy.get('div.css-1r9s9sb')
                .find('div.chakra-card__body.css-1idwstw')
                .eq(1)
                .click();
            }
        );
        cy.get('.chakra-button.css-59vqqt')
            .should('be.visible')
            .eq(1)
            .click()
            .wait(5000);
    });
});

// akses profil
describe('Profile Page', () => {
    beforeEach(() => {
        // Login User
        cy.contains('Login').click();
        cy.get('input[name=email]').type('martabakma.niisss@gmail.com')
        cy.get('input[id=password]').type('Martabak66{enter}').wait(8000)

        cy.get('#menu-button-\\:r5\\:').click()
    });

    it('successfully accessed detail profile', () => {
        cy.contains('Profile').click()

        cy.contains('aniss')
        cy.contains('martabakma.niisss@gmail.com')
    });

    it('successfully edit profile', () => {
        cy.contains('Profile').click()

        // edit username
        cy.contains('Edit Profile').click();
        cy.get('input#name').should('exist').wait(2000).type('aniss{enter}').wait(2000);
        cy.get('.chakra-modal__close-btn.css-1ik4h6n')
            .should('be.visible')
            .click();
    });

    it('successfully RUD forum, comment, and reply', () => {
        cy.contains('Profile').click()

        // RUD forum
        cy.get('.chakra-tabs__tab.css-1ss3utg')
            .eq(0)
            .click()
            .wait(2000);
        cy.get('.chakra-button.css-faryu1')
            .eq(1)
            .click()
            .wait(2000)
            .go('back');
        cy.get('.chakra-button.css-1l00y4p')
            .eq(1)
            .click()
            .get('input#judul').type('Edit Delete Forum')
            .get('input#isi').type('Edit forum yang bakal di delete{enter}')
            .wait(2000);
        cy.get('.chakra-button.css-41aesz')
            .eq(1)
            .click()
            .get('footer.chakra-modal__footer.css-k0waxj')
            .find('.chakra-button.css-18zw69y')
            .click()
            .wait(3000);

        // RUD comment
        cy.get('.chakra-tabs__tab.css-1ss3utg')
            .eq(1)
            .click()
            .wait(2000);
        cy.get('.chakra-button.css-faryu1')
            .eq(2)
            .click()
            .wait(2000)
            .go('back');
            cy.get('.chakra-tabs__tab.css-1ss3utg')
                .eq(1)
                .click()
                .wait(2000);
        cy.get('.chakra-button.css-1l00y4p')
            .eq(2)
            .click()
            .get('input#content').type('Edit Delete Comment{enter}');
        cy.get('.chakra-button.css-41aesz')
            .eq(2)
            .click()
            .get('footer.chakra-modal__footer.css-k0waxj')
            .find('.chakra-button.css-18zw69y')
            .click()
            .wait(3000);

        // RUD reply
        cy.get('.chakra-tabs__tab.css-1ss3utg')
            .eq(2)
            .click()
            .wait(2000);
        cy.get('.chakra-button.css-faryu1')
            .eq(2)
            .click()
            .wait(2000)
            .go('back');
            cy.get('.chakra-tabs__tab.css-1ss3utg')
                .eq(2)
                .click()
                .wait(2000);
        cy.get('.chakra-button.css-1l00y4p')
            .eq(2)
            .click()
            .get('input#content').type('Edit Delete Reply{enter}');
        cy.get('.chakra-button.css-41aesz')
            .eq(2)
            .click()
            .get('footer.chakra-modal__footer.css-k0waxj')
            .find('.chakra-button.css-18zw69y')
            .click()
            .wait(3000);
    });

    it('successfully logout a user account', () => {
        cy.contains('Logout').click().wait(3000)
    });
});

//------------------ ADMIN ACTIVITY ------------------

// login sebagai admin
describe('Login Page (Admin)', () => {
    it('successfully login as an admin', () => {
        // Login Admin
        cy.contains('Login').click();
        cy.get('input[name=email]').type('admin@gmail.la');
        cy.get('input[id=password]').type('123452ab{enter}').wait(5000);
    });
});

// manage forum page
describe('Manage Forum', () => {
    it('successfully manage forum', () => {
        // Login Admin
        cy.contains('Login').click();
        cy.get('input[name=email]').type('admin@gmail.la');
        cy.get('input[id=password]').type('123452ab{enter}').wait(5000);

        cy.get('.chakra-tabs__tab.css-adi5rd')
            .eq(1)
            .click()
            .wait(2000);
        cy.get('.chakra-tabs__tab.css-adi5rd')
            .eq(0)
            .click()
            .wait(2000);
    });
});

// manage user page
describe('Manage User', () => {
    beforeEach(() => {
        // Login Admin
        cy.contains('Login').click();
        cy.get('input[name=email]').type('admin@gmail.la');
        cy.get('input[id=password]').type('123452ab{enter}').wait(5000);

        cy.get('.css-15hy375')
            .eq(1)
            .click();
    });

    it('successfully add a new user', () => {
        cy.get('.chakra-button.css-14ey0po').click();
        cy.get('input#name.chakra-input.css-1b8wv9u').type('Test Add User');
        cy.get('input#email.chakra-input.css-1b8wv9u').type('adduser@gmail.com');
        cy.get('input#no_telp.chakra-input.css-1b8wv9u').type('012345678910');
        cy.get('input#password.chakra-input.css-a0dv8h').type('pass12345');
        cy.get('label.chakra-radio.css-1cqh9jq').eq('1').click();
        cy.get('[type="submit"]').click();
        cy.wait(10000);
    });

    it('successfully see account details', () => {
        cy.get('.chakra-button.css-faryu1')
            .eq(61)
            .click()
            .wait(8000);
    });

    it('successfully edit account details', () => {
        cy.get('.chakra-button.css-1l00y4p')
            .eq(61)
            .click();

        cy.get('input#name.chakra-input.css-1b8wv9u').type('Edited Test Add User');
        cy.get('input#email.chakra-input.css-1b8wv9u').type('adduser@gmail.com');
        cy.get('input#no_telp.chakra-input.css-1b8wv9u').type('012345678910');
        cy.get('label.chakra-radio.css-1cqh9jq').eq('0').click();
        cy.get('[type="submit"]').click();
    });

    it('successfully delete an account', () => {
        cy.get('.chakra-button.css-41aesz')
            .eq(61)
            .click();
        cy.get('footer.chakra-modal__footer.css-k0waxj')
            .find('.chakra-button.css-18zw69y')
            .click()
            .wait(3000);
    });
});

// manage partai page
describe('Manage Partai', () => {
    beforeEach(() => {
        // Login Admin
        cy.contains('Login').click();
        cy.get('input[name=email]').type('admin@gmail.la');
        cy.get('input[id=password]').type('123452ab{enter}').wait(5000);

        cy.get('.css-15hy375')
            .eq(2)
            .click();
    });

    it('successfully add a new partai', () => {
        cy.get('.chakra-button.css-14ey0po').click();
        cy.get('input#name.chakra-input.css-1b8wv9u').type('Test Add Partai');
        cy.get('input#no_urut.chakra-input.css-1b8wv9u').type('25');
        cy.get('input#ig_sosmed.chakra-input.css-1b8wv9u').type('test_partai');
        cy.get('input#x_sosmed.chakra-input.css-1b8wv9u').type('test_partai');
        cy.get('input#fb_sosmed.chakra-input.css-1b8wv9u').type('test_partai');
        cy.get('input#website.chakra-input.css-1b8wv9u').type('testpartai.com');
        cy.get('input[type=file]').selectFile('C:/Users/User/Downloads/powerpuff_girls-56a00bc45f9b58eba4aea61d.jpg')
        cy.get('[type="submit"]').click();
        cy.wait(10000);
    });

    it('successfully see partai details', () => {
        cy.get('.chakra-button.css-faryu1')
            .eq(24)
            .click()
            .wait(8000);
    });

    it('successfully edit partai details', () => {
        cy.get('.chakra-button.css-1l00y4p')
            .eq(24)
            .click();

        cy.get('input#name.chakra-input.css-1b8wv9u').type('Edited Test Add Partai');
        cy.get('input#no_urut.chakra-input.css-1b8wv9u').type('26');
        cy.get('input#ig_sosmed.chakra-input.css-1b8wv9u').type('test_partai');
        cy.get('input#x_sosmed.chakra-input.css-1b8wv9u').type('test_partai');
        cy.get('input#fb_sosmed.chakra-input.css-1b8wv9u').eq(0).type('test_partai');
        cy.get('input#website.chakra-input.css-1b8wv9u').type('testpartai.com');
        cy.get('input[type=file]').selectFile('C:/Users/User/Downloads/test.jpeg')
        cy.get('[type="submit"]').click();
    });

    it('successfully delete a partai', () => {
        cy.get('.chakra-button.css-41aesz')
            .eq(24)
            .click();
        cy.get('footer.chakra-modal__footer.css-k0waxj')
            .find('.chakra-button.css-18zw69y')
            .click()
            .wait(3000);
    });
});

// manage paslon page
describe('Manage Paslon', () => {
    beforeEach(() => {
        // Login Admin
        cy.contains('Login').click();
        cy.get('input[name=email]').type('admin@gmail.la');
        cy.get('input[id=password]').type('123452ab{enter}').wait(5000);

        cy.get('.css-15hy375')
            .eq(3)
            .click();
    });

    it('successfully see paslon details', () => {
        cy.get('.chakra-button.css-faryu1')
            .eq(0)
            .click()
            .wait(8000);
    });

    it('successfully edit paslon details', () => {
        cy.get('.chakra-button.css-1l00y4p')
            .eq(0)
            .click();

        cy.get('input#capres.chakra-input.css-1b8wv9u').type('Edited Anies Baswedan');
        cy.get('input#cawapres.chakra-input.css-1b8wv9u').type('Edited Muhaimin Iskandar');
        cy.get('input#no_urut.chakra-input.css-1b8wv9u').type('1');
        cy.get('textarea#deskripsi').type('Mantan Gubernur DKI Jakarta yang juga pernah menjabat Menteri Pendidikan dan Kebudayaan (2014–2016) Anies Baswedan pertama dicalonkan sebagai presiden oleh Partai NasDem. Dia diusung oleh Koalisi Perubahan, yang berisi Partai NasDem, Partai Keadilan Sejahtera, dan Partai Demokrat. Demokrat lalu hengkang dan mendukung Prabowo Subianto seiring dengan masuknya Partai Kebangkitan Bangsa dari Koalisi Indonesia Maju yang mendukung Prabowo. Masuknya PKB diiringi dengan kesepakatan untuk memasangkan Anies bersama ketua umum mereka, Wakil Ketua DPR RI yang sebelumnya menjabat Wakil Ketua MPR RI (2018–2019) dan Menteri Tenaga Kerja dan Transmigrasi (2009–2014) Muhaimin Iskandar.');
        cy.get('input#visi.chakra-input.css-1b8wv9u').type('Indonesia Adil Makmur Untuk Semua');
        cy.get('textarea#misi').type('1. Memastikan Ketersediaan Kebutuhan Pokok dan Biaya Hidup Murah melalui Kemandirian Pangan, Ketahanan Energi, dan Kedaulatan Air,2. Mengentaskan Kemiskinan dengan Memperluas Kesempatan Berusaha dan Menciptakan Lapangan Kerja, Mewujudkan Upah Berkeadilan, Menjamin Kemajuan Ekonomi Berbasis Kemandirian dan Pemerataan, serta Mendukung Korporasi Indonesia Berhasil di Negeri Sendiri dan Bertumbuh di Kancah Global.,3.Mewujudkan Keadilan Ekologis Berkelanjutan untuk Generasi Mendatang. ,4.Membangun Kota dan Desa Berbasis Kawasan yang Manusiawi, Berkeadilan dan Saling Memajukan. ,5.Mewujudkan Manusia Indonesia yang Sehat, Cerdas, Produktif, Berakhlak, dan Berbudaya. ,6.Mewujudkan Keluarga Indonesia yang Sejahtera dan Bahagia sebagai Akar Kekuatan Bangsa. ,7.Memperkuat Sistem Pertahanan dan Keamanan Negara, serta Meningkatkan Peran dan Kepemimpinan Indonesia dalam Arena Politik Global untuk Mewujudkan Kepentingan Nasional dan Perdamaian Dunia. ,8.Memulihkan Kualitas Demokrasi, Menegakkan Hukum dan HAM, Memberantas Korupsi Tanpa Tebang Pilih, serta Menyelenggarakan Pemerintahan yang Berpihak pada Rakyat');
        cy.get('[type="submit"]').click();
        cy.get('.chakra-modal__close-btn.css-1ik4h6n').click();
    });
});

// logout from admin account
describe('Logout Admin Account', () => {
    it('successfully logout an admin account', () => {
        // Login Admin
        cy.contains('Login').click();
        cy.get('input[name=email]').type('admin@gmail.la');
        cy.get('input[id=password]').type('123452ab{enter}').wait(5000);

        cy.get('.css-15hy375')
            .eq(4)
            .click();

        cy.visit('https://ppl2-sip.vercel.app/');
        cy.viewport('iphone-xr');
    });
});
