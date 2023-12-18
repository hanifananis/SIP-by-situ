import { Flex, Heading, Accordion, Image } from '@chakra-ui/react'
import GreenAccordion from '../../components/GreenAccordion'
import DetailHeader from '../../components/DetailHeader'
import { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Redirect from '../../components/Redirect'
import CalonDPR from './CalonDPR'
import Loading from '../../components/Loading'
import SocialMedia from '../../components/SocialMedia'

const Detail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/partaiInfos/${_id}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, [_id]);

  return (
    <Suspense fallback={<Loading type={'spin'} color={'#4F7B58'} />}>
      {
        loading ? <Flex alignItems="center" justifyContent="center" height="100vh"><Loading type={'spin'} color={'#4F7B58'} /></Flex> : 
        <Flex
          flexDirection={'column'}
          marginY={16}
          marginX={{base:20, xl:48}}
        >
          <Redirect title={'Partai'} />
          <DetailHeader 
            key={data._id}
            title={data.name}
          />
          <Image
            mx={'auto'}
            alignItems={'center'}
            src={data.foto}
            w={'80'}
          />
          <SocialMedia
            website={data.website}
            instagram={data.ig_sosmed}
            facebook={data.fb_sosmed}
          />
          <Heading
            mt={12}
            mb={2}
            fontSize={48}>
              Profil Partai
          </Heading>
          <Accordion allowMultiple>
            <GreenAccordion title={'Deskripsi'} desc={data.deskripsi} />
            <GreenAccordion title={'Koalisi'} desc={data.koalisi} />
          </Accordion>
          <CalonDPR data={data.calonDPRs} />
        </Flex>
      }
    </Suspense>
  )
}

export default Detail