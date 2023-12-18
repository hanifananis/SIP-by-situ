import { Tabs, Tab, TabList, TabPanels, TabPanel, Flex, TabIndicator } from '@chakra-ui/react'
import React from 'react'
import DPR from './DPR'
import Pilpres from './pilpres'
import Banner from '../../components/Banner'
import BackToHome from '../../components/BackToHome'

const KilasBalik = () => {
  return (
    <Flex
        flexDirection={'column'}
        maxW={"100vw"}
        paddingY={16}
        paddingX={{base:20, xl:48}}
        gap={6}
    >
        <BackToHome />
        <Banner title={"Kilas Balik Pemilu 2019"} desc={"Selamat datang di halaman perolehan suara Pemilu Capres, Cawapres, dan DPR tahun 2019! Pemilihan umum yang digelar pada tahun tersebut menjadi salah satu momen penting dalam sejarah demokrasi Indonesia."} />
        <Tabs align='center' variant={'line'}>
            <TabList>
                <Tab 
                    _selected={{ color: '#4F7B58', borderBottomColor: '#4F7B58' }} 
                    _hover={{ bg: 'none' }}
                >
                    DPR
                </Tab>
                <Tab 
                    _selected={{ color: '#4F7B58', borderBottomColor: '#4F7B58' }} 
                    _hover={{ bg: 'none' }}
                >
                    Presiden
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <DPR />
                </TabPanel>
                <TabPanel>
                    <Pilpres />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Flex>
  )
}

export default KilasBalik