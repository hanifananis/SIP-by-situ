import request from 'supertest';
import app from '../index.js';

const paslonApi = describe('Paslon API', () => {
    it('should get all paslon', async () => {
        const response = await request(app).get('/paslons')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
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
            }
        ])
    })

    it('should get a paslon by ID', async () => {
        const response = await request(app).get('/paslons/6565714b2dc632b5f0f8cf19')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
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
                "updatedAt": "2023-11-28T04:49:15.211Z",
                "partaiInfo": [
                    {
                        "_id": "65656c554f4ac06590bd9234",
                        "name": "Partai Kebangkitan Bangsa (PKB)",
                        "no_urut": 1,
                        "ig_sosmed": "https://www.instagram.com/pkb_id/",
                        "fb_sosmed": "https://www.facebook.com/pkb.id/",
                        "x_sosmed": "",
                        "website": "https://pkb.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Kebangkitan_Bangsa",
                        "koalisi": "Perubahan",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo%20PKB.png",
                        "usungPaslon": 1,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.410Z",
                        "updatedAt": "2023-11-28T04:28:05.410Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd9238",
                        "name": "Partai Nasional Demokrat (NasDem)",
                        "no_urut": 5,
                        "ig_sosmed": "https://www.instagram.com/official_nasdem/",
                        "fb_sosmed": "https://www.facebook.com/OfficialNasDem/",
                        "x_sosmed": "https://twitter.com/NasDem",
                        "website": "https://nasdem.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Nasional_Demokrat",
                        "koalisi": "Perubahan",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656224727_Logo%20NasDem%20KPU.png",
                        "usungPaslon": 1,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.411Z",
                        "updatedAt": "2023-11-28T04:28:05.411Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd924b",
                        "name": "Partai Ummat",
                        "no_urut": 24,
                        "ig_sosmed": "https://www.instagram.com/partaiummatofficial",
                        "fb_sosmed": "",
                        "x_sosmed": "https://twitter.com/dpp_partaiummat",
                        "website": "https://partaiummat.id/id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Ummat",
                        "koalisi": "Perubahan",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656157120_LOGO%20PARTAI%20UMMAT%2010X10%20CM%20KPU.png",
                        "usungPaslon": 1,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.413Z",
                        "updatedAt": "2023-11-28T04:28:05.413Z"
                    },
                    {
                        "_id": "65656c554f4ac06590bd923b",
                        "name": "Partai Keadilan Sejahtera (PKS)",
                        "no_urut": 8,
                        "ig_sosmed": "https://instagram.com/pk_sejahtera",
                        "fb_sosmed": "https://www.facebook.com/HumasPartaiKeadilanSejahtera",
                        "x_sosmed": "https://twitter.com/PKSejahtera",
                        "website": "https://pks.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Keadilan_Sejahtera",
                        "koalisi": "Perubahan",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656395115_lambang_pks.png",
                        "usungPaslon": 1,
                        "__v": 0,
                        "createdAt": "2023-11-28T04:28:05.412Z",
                        "updatedAt": "2023-11-28T04:28:05.412Z"
                    }
                ]
            }
        )
    })

    it('should save a new paslon', async () => {
        const newPaslon = {
            "capres": "Delete Test Paslon",
            "cawapres": "Delete Paslon",
            "no_urut": 5
        }
        const response = await request(app)
            .post('/paslons')
            .send(newPaslon)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "capres": expect.stringContaining("Delete Test Paslon")
        }))
    })

    it('should update a paslon by ID', async () => {
        const updatePaslonData = {
            "capres": "Delete Capres",
            "cawapres": "Delete Cawapres"
        }
        const response = await request(app)
            .put('/paslons/6571e52368fd3a3cdee88783')
            .send(updatePaslonData)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            {
                "acknowledged": true,
                "modifiedCount": 1,
                "upsertedId": null,
                "upsertedCount": 0,
                "matchedCount": 1
            }
        )
    })

    it('should delete a paslon by ID', async () => {
        const response = await request(app).delete('/paslons/6571e52368fd3a3cdee88783')
        expect(response.status).toBe(200)
    })
})
