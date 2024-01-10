import request from 'supertest';
import app from '../index.js';

const paslonApi = describe('Paslon API', () => {
    it('should get all paslon', async () => {
        const response = await request(app).get('/paslons')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            {
                "_id": "658d1af149852e106ef82a0c",
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
                "partai_pengusung": "Partai B",
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/anis_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/muhaimin_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-12-28T06:51:29.148Z",
                "updatedAt": "2024-01-02T13:22:02.727Z"
            },
            {
                "_id": "658d1af149852e106ef82a0d",
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
                "partai_pengusung": "Partai A",
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/prabowo_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/gibran_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-12-28T06:51:29.149Z",
                "updatedAt": "2023-12-28T06:51:29.149Z"
            },
            {
                "_id": "658d1af149852e106ef82a0e",
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
                "partai_pengusung": "Partai A",
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/ganjar_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/mahfud_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-12-28T06:51:29.150Z",
                "updatedAt": "2023-12-28T06:51:29.150Z"
            },
            {
                "_id": "6595296d27962f1271a24dce",
                "capres": "Delete Test Paslon",
                "cawapres": "Test Paslon",
                "no_urut": 5,
                "misi": [],
                "createdAt": "2024-01-03T09:31:25.039Z",
                "updatedAt": "2024-01-03T09:31:25.039Z",
                "__v": 0
            }
        ])
    }, 15000)


    it('should get a paslon by ID', async () => {
        const response = await request(app).get('/paslons/658d1af149852e106ef82a0d')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            {
                "_id": "658d1af149852e106ef82a0d",
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
                "partai_pengusung": "Partai A",
                "capres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/prabowo_baru.jpeg",
                "cawapres_img_url": "https://infopemilu.kpu.go.id/berkas-pwp/gibran_baru.jpeg",
                "__v": 0,
                "createdAt": "2023-12-28T06:51:29.149Z",
                "updatedAt": "2023-12-28T06:51:29.149Z",
                "partaiInfo": [
                    {
                        "_id": "657e60b902a87da718b69af5",
                        "name": "Partai Solidaritas Indonesia (PSI)",
                        "no_urut": 15,
                        "ig_sosmed": "https://instagram.com/psi_id",
                        "fb_sosmed": "https://facebook.com/psi.or.id",
                        "x_sosmed": "https://twitter.com/psi.id",
                        "website": "https://psi.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Solidaritas_Indonesia",
                        "deskripsi": "Partai Solidaritas Indonesia (disingkat PSI) adalah partai politik di Indonesia yang didirikan pasca Pemilu tahun 2014. Partai ini diketuai oleh Kaesang Pangarep sejak 25 September 2023. Partai ini cenderung mengambil target partisipan kalangan anak muda, perempuan, dan lintas agama. PSI didirikan untuk menggalang gerakan politik yang dilandasi oleh rasa solidaritas untuk kemanusiaan. Hal tersebut dikarenakan partai ini meyakini bahwa yang lebih penting dari politik adalah kemanusiaan.",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656419883_logo-10x10.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.544Z",
                        "updatedAt": "2023-12-17T02:45:13.544Z"
                    },
                    {
                        "_id": "657e60b902a87da718b69aed",
                        "name": "Partai Gelombang Rakyat Indonesia (Gelora)",
                        "no_urut": 7,
                        "ig_sosmed": "https://www.instagram.com/partaigeloraid/",
                        "fb_sosmed": "https://facebook.com/https://www.facebook.com/partaigeloraindonesia/",
                        "x_sosmed": "https://twitter.com/partaigeloraid",
                        "website": "https://www.partaigelora.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Gelombang_Rakyat_Indonesia",
                        "deskripsi": "Partai Gelombang Rakyat Indonesia (disingkat Partai Gelora Indonesia) adalah partai politik di Indonesia yang didirikan pada tanggal 28 Oktober 2019.\nPartai ini didirikan oleh 99 orang dari 34 provinsi di Indonesia. Partai ini dideklarasikan dalam acara konsolidasi nasional di Jakarta, 10 November 2019. Setelah melewati proses pendaftaran dan verifikasi di Kementerian Hukum dan HAM, Partai Gelora sah menjadi badan hukum dengan penyerahan SK Menteri Hukum & HAM pada 2 Juni 2020.",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1658983159_Logo%20Gelora%20Portrait.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.543Z",
                        "updatedAt": "2023-12-17T02:45:13.543Z"
                    },
                    {
                        "_id": "657e60b902a87da718b69ae8",
                        "name": "Partai Gerakan Indonesia Raya (Gerindra)",
                        "no_urut": 2,
                        "ig_sosmed": "https://instagram.com/gerindra/",
                        "fb_sosmed": "https://www.facebook.com/PartaiGerindra/",
                        "x_sosmed": "https://twitter.com/Gerindra/",
                        "website": "https://gerindra.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Gerakan_Indonesia_Raya",
                        "deskripsi": "Partai Gerakan Indonesia Raya (Gerindra) adalah sebuah partai politik di Indonesia. Dibentuk pada tahun 2008, Gerindra berfungsi sebagai kendaraan politik mantan jenderal Prabowo Subianto. Saat ini, Gerindra adalah partai ketiga terbesar di DPR berdasarkan hasil perolehan suara dalam pemilu legislatif 2019 dengan 78 kursi.\nPada kurun waktu 2008 hingga 2019, Gerindra memosisikan diri sebagai partai oposisi. Pasca pemilu 2019, Gerindra bergabung dengan Kabinet Indonesia Maju dibawah pimpinan Presiden Joko Widodo, meskipun sebelumnya Prabowo pernah menghadapi Joko Widodo dalam pemilihan presiden pada 2014 dan 2019",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1657710596_Logo%20GERINDRA%2010x10.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.542Z",
                        "updatedAt": "2023-12-17T02:45:13.542Z"
                    },
                    {
                        "_id": "657e60b902a87da718b69af3",
                        "name": "Partai Bulan Bintang (PBB)",
                        "no_urut": 13,
                        "ig_sosmed": "https://www.instagram.com/partaibulanbintang.official/",
                        "fb_sosmed": "https://www.facebook.com/profile.php?id=100068456648409&mibextid=ZbWKwL",
                        "x_sosmed": "https://twitter.com/OfficialDPP_PBB",
                        "website": "https://partaibulanbintang.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Bulan_Bintang",
                        "deskripsi": "Partai Bulan Bintang (PBB) adalah sebuah partai politik Indonesia berasaskan modernisme Islam dan juga sebagai partai penerus Masyumi yang pernah berjaya pada masa demokrasi Liberal. Partai Bulan Bintang didirikan pada 17 Juli 1998.",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1659262742_LOGO%20PBB.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.543Z",
                        "updatedAt": "2023-12-17T02:45:13.543Z"
                    },
                    {
                        "_id": "657e60b902a87da718b69aea",
                        "name": "Partai Golongan Karya (Golkar)",
                        "no_urut": 4,
                        "ig_sosmed": "https://www.instagram.com/golkar.indonesia/",
                        "fb_sosmed": "https://www.facebook.com/golkar.indonesia/",
                        "x_sosmed": "https://twitter.com/golkar_id/",
                        "website": "https://www.partaigolkar.com/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Golongan_Karya",
                        "deskripsi": "Partai Golongan Karya atau secara umum disingkat dengan Partai Golkar adalah sebuah partai politik di Indonesia. Didirikan sebagai Sekretariat Bersama Golongan Karya (Sekber Golkar) pada tahun 1964, dan berpartisipasi untuk pertama kalinya dalam pemilihan umum nasional pada 1971 sebagai Golkar (Golongan Karya). Partai Golongan Karya tidak resmi menjadi partai politik hingga tahun 1999, ketika Golkar diperlukan untuk menjadi sebuah partai untuk mengikuti pemilihan.\nPartai Golkar berkuasa dari tahun 1971 hingga 1999, di bawah kepemimpinan Presiden Soeharto dan B.J. Habibie. Kemudian bergabung dengan koalisi yang berkuasa di bawah presiden Abdurrahman Wahid, Megawati Soekarnoputri, dan Susilo Bambang Yudhoyono.  Ketika Presiden Joko Widodo dari PDI-P terpilih pada tahun 2014, Partai Golongan Karya awalnya memilih untuk bergabung dengan koalisi oposisi yang dipimpin oleh mantan jenderal Prabowo Subianto, yang pada akhirnya kembali mengalihkan dukungannya kepada Pemerintahan yang dipimpin oleh Presiden Joko Widodo pada tahun 2016.Dalam perkembangannya, khususnya pasca Orde Baru, Partai Golkar berhasil bertransformasi menjadi partai modern yang mengadopsi nilai-nilai demokrasi. Pimpinan-pimpinan Partai Golkar juga berhasil menahkodai Golkar sebagai partai politik berpaham sentrisme yang merangkul semua golongan dengan mengedepankan semangat moderat.",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656586681_Logo%20Golkar.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.542Z",
                        "updatedAt": "2023-12-17T02:45:13.542Z"
                    },
                    {
                        "_id": "657e60b902a87da718b69af2",
                        "name": "Partai Amanat Nasional (PAN)",
                        "no_urut": 12,
                        "ig_sosmed": "https://www.instagram.com/amanatnasional/",
                        "fb_sosmed": "https://web.facebook.com/amanatnasional",
                        "x_sosmed": "https://twitter.com/official_PAN",
                        "website": "https://pan.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Amanat_Nasional",
                        "deskripsi": "Partai Amanat Nasional (disingkat: PAN) adalah sebuah partai politik di Indonesia. Asas partai ini adalah Akhlak Politik Berlandaskan Agama yang Membawa Rahmat bagi Sekalian Alam (AD Bab II, Pasal 3 [2]). PAN didirikan oleh Amien Rais pada tanggal 23 Agustus 1998 berdasarkan pengesahan Depkeh HAM No. M-20.UM.06.08 tgl. 27 Agustus 2003. Ketua Umum saat ini adalah Zulkifli Hasan. Ketua Majelis Pertimbangan Partai dijabat oleh Hatta Rajasa, Tatong Bara, Yasti Soepredjo Mokoagow, sedangkan Ketua Dewan Kehormatan Partai dijabat oleh Soetrisno Bachir.",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656404797_LOGO%20PAN.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.543Z",
                        "updatedAt": "2023-12-17T02:45:13.543Z"
                    },
                    {
                        "_id": "657e60b902a87da718b69af4",
                        "name": "Partai Demokrat",
                        "no_urut": 14,
                        "ig_sosmed": "https://www.instagram.com/pdemokrat/",
                        "fb_sosmed": "https://facebook.com/pdemokrat/",
                        "x_sosmed": "https://twitter.com/PDemokrat",
                        "website": "https://www.demokrat.or.id/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Demokrat",
                        "deskripsi": "Partai Demokrat atau secara umum disingkat dengan PD adalah sebuah partai politik Indonesia. Partai ini didirikan pada 9 September 2001 dan disahkan pada 27 Agustus 2003. Pendirian partai ini erat kaitannya dengan niat untuk membawa Susilo Bambang Yudhoyono, yang kala itu menjadi Menteri Koordinator bidang Politik dan Keamanan di bawah Presiden Megawati, menjadi presiden. Karena hal inilah, Partai Demokrat terkait kuat dengan figur Yudhoyono.\nPada Kongres IV Partai Demokrat yang diadakan di Hotel Shangri-La, Surabaya, 12 Mei 2015, Susilo Bambang Yudhoyono kembali terpilih menjadi Ketua Umum untuk periode 2015–2020",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656229496_WhatsApp%20Image%202022-06-26%20at%201.53.14%20PM.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.544Z",
                        "updatedAt": "2023-12-17T02:45:13.544Z"
                    },
                    {
                        "_id": "657e60b902a87da718b69af1",
                        "name": "Partai Garda Perubahan Indonesia (Garuda)",
                        "no_urut": 11,
                        "ig_sosmed": "https://www.instagram.com/partaigaruda/",
                        "fb_sosmed": "https://www.facebook.com/DPP-Partai-Garuda-105220035562924",
                        "x_sosmed": "https://twitter.com/dpppartaigaruda",
                        "website": "https://partaigaruda.org/",
                        "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Garda_Perubahan_Indonesia",
                        "deskripsi": "Partai Garda Perubahan Indonesia atau Partai Garuda adalah sebuah partai politik di Indonesia. Partai Garuda dideklarasikan pada tanggal 16 April 2015. Ahmad Ridha Sabana menjabat sebagai Ketua Umum partai. Pada tahun 2015, melalui surat keputusan dari Menteri Hukum dan Hak Asasi Manusia Yasonna Laoly, Partai Garuda mendapatkan ketetapan hukum dan resmi menjadi partai politik.",
                        "koalisi": "Indonesia Maju",
                        "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656406064_Logo%20Partai%20Garuda%20square.png",
                        "usungPaslon": 2,
                        "__v": 0,
                        "createdAt": "2023-12-17T02:45:13.543Z",
                        "updatedAt": "2023-12-17T02:45:13.543Z"
                    }
                ]
            }
        )
    }, 10000)

    it('should not get a paslon by unregistered ID', async () => {
        const response = await request(app).get('/paslons/6565714b2dc632b5f0f8cf10')
        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Cannot read properties of null (reading 'no_urut')"
            }
        )
    }, 10000)

    it('should not get a paslon by invalid ID', async () => {
        const response = await request(app).get('/paslons/6565714b2dc632b5f0f8')
        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Cast to ObjectId failed for value \"6565714b2dc632b5f0f8\" (type string) at path \"_id\" for model \"Paslons\""
            }
        )
    }, 3000)


    it('should save a new paslon', async () => {
        const newPaslon = {
            "capres": "Delete Test Paslon",
            "cawapres": "Test Paslon",
            "no_urut": 4
        }
        const response = await request(app)
            .post('/paslons')
            .send(newPaslon)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "capres": expect.stringContaining("Delete Test Paslon")
        }))
    }, 10000)


    it('should update a paslon by ID', async () => {
        const updatePaslonData = {
            "no_urut": 6
        }
        const response = await request(app)
            .put('/paslons/6595296d27962f1271a24dce')
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
    }, 10000)

    it('should not update a paslon by invalid ID', async () => {
        const updatePaslonData = {
            "no_urut": 4
        }
        const response = await request(app)
            .put('/paslons/6565714b2dc632b5f0f8cf')
            .send(updatePaslonData)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(
            {
                "message": "Cast to ObjectId failed for value \"6565714b2dc632b5f0f8cf\" (type string) at path \"_id\" for model \"Paslons\""
            }
        )
    }, 3000)


    it('should delete a paslon by ID', async () => {
        const response = await request(app).delete('/paslons/6595296d27962f1271a24dce')
        expect(response.status).toBe(200)
    }, 5000)

    it('should not delete a paslon by invalid ID', async () => {
        const response = await request(app).delete('/paslons/658d1af149852e106ef82a')
        expect(response.status).toBe(400)
    }, 3000)
})
