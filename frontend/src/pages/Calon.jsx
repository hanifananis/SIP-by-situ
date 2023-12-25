import React, { useEffect, useState } from 'react'
import { Accordion, Flex } from '@chakra-ui/react'
import DetailHeader from '../components/DetailHeader'
import GreenAccordion from '../components/GreenAccordion'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Candidates from '../components/Candidates'
import BackToHome from '../components/BackToHome'

const Calon = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/paslons/${_id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, [_id]);

  return (
    <Flex
      flexDirection={'column'}
      marginY={{base: 12, md: 16}}
      px={{base: 6, md: 42, xl: 52}}
    >
      <BackToHome />
        <DetailHeader 
          key={data._id}
          title={`Calon ${data.no_urut}`}
        />
        <Candidates data={[data]} height={72} width={60} />
      <Accordion allowMultiple mt={8}>
        <GreenAccordion 
          title={"Deskripsi"}
          desc={data.deskripsi}
        />
        <GreenAccordion 
          title={"Visi"}
          desc={data.visi}
        />
        <GreenAccordion 
          title={"Misi"}
          desc={data.misi}
        />
      </Accordion>
    </Flex>
  )
}

export default Calon