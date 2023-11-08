import React from 'react'
import RedirectPage from '../components/RedirectPage'
import { Accordion, Flex } from '@chakra-ui/react'
import DetailHeader from '../components/DetailHeader'
import Candidates from '../components/Candidates'
import GreenAccordion from '../components/GreenAccordion'

const Calon = ({ title }, props) => {
  const data = props.data || []; 

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
          title={title}
        />
        {data.map((d) => (
          <Candidates key={d.id} data={[val]} />
        ))}
        <Accordion allowMultiple>
        {values.map(val => (
          <GreenAccordion 
            key={val.id}
            title={val.title}
            desc={val.desc}
          />
        ))}
        </Accordion>
    </Flex>
  )
}

export default Calon