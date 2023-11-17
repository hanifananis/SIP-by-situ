import React, { useEffect, useState } from 'react'
import RedirectPage from '../components/RedirectPage'
import { Accordion, Flex } from '@chakra-ui/react'
import DetailHeader from '../components/DetailHeader'
import GreenAccordion from '../components/GreenAccordion'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Candidates from '../components/Candidates'

const Calon = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:5000/paslons/${_id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, [_id]);

  const values = [
    {
      id: 1,
      title: "Visi dan Misi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      title: "Proker",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 3,
      title: "Fakta Unik",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}>
        <RedirectPage title={'Calon'} />
          <DetailHeader 
            key={data._id}
            title={`Calon ${data.no_urut}`}
          />
          <Candidates data={[data]} height={72} width={60} />
        <Accordion allowMultiple>
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