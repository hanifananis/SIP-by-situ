import request from 'supertest';
import app from '../index.js';

const paslonApi = describe('Paslon API', () => {
    it('should get all paslon', async () => {
        const response = await request(app).get('/paslons');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                "_id": "6565714b2dc632b5f0f8cf19",
                "capres": "Anies Baswedan",
                "cawapres": "Muhaimin Iskandar",
                "no_urut": 1,
                "deskripsi": "Mantan Gubernur DKI Jakarta yang juga pernah menjabat Menteri Pendidikan dan Kebudayaan (2014–2016) Anies Baswedan pertama dicalonkan sebagai presiden oleh Partai NasDem. Dia diusung oleh Koalisi Perubahan, yang berisi Partai NasDem, Partai Keadilan Sejahtera, dan Partai Demokrat. Demokrat lalu hengkang dan mendukung Prabowo Subianto seiring dengan masuknya Partai Kebangkitan Bangsa dari Koalisi Indonesia Maju yang mendukung Prabowo. Masuknya PKB diiringi dengan kesepakatan untuk memasangkan Anies bersama ketua umum mereka, Wakil Ketua DPR RI yang sebelumnya menjabat Wakil Ketua MPR RI (2018–2019) dan Menteri Tenaga Kerja dan Transmigrasi (2009–2014) Muhaimin Iskandar.",
                "visi": "Indonesia Adil Makmur Untuk Semua",
                "misi": [
                    "1. Memastikan Ketersediaan Kebutuhan Pokok dan Biaya Hidup Murah melalui Kemandirian Pangan, Ketahanan Energi, dan Kedaulatan Air",
                    "2. Mengentaskan Kemiskinan dengan Memperluas Kesempatan Berusaha dan Menciptakan Lapangan Kerja, Mewujudkan Upah Berkeadilan, Menjamin Kemajuan Ekonomi Berbasis Kemandirian dan Pemerataan, serta Mendukung Korporasi Indonesia Berhasil di Negeri Sendiri dan Bertumbuh di Kancah Global.",
                    "3.Mewujudkan Keadilan Ekologis Berkelanjutan untuk Generasi Mendatang. ",
                    "4.Membangun Kota dan Desa Berbasis Kawasan yang Manusiawi, Berkeadilan dan Saling Memajukan. ",
                    "5.Mewujudkan Manusia Indonesia yang Sehat, Cerdas, Produktif, Berakhlak, dan Berbudaya. ",
                    "6.Mewujudkan Keluarga Indonesia yang Sejahtera dan Bahagia sebagai Akar Kekuatan Bangsa. ",
                    "7.Memperkuat Sistem Pertahanan dan Keamanan Negara, serta Meningkatkan Peran dan Kepemimpinan Indonesia dalam Arena Politik Global untuk Mewujudkan Kepentingan Nasional dan Perdamaian Dunia. ",
                    "8.Memulihkan Kualitas Demokrasi, Menegakkan Hukum dan HAM, Memberantas Korupsi Tanpa Tebang Pilih, serta Menyelenggarakan Pemerintahan yang Berpihak pada Rakyat"
                ],
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/anis_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/muhaimin_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-11-28T04:49:15.211Z",
                "updatedAt": "2023-11-28T04:49:15.211Z"
            },
            {
                "_id": "6565714b2dc632b5f0f8cf1a",
                "capres": "Prabowo Subianto",
                "cawapres": "Gibran Rakabuming",
                "no_urut": 2,
                "deskripsi": "Prabowo Subianto dicalonkan oleh Partai Gerakan Indonesia Raya sebagai calon presiden pada 12 Agustus 2022. Disusul dua partai anggota KIB dan partai-partai nonparlemen yang menjadi cikal bakal Koalisi Indonesia Maju setelah bubarnya Koalisi Kebangkitan Indonesia Raya bersama Partai Kebangkitan Bangsa. Pada 22 Oktober 2023, putra sulung Presiden Joko Widodo yang juga Wali Kota Surakarta Gibran Rakabuming diumumkan sebagai bakal calon wakil presiden. Ia baru berusia 36 tahun dan baru bisa maju setelah turun putusan Mahkamah Konstitusi pada 16 Oktober 2023 yang membolehkan calon presiden atau wakil presiden berusia di bawah 40 tahun jika pernah atau sedang menjabat gubernur/bupati/wali kota.",
                "visi": "Bersama Indonesia Maju Menuju Indonesia Emas 2045",
                "misi": [
                    "Misi Asta Cita:",
                    "1. Memperkokoh ideologi Pancasila, demokrasi, dan hak asasi manusia (HAM).",
                    "2. Memantapkan sistem pertahanan keamanan negara dan mendorong kemandirian bangsa melalui swasembada pangan, energi, air, ekonomi syariah, ekonomi digital, ekonomi hijau, dan ekonomi biru.",
                    "3. Melanjutkan pengembangan infrastruktur dan meningkatkan lapangan kerja yang berkualitas, mendorong kewirausahaan, mengembangkan industri kreatif serta mengembangkan agro-maritim industri di sentra produksi melalui peran aktif koperasi.",
                    "4. Memperkuat pembangunan sumber daya manusia (SDM), sains, teknologi, pendidikan, kesehatan, prestasi olahraga, kesetaraan gender, serta penguatan peran perempuan, pemuda (generasi milenial dan generasi Z), dan penyandang disabilitas.",
                    "5. Melanjutkan hilirisasi dan mengembangkan industri berbasis sumber daya alam untuk meningkatkan nilai tambah di dalam negeri.",
                    "6. Membangun dari desa dan dari bawah untuk pertumbuhan ekonomi, pemerataan ekonomi, dan pemberantasan kemiskinan.",
                    "7. Memperkuat reformasi politik, hukum, dan birokrasi, serta memperkuat pencegahan dan pemberantasan korupsi, narkoba, judi, dan penyelundupan.",
                    "8. Memperkuat penyelarasan kehidupan yang harmonis dengan lingkungan, alam dan budaya, serta peningkatan toleransi antarumat beragama untuk mencapai masyarakat yang adil dan makmur."
                ],
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/prabowo_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/gibran_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-11-28T04:49:15.213Z",
                "updatedAt": "2023-11-28T04:49:15.213Z"
            },
            {
                "_id": "6565714b2dc632b5f0f8cf1b",
                "capres": "Ganjar Pranowo",
                "cawapres": "Mahfud MD",
                "no_urut": 3,
                "deskripsi": "Purna tugasnya Joko Widodo sebagai presiden petahana pada 2024 membuat Partai Demokrasi Indonesia Perjuangan mencari calon presiden penggantinya. Gubernur Jawa Tengah yang juga mantan anggota DPR RI (2004–2013) Ganjar Pranowo lalu dicalonkan sebagai presiden oleh PDI-P. Pencalonannya turut didukung oleh PPP, Partai Perindo, dan Partai Hati Nurani Rakyat. Pada 18 Oktober 2023, Menteri Koordinator Bidang Politik, Hukum, dan Keamanan yang juga mantan anggota DPR RI (2004–2008) dan Ketua Mahkamah Konstitusi (2008–2013) Mahfud MD diumumkan sebagai calon wakil presiden untuk Ganjar.",
                "visi": "Gerak cepat menuju Indonesia Unggul",
                "misi": [
                    "1. Manusia Indonesia yang sehat, terdidik, dan sejahtera",
                    "2. Indonesia unggul dalam bidang inovasi dan teknologi",
                    "3. Ekonomi yang tangguh dan berdikari \n4. Hilangnya kemiskinan dan ketimpangan antarwilayah dari akarnya \n5. Ekosistem digital yang mengutamakan akses internet cepat dan terjangkau \n6. Pembangunan ekonomi yang memperhatikan kelestarian lingkungan \n7. Demokrasi terjaga melalui pemberantasan korupsi dan pemerintahan inklusif berlandaskan supremasi hukum \n8. Indonesia bangsa terhormat di kancah internasional, serta pertahanan yang tangguh dan modern"
                ],
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/ganjar_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/mahfud_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-11-28T04:49:15.213Z",
                "updatedAt": "2023-11-28T04:49:15.213Z"
            },
            {
                "_id": "656581e7e6f50e95b3170d4b",
                "capres": "Update Capres",
                "cawapres": "Update Cawapres",
                "no_urut": 4,
                "misi": [],
                "createdAt": "2023-11-28T06:00:07.716Z",
                "updatedAt": "2023-11-28T06:08:01.569Z",
                "__v": 0
            },
            {
                "_id": "65658446aa6157b35d663edb",
                "capres": "Delete Test Paslon",
                "cawapres": "Delete Paslon",
                "no_urut": 5,
                "misi": [],
                "createdAt": "2023-11-28T06:10:14.175Z",
                "updatedAt": "2023-11-28T06:10:14.175Z",
                "__v": 0
            }
        ]);
    });

    it('should get a paslon by ID', async () => {
        const response = await request(app).get('/paslons/6565714b2dc632b5f0f8cf1a');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            {
                "_id": "6565714b2dc632b5f0f8cf1a",
                "capres": "Prabowo Subianto",
                "cawapres": "Gibran Rakabuming",
                "no_urut": 2,
                "deskripsi": "Prabowo Subianto dicalonkan oleh Partai Gerakan Indonesia Raya sebagai calon presiden pada 12 Agustus 2022. Disusul dua partai anggota KIB dan partai-partai nonparlemen yang menjadi cikal bakal Koalisi Indonesia Maju setelah bubarnya Koalisi Kebangkitan Indonesia Raya bersama Partai Kebangkitan Bangsa. Pada 22 Oktober 2023, putra sulung Presiden Joko Widodo yang juga Wali Kota Surakarta Gibran Rakabuming diumumkan sebagai bakal calon wakil presiden. Ia baru berusia 36 tahun dan baru bisa maju setelah turun putusan Mahkamah Konstitusi pada 16 Oktober 2023 yang membolehkan calon presiden atau wakil presiden berusia di bawah 40 tahun jika pernah atau sedang menjabat gubernur/bupati/wali kota.",
                "visi": "Bersama Indonesia Maju Menuju Indonesia Emas 2045",
                "misi": [
                    "Misi Asta Cita:",
                    "1. Memperkokoh ideologi Pancasila, demokrasi, dan hak asasi manusia (HAM).",
                    "2. Memantapkan sistem pertahanan keamanan negara dan mendorong kemandirian bangsa melalui swasembada pangan, energi, air, ekonomi syariah, ekonomi digital, ekonomi hijau, dan ekonomi biru.",
                    "3. Melanjutkan pengembangan infrastruktur dan meningkatkan lapangan kerja yang berkualitas, mendorong kewirausahaan, mengembangkan industri kreatif serta mengembangkan agro-maritim industri di sentra produksi melalui peran aktif koperasi.",
                    "4. Memperkuat pembangunan sumber daya manusia (SDM), sains, teknologi, pendidikan, kesehatan, prestasi olahraga, kesetaraan gender, serta penguatan peran perempuan, pemuda (generasi milenial dan generasi Z), dan penyandang disabilitas.",
                    "5. Melanjutkan hilirisasi dan mengembangkan industri berbasis sumber daya alam untuk meningkatkan nilai tambah di dalam negeri.",
                    "6. Membangun dari desa dan dari bawah untuk pertumbuhan ekonomi, pemerataan ekonomi, dan pemberantasan kemiskinan.",
                    "7. Memperkuat reformasi politik, hukum, dan birokrasi, serta memperkuat pencegahan dan pemberantasan korupsi, narkoba, judi, dan penyelundupan.",
                    "8. Memperkuat penyelarasan kehidupan yang harmonis dengan lingkungan, alam dan budaya, serta peningkatan toleransi antarumat beragama untuk mencapai masyarakat yang adil dan makmur."
                ],
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/prabowo_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/gibran_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-11-28T04:49:15.213Z",
                "updatedAt": "2023-11-28T04:49:15.213Z",
                "partaiInfo": [
                    {
                        "_id": "65656c554f4ac06590bd9235",
                        "name": "Partai Gerakan Indonesia Raya (Gerindra)",
                        "no_urut": 2,
                        "ig_sosmed": "https://instagram.com/gerindra/",
                        "fb_sosmed": "https://www.facebook.com/PartaiGerindra/",
                        "x_sosmed": "https://twitter.com/Gerindra/",
                        "website": "https://gerindra.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Gerakan_Indonesia_Raya",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1657710596_Logo%20GERINDRA%2010x10.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.411Z",
                        "updatedAt": "2023-11-28T04:28:05.411Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd9237",
                        "name": "Partai Golongan Karya (Golkar)",
                        "no_urut": 4,
                        "ig_sosmed": "https://www.instagram.com/golkar.indonesia/",
                        "fb_sosmed": "https://www.facebook.com/golkar.indonesia/",
                        "x_sosmed": "https://twitter.com/golkar_id/",
                        "website": "https://www.partaigolkar.com/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Golongan_Karya",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656586681_Logo%20Golkar.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.411Z",
                        "updatedAt": "2023-11-28T04:28:05.411Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd923a",
                        "name": "Partai Gelombang Rakyat Indonesia (Gelora)",
                        "no_urut": 7,
                        "ig_sosmed": "https://www.instagram.com/partaigeloraid/",
                        "fb_sosmed": "https://facebook.com/https://www.facebook.com/partaigeloraindonesia/",
                        "x_sosmed": "https://twitter.com/partaigeloraid",
                        "website": "https://www.partaigelora.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Gelombang_Rakyat_Indonesia",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1658983159_Logo%20Gelora%20Portrait.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.412Z",
                        "updatedAt": "2023-11-28T04:28:05.412Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd923e",
                        "name": "Partai Garda Perubahan Indonesia (Garuda)",
                        "no_urut": 11,
                        "ig_sosmed": "https://www.instagram.com/partaigaruda/",
                        "fb_sosmed": "https://www.facebook.com/DPP-Partai-Garuda-105220035562924",
                        "x_sosmed": "https://twitter.com/dpppartaigaruda",
                        "website": "https://partaigaruda.org/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Garda_Perubahan_Indonesia",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656406064_Logo%20Partai%20Garuda%20square.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.412Z",
                        "updatedAt": "2023-11-28T04:28:05.412Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd923f",
                        "name": "Partai Amanat Nasional (PAN)",
                        "no_urut": 12,
                        "ig_sosmed": "https://www.instagram.com/amanatnasional/",
                        "fb_sosmed": "https://web.facebook.com/amanatnasional",
                        "x_sosmed": "https://twitter.com/official_PAN",
                        "website": "https://pan.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Amanat_Nasional",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656404797_LOGO%20PAN.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.412Z",
                        "updatedAt": "2023-11-28T04:28:05.412Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd9240",
                        "name": "Partai Bulan Bintang (PBB)",
                        "no_urut": 13,
                        "ig_sosmed": "https://www.instagram.com/partaibulanbintang.official/",
                        "fb_sosmed": "https://www.facebook.com/profile.php?id=100068456648409&mibextid=ZbWKwL",
                        "x_sosmed": "https://twitter.com/OfficialDPP_PBB",
                        "website": "https://partaibulanbintang.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Bulan_Bintang",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1659262742_LOGO%20PBB.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.412Z",
                        "updatedAt": "2023-11-28T04:28:05.412Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd9241",
                        "name": "Partai Demokrat",
                        "no_urut": 14,
                        "ig_sosmed": "https://www.instagram.com/pdemokrat/",
                        "fb_sosmed": "https://facebook.com/pdemokrat/",
                        "x_sosmed": "https://twitter.com/PDemokrat",
                        "website": "https://www.demokrat.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Demokrat",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656229496_WhatsApp%20Image%202022-06-26%20at%201.53.14%20PM.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.412Z",
                        "updatedAt": "2023-11-28T04:28:05.412Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd9242",
                        "name": "Partai Solidaritas Indonesia (PSI)",
                        "no_urut": 15,
                        "ig_sosmed": "https://instagram.com/psi_id",
                        "fb_sosmed": "https://facebook.com/psi.or.id",
                        "x_sosmed": "https://twitter.com/psi.id",
                        "website": "https://psi.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Solidaritas_Indonesia",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656419883_logo-10x10.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.412Z",
                        "updatedAt": "2023-11-28T04:28:05.412Z"
                    }
                ]
            }
        );
    });

    it('should update a paslon by ID', async () => {
        const updatePaslonData = {
            "capres": "Test Update Capres",
            "cawapres": "Test Update Cawapres"
        };
        const response = await request(app)
            .put('/paslons/656581e7e6f50e95b3170d4b')
            .send(updatePaslonData);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            {
                "acknowledged": true,
                "modifiedCount": 1,
                "upsertedId": null,
                "upsertedCount": 0,
                "matchedCount": 1
            }
        );
    });

    it('should delete a paslon by ID', async () => {
        const response = await request(app).delete('/paslons/65658446aa6157b35d663edb');
        expect(response.status).toBe(200);
    });

    it('should save a new paslon', async () => {
        const newPaslon = {
            "capres": "Delete Test Paslon",
            "cawapres": "Delete Paslon",
            "no_urut": 5
        };
        const response = await request(app)
            .post('/paslons')
            .send(newPaslon);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining({
            "capres": expect.stringContaining("Delete Test Paslon")
        }));
    });
});
