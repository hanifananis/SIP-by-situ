import mongoose from 'mongoose';
import Paslon from '../models/Paslon.js';

const paslonData = [
  {
    capres: 'Anies Baswedan',
    cawapres: 'Muhaimin Iskandar',
    no_urut: 1,
    deskripsi: 'Mantan Gubernur DKI Jakarta yang juga pernah menjabat Menteri Pendidikan dan Kebudayaan (2014–2016) Anies Baswedan pertama dicalonkan sebagai presiden oleh Partai NasDem. Dia diusung oleh Koalisi Perubahan, yang berisi Partai NasDem, Partai Keadilan Sejahtera, dan Partai Demokrat. Demokrat lalu hengkang dan mendukung Prabowo Subianto seiring dengan masuknya Partai Kebangkitan Bangsa dari Koalisi Indonesia Maju yang mendukung Prabowo. Masuknya PKB diiringi dengan kesepakatan untuk memasangkan Anies bersama ketua umum mereka, Wakil Ketua DPR RI yang sebelumnya menjabat Wakil Ketua MPR RI (2018–2019) dan Menteri Tenaga Kerja dan Transmigrasi (2009–2014) Muhaimin Iskandar.',
    visi: 'Indonesia Adil Makmur Untuk Semua',
    misi: [
    '1. Memastikan Ketersediaan Kebutuhan Pokok dan Biaya Hidup Murah melalui Kemandirian Pangan, Ketahanan Energi, dan Kedaulatan Air',
    '2. Mengentaskan Kemiskinan dengan Memperluas Kesempatan Berusaha dan Menciptakan Lapangan Kerja, Mewujudkan Upah Berkeadilan, Menjamin Kemajuan Ekonomi Berbasis Kemandirian dan Pemerataan, serta Mendukung Korporasi Indonesia Berhasil di Negeri Sendiri dan Bertumbuh di Kancah Global.',
    '3.Mewujudkan Keadilan Ekologis Berkelanjutan untuk Generasi Mendatang. ',
    '4.Membangun Kota dan Desa Berbasis Kawasan yang Manusiawi, Berkeadilan dan Saling Memajukan. ',
    '5.Mewujudkan Manusia Indonesia yang Sehat, Cerdas, Produktif, Berakhlak, dan Berbudaya. ',
    '6.Mewujudkan Keluarga Indonesia yang Sejahtera dan Bahagia sebagai Akar Kekuatan Bangsa. ',
    '7.Memperkuat Sistem Pertahanan dan Keamanan Negara, serta Meningkatkan Peran dan Kepemimpinan Indonesia dalam Arena Politik Global untuk Mewujudkan Kepentingan Nasional dan Perdamaian Dunia. ',
    '8.Memulihkan Kualitas Demokrasi, Menegakkan Hukum dan HAM, Memberantas Korupsi Tanpa Tebang Pilih, serta Menyelenggarakan Pemerintahan yang Berpihak pada Rakyat'
    ],
    partai_pengusung: 'Partai B',
    capres_img_url: 'https://infopemilu.kpu.go.id/berkas-pwp/anis_baru.jpeg',
    cawapres_img_url: 'https://infopemilu.kpu.go.id/berkas-pwp/muhaimin_baru.jpeg',
  },
  {
    capres: 'Prabowo Subianto',
    cawapres: 'Gibran Rakabuming',
    no_urut: 2,
    deskripsi: 'Prabowo Subianto dicalonkan oleh Partai Gerakan Indonesia Raya sebagai calon presiden pada 12 Agustus 2022. Disusul dua partai anggota KIB dan partai-partai nonparlemen yang menjadi cikal bakal Koalisi Indonesia Maju setelah bubarnya Koalisi Kebangkitan Indonesia Raya bersama Partai Kebangkitan Bangsa. Pada 22 Oktober 2023, putra sulung Presiden Joko Widodo yang juga Wali Kota Surakarta Gibran Rakabuming diumumkan sebagai bakal calon wakil presiden. Ia baru berusia 36 tahun dan baru bisa maju setelah turun putusan Mahkamah Konstitusi pada 16 Oktober 2023 yang membolehkan calon presiden atau wakil presiden berusia di bawah 40 tahun jika pernah atau sedang menjabat gubernur/bupati/wali kota.',
    visi: 'Bersama Indonesia Maju Menuju Indonesia Emas 2045',
    misi: ['Misi Asta Cita:',
    '1. Memperkokoh ideologi Pancasila, demokrasi, dan hak asasi manusia (HAM).',
    '2. Memantapkan sistem pertahanan keamanan negara dan mendorong kemandirian bangsa melalui swasembada pangan, energi, air, ekonomi syariah, ekonomi digital, ekonomi hijau, dan ekonomi biru.',
    '3. Melanjutkan pengembangan infrastruktur dan meningkatkan lapangan kerja yang berkualitas, mendorong kewirausahaan, mengembangkan industri kreatif serta mengembangkan agro-maritim industri di sentra produksi melalui peran aktif koperasi.',
    '4. Memperkuat pembangunan sumber daya manusia (SDM), sains, teknologi, pendidikan, kesehatan, prestasi olahraga, kesetaraan gender, serta penguatan peran perempuan, pemuda (generasi milenial dan generasi Z), dan penyandang disabilitas.',
    '5. Melanjutkan hilirisasi dan mengembangkan industri berbasis sumber daya alam untuk meningkatkan nilai tambah di dalam negeri.',
    '6. Membangun dari desa dan dari bawah untuk pertumbuhan ekonomi, pemerataan ekonomi, dan pemberantasan kemiskinan.',
    '7. Memperkuat reformasi politik, hukum, dan birokrasi, serta memperkuat pencegahan dan pemberantasan korupsi, narkoba, judi, dan penyelundupan.',
    '8. Memperkuat penyelarasan kehidupan yang harmonis dengan lingkungan, alam dan budaya, serta peningkatan toleransi antarumat beragama untuk mencapai masyarakat yang adil dan makmur.',
    ],
    partai_pengusung: 'Partai A',
    capres_img_url: 'https://infopemilu.kpu.go.id/berkas-pwp/prabowo_baru.jpeg',
    cawapres_img_url: 'https://infopemilu.kpu.go.id/berkas-pwp/gibran_baru.jpeg',
  },
  {
    capres: 'Ganjar Pranowo',
    cawapres: 'Mahfud MD',
    no_urut: 3,
    deskripsi: 'Purna tugasnya Joko Widodo sebagai presiden petahana pada 2024 membuat Partai Demokrasi Indonesia Perjuangan mencari calon presiden penggantinya. Gubernur Jawa Tengah yang juga mantan anggota DPR RI (2004–2013) Ganjar Pranowo lalu dicalonkan sebagai presiden oleh PDI-P. Pencalonannya turut didukung oleh PPP, Partai Perindo, dan Partai Hati Nurani Rakyat. Pada 18 Oktober 2023, Menteri Koordinator Bidang Politik, Hukum, dan Keamanan yang juga mantan anggota DPR RI (2004–2008) dan Ketua Mahkamah Konstitusi (2008–2013) Mahfud MD diumumkan sebagai calon wakil presiden untuk Ganjar.',
    visi: 'Gerak cepat menuju Indonesia Unggul',
    misi: ['1. Manusia Indonesia yang sehat, terdidik, dan sejahtera',
    '2. Indonesia unggul dalam bidang inovasi dan teknologi',
    '3. Ekonomi yang tangguh dan berdikari \n4. Hilangnya kemiskinan dan ketimpangan antarwilayah dari akarnya \n5. Ekosistem digital yang mengutamakan akses internet cepat dan terjangkau \n6. Pembangunan ekonomi yang memperhatikan kelestarian lingkungan \n7. Demokrasi terjaga melalui pemberantasan korupsi dan pemerintahan inklusif berlandaskan supremasi hukum \n8. Indonesia bangsa terhormat di kancah internasional, serta pertahanan yang tangguh dan modern',
    ],
    partai_pengusung: 'Partai A',
    capres_img_url: 'https://infopemilu.kpu.go.id/berkas-pwp/ganjar_baru.jpeg',
    cawapres_img_url: 'https://infopemilu.kpu.go.id/berkas-pwp/mahfud_baru.jpeg',
  },
  // Add more data objects here
];

async function seedPaslon() {
  try {
    // Remove existing documents in the collection (optional)
    await Paslon.deleteMany();

    // Insert the data into the collection
    await Paslon.insertMany(paslonData);

    console.log('Paslon successfully seeded.');
  } catch (error) {
    console.error('Error seeding Paslon:', error);
  } finally {
    mongoose.disconnect();
  }
}

export { seedPaslon };