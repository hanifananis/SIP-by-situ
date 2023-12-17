import { Flex, Grid } from '@chakra-ui/react'
import CardTransparent from '../components/CardTransparent'
import Banner from '../components/Banner'
import BackToHome from '../components/BackToHome'

const PelajariDetail = () => {
  const cardData = [
    {
      title: "Apa Itu Pemilihan Umum?",
      value: "Pemilihan Umum yang selanjutnya disebut Pemilu adalah sarana pelaksanaan kedaulatan rakyat untuk memilih Anggota Dewan Perwakilan Rakyat, Anggota Dewan Perwakilan Daerah, Presiden dan Wakil Presiden dan untuk memilih Anggota Dewan Perwakilan Rakyat Daerah, yang dilaksanakan secara langsung, umum, bebas, rahasia, jujur, dan adil dalam Negara Kesatuan Republik Indonesia berdasarkan Pancasila dan Undang- Undang Dasar Negara Republik Indonesia Tahun 1945. (Sumber: UU Nomor 7 Tahun 2017 tentang Pemilihan Umum)"
    },
    {
      title: "Apa Dasar KPU Menyelenggarakan Pemilu?",
      value: "UU Nomor 7 Tahun 2017 tentang Pemilihan Umum"
    },
    {
      title: "Apa Asas Pemilihan Umum di Indonesia?",
      value: "Asas pemilu yaitu langsung, umum, bebas, rahasia, jujur, dan adil. (Sumber: UU Nomor 7 Tahun 2017 tentang Pemilihan Umum)"
    },
    {
      title: "Siapa Saja Penyelenggara Pemilu?",
      value: "Penyelenggara Pemilu adalah lembaga yang menyelenggarakan Pemilu yang terdiri atas Komisi Pemilihan Umum (KPU), Badan Pengawas Pemilu (Bawaslu), dan Dewan Kehormatan Penyelenggara Pemilu (DKPP). (Sumber: UU Nomor 7 Tahun 2017 tentang Pemilihan Umum)"
    },
    {
      title: "Kapan Pemilu 2024, Hari dan Tanggal Berapa?",
      value: "Rabu, 14 Februari 2024. (Sumber: Keputusan KPU Nomor 21 Tahun 2022 tentang Hari dan Tanggal Pemungutan Suara Pada Pemilihan Umum Presiden dan Wakil Presiden, Anggota DPR, Anggota DPD, Anggota DPRD Provinsi, dan Anggota DPRD Kabupaten/Kota Tahun 2024)"
    },
    {
      title: "Siapa Peserta Pemilu 2024?",
      value: "Peserta Pemilu adalah partai politik untuk Pemilu Anggota DPR, DPRD provinsi, DPRD kabupaten/kota, perseorangan untuk Pemilu anggota DPD, dan pasangan calon yang diusulkan oleh partai politik atau gabungan partai politik untuk Pemilu Presiden dan Wakil Presiden. (Sumber: UU Nomor 7 Tahun 2017 tentang Pemilihan Umum)"
    },
    {
      title: "Pemilu 2024 Memilih Apa Saja?",
      value: "Memilih Presiden dan Wakil Presiden, Anggota DPR, DPD, DPRD Provinsi dan DPRD Kabupaten/Kota. (Sumber: UU Nomor 7 Tahun 2017 tentang Pemilihan Umum)"
    },
    {
      title: "Ada Berapa Partai Politik Peserta Pemilu 2024?",
      value: "Ada 18 partai politik nasional dan 6 partai politik lokal di Aceh"
    },
    {
      title: "Pemilu 2024 Apa yang Dicoblos di TPS?",
      value: "Surat Suara Calon Presiden dan Wakil Presiden Surat Suara Calon Anggota DPR RI Surat Suara Calon Anggota DPD RI Surat Suara Calon Anggota DPRD Provinsi Surat Suara Calon Anggota DPRD Kabupaten/Kota"
    },
  ] 

  return (
    <Flex
      flexDirection={'column'}
      mx={12}
      marginY={20}>
      <BackToHome />
      <Banner title={"Pelajari Pemilu 2024"} />
      <Grid gap={4}>
        {cardData.map((cardData, index) => (     
          <CardTransparent 
          key={index}
          {...cardData } />
        ))}
      </Grid>
    </Flex>
  )
}

export default PelajariDetail