import { Flex, Grid } from '@chakra-ui/react'
import CardTransparent from '../components/CardTransparent'
import Banner from '../components/Banner'
import BackToHome from '../components/BackToHome'

const PelajariDetail = () => {
  const cardData = [
    {
      title: "Apa Itu Pemilihan Umum?",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Apa Asas Pemilihan Umum di Indonesia?",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Siapa Saja Penyelenggara Pemilu?",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      title: "Kapan Pemilu 2024, Hari dan Tanggal Berapa?",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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