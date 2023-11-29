import request from 'supertest';
import app from '../index.js';

const partaiAPI = describe('Partai API', () => {
    it('should get all PartaiInfo', async () => {
        const response = await request(app).get('/partaiInfos');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                "_id": "65602e8ae2ec864c03b60672",
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
                "createdAt": "2023-11-24T05:03:06.844Z",
                "updatedAt": "2023-11-24T05:03:06.844Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60673",
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
                "createdAt": "2023-11-24T05:03:06.845Z",
                "updatedAt": "2023-11-24T05:03:06.845Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60674",
                "name": "Partai Demokrasi Indonesia Perjuangan (PDI-P)",
                "no_urut": 3,
                "ig_sosmed": "https://instagram.com/pdiperjuangan",
                "fb_sosmed": "https://www.facebook.com/PDI.Perjuangan.Official/",
                "x_sosmed": "https://twitter.com/PDIPerjuangan",
                "website": "https://pdiperjuangan.id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Demokrasi_Indonesia_Perjuangan",
                "koalisi": "Kerja Sama",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656305039_LOGO%20PDI%20PERJUANGAN.png",
                "usungPaslon": 3,
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.845Z",
                "updatedAt": "2023-11-24T05:03:06.845Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60675",
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
                "createdAt": "2023-11-24T05:03:06.845Z",
                "updatedAt": "2023-11-24T05:03:06.845Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60676",
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
                "createdAt": "2023-11-24T05:03:06.845Z",
                "updatedAt": "2023-11-24T05:03:06.845Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60677",
                "name": "Partai Buruh",
                "no_urut": 6,
                "ig_sosmed": "https://www.instagram.com/partaiburuh_/",
                "fb_sosmed": "https://www.facebook.com/partaiburuh.official/",
                "x_sosmed": "https://twitter.com/EXCOPARTAIBURUH",
                "website": "https://partaiburuh.or.id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Buruh_(Indonesia)",
                "koalisi": "",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1659959325_LOGO%20RESMI%20PB.png",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.846Z",
                "updatedAt": "2023-11-24T05:03:06.846Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60678",
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
                "createdAt": "2023-11-24T05:03:06.846Z",
                "updatedAt": "2023-11-24T05:03:06.846Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60679",
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
                "createdAt": "2023-11-24T05:03:06.846Z",
                "updatedAt": "2023-11-24T05:03:06.846Z"
            },
            {
                "_id": "65602e8ae2ec864c03b6067a",
                "name": "Partai Kebangkitan Nusantara (PKN)",
                "no_urut": 9,
                "ig_sosmed": "https://www.instagram.com/pimnaspkn/",
                "fb_sosmed": "https://www.facebook.com/pimnaspkn/",
                "x_sosmed": "https://twitter.com/pimnaspkn",
                "website": "https://pimnas-pkn.id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Kebangkitan_Nusantara",
                "koalisi": "",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656155242_logo%20PKN-.png",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.846Z",
                "updatedAt": "2023-11-24T05:03:06.846Z"
            },
            {
                "_id": "65602e8ae2ec864c03b6067b",
                "name": "Partai Hati Nurani Rakyat (Hanura)",
                "no_urut": 10,
                "ig_sosmed": "https://www.instagram.com/dpp.hanura/",
                "fb_sosmed": "https://www.facebook.com/hatinuranirakyat",
                "x_sosmed": "",
                "website": "https://partaihanura.or.id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Hati_Nurani_Rakyat",
                "koalisi": "Kerja Sama",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1659263373_hanura_10x10.png",
                "usungPaslon": 3,
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.846Z",
                "updatedAt": "2023-11-24T05:03:06.846Z"
            },
            {
                "_id": "65602e8ae2ec864c03b6067c",
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
                "createdAt": "2023-11-24T05:03:06.847Z",
                "updatedAt": "2023-11-24T05:03:06.847Z"
            },
            {
                "_id": "65602e8ae2ec864c03b6067d",
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
                "createdAt": "2023-11-24T05:03:06.847Z",
                "updatedAt": "2023-11-24T05:03:06.847Z"
            },
            {
                "_id": "65602e8ae2ec864c03b6067e",
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
                "createdAt": "2023-11-24T05:03:06.847Z",
                "updatedAt": "2023-11-24T05:03:06.847Z"
            },
            {
                "_id": "65602e8ae2ec864c03b6067f",
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
                "createdAt": "2023-11-24T05:03:06.847Z",
                "updatedAt": "2023-11-24T05:03:06.847Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60680",
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
                "createdAt": "2023-11-24T05:03:06.847Z",
                "updatedAt": "2023-11-24T05:03:06.847Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60681",
                "name": "Partai Persatuan Indonesia (Perindo)",
                "no_urut": 16,
                "ig_sosmed": "https://www.instagram.com/partaiperindo/",
                "fb_sosmed": "https://www.facebook.com/PartaiPerindo/",
                "x_sosmed": "https://twitter.com/PartaiPerindo",
                "website": "https://www.partaiperindo.com/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Persatuan_Indonesia",
                "koalisi": "Kerja Sama",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656144884_LOGO%20PARTAI%20PERINDO%2010x10%20cm%20(RGB).png",
                "usungPaslon": 3,
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60682",
                "name": "Partai Persatuan Pembangunan (PPP)",
                "no_urut": 17,
                "ig_sosmed": "https://instagram.com/dpp.ppp",
                "fb_sosmed": "https://www.facebook.com/OfficialDPPPPP",
                "x_sosmed": "https://twitter.com/@DPP_PPP",
                "website": "https://www.ppp.or.id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Persatuan_Pembangunan",
                "koalisi": "Kerja Sama",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1658455987_Logo%20PPP.png",
                "usungPaslon": 3,
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60683",
                "name": "Partai Nangroe Aceh (PNA)",
                "no_urut": 18,
                "ig_sosmed": "",
                "fb_sosmed": "",
                "x_sosmed": "",
                "website": "",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Nanggroe_Aceh",
                "koalisi": "",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1657205782_PNA.png",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60684",
                "name": "Partai Generasi Atjeh Beusaboh Tha'at Dan Taqwa (Gabthat)",
                "no_urut": 19,
                "ig_sosmed": "",
                "fb_sosmed": "",
                "x_sosmed": "",
                "website": "",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Gabthat",
                "koalisi": "",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1656604360_BENDERA.png",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60685",
                "name": "Partai Darul Aceh (PDA)",
                "no_urut": 20,
                "ig_sosmed": "",
                "fb_sosmed": "",
                "x_sosmed": "",
                "website": "https://www.partaidarulaceh.id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Darul_Aceh",
                "koalisi": "",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1658110917_Gambar%20Partai%20Darul%20Aceh.png",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60686",
                "name": "Partai Aceh",
                "no_urut": 21,
                "ig_sosmed": "https://www.instagram.com/dpa_partaiaceh",
                "fb_sosmed": "https://www.facebook.com/partai.atjeh",
                "x_sosmed": "https://twitter.com/dpp_partaiaceh",
                "website": "https://www.partaiaceh.org/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Aceh",
                "koalisi": "",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1659435873_LAMBANG%20PARTAI%20ACEH.png",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60687",
                "name": "Partai Adil Sejahtera Aceh (PAS Aceh)",
                "no_urut": 22,
                "ig_sosmed": "https://www.instagram.com/pas.aceh_official/",
                "fb_sosmed": "",
                "x_sosmed": "",
                "website": "https://pas-aceh.com/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_Adil_Sejahtera_Aceh",
                "koalisi": "",
                "foto": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Logo_PAS_ACEH.webp",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60688",
                "name": "Partai Soliditas Independent Rakyat Aceh (SIRA)",
                "no_urut": 23,
                "ig_sosmed": "https://www.instagram.com/partai_sira/",
                "fb_sosmed": "https://www.facebook.com/profile.php?id=100022436165619",
                "x_sosmed": "",
                "website": "https://www.partaisira.org/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_SIRA",
                "koalisi": "",
                "foto": "https://infopemilu.kpu.go.id/berkas-sipol/parpol/profil/gambar_parpol/1659823143_Logo%20Partai%2010x10%20cm%20unk%20SIPOL_PNG.png",
                "__v": 0,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65602e8ae2ec864c03b60689",
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
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z"
            },
            {
                "_id": "65645624c35f66589fae1988",
                "name": "Test New Partai",
                "no_urut": 25,
                "ig_sosmed": "https://www.instagram.com/partaitesting",
                "fb_sosmed": "https://www.facebook.com/profile.php?id=100022436165619",
                "x_sosmed": "https://twitter.com/dpp_partaitesting",
                "website": "https://partaitesting.id/id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_testing",
                "koalisi": "Perubahan",
                "foto": "test.png",
                "usungPaslon": 1,
                "createdAt": "2023-11-24T05:03:06.848Z",
                "updatedAt": "2023-11-24T05:03:06.848Z",
                "__v": 0
            },
            {
                "_id": "6564731e6dc3537bb88e0ca9",
                "name": "Testing Save Partai",
                "no_urut": 26,
                "ig_sosmed": "update-test-input-ig",
                "fb_sosmed": "update-test-input-fb",
                "x_sosmed": "update-test-input-x",
                "website": "https://partaitesting2.id/id/",
                "url_api_wikipedia": "https://id.wikipedia.org/w/api.php?format=json&action=parse&page=Partai_testing2",
                "koalisi": "Perubahan",
                "foto": "test2.png",
                "usungPaslon": 2,
                "createdAt": "2023-11-27T17:42:06.848Z",
                "updatedAt": "2023-11-27T11:04:25.916Z",
                "__v": 0
            }
        ]);
    });

    it('should get a PartaiInfo by ID', async () => {
        const response = await request(app).get('/partaiInfos/65602e8ae2ec864c03b60673');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            {
                "_id": "65602e8ae2ec864c03b60673",
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
                "createdAt": "2023-11-24T05:03:06.845Z",
                "updatedAt": "2023-11-24T05:03:06.845Z"
            }
        )
    });

    it('should save a new PartaiInfo', async () => {
        const newPartaiInfo = {
            "name": "Testing Save Partai 2.0",
            "no_urut": 27,
            "ig_sosmed": "",
            "fb_sosmed": "",
            "x_sosmed": "",
            "website": "",
            "url_api_wikipedia": "",
            "koalisi": "Perubahan",
            "foto": "test2.png",
            "usungPaslon": 2,
            "__v": 0,
        };
        const response = await request(app)
            .post('/partaiInfos')
            .send(newPartaiInfo);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            "name": expect.stringContaining("Testing Save Partai 2.0")
        }));
    });

    it('should update a PartaiInfo by ID', async () => {
        const updatePartaiData = {
            "x_sosmed": "update-test-25",
            "koalisi": ""
        };
        const response = await request(app)
            .put('/partaiInfos/65645624c35f66589fae1988')
            .send(updatePartaiData);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            {
                "acknowledged": true,
                "modifiedCount": 1,
                "upsertedId": null,
                "upsertedCount": 0,
                "matchedCount": 1
            }
        )
    });

    it('should delete a PartaiInfo by ID', async () => {
        const response = await request(app).delete('/partaiInfos/6564731e6dc3537bb88e0ca9');
        expect(response.status).toBe(200);
    });
});
