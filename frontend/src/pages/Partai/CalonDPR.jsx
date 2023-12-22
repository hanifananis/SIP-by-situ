import { Box, Card, Grid, Heading, Select, Text } from '@chakra-ui/react';
import Candidate from '../../components/Candidate';
import { useEffect, useState } from 'react';
import '../../../public/css/index.css'
import DapilModal from './DapilModal';

const CalonDPR = ({ data }) => {
    const [visibleData, setVisibleData] = useState([]);
    const [selectedDapil, setSelectedDapil] = useState([]);
    const [nextDataStart, setNextDataStart] = useState(4); // Start with 4 items initially

    useEffect(() => {
        if (data) {
            setVisibleData(data.slice(0, nextDataStart));
        }
    }, [data, nextDataStart]);
    

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercentage > 60) {
            setNextDataStart((prevStart) => prevStart + 4); // Load the next 4 items
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [nextDataStart]);

    const dapilNames = [...new Set(data?.map(val => val.dapil))];

    const handleDapilSelect = (selectedValues) => {
        setSelectedDapil(selectedValues);
    }

    useEffect(() => {
        if (selectedDapil.length > 0) {
            const filteredData = data.filter(calon => selectedDapil.includes(calon.dapil));
            setVisibleData(filteredData.slice(0, nextDataStart));
        } else {
            setVisibleData(data.slice(0, nextDataStart));
        }
    }, [selectedDapil, data, nextDataStart]);

    return (
        <>
            <Heading 
                pt={12} 
                pb={{base: 4, md: 8}} 
                textAlign={{base: 'center', md: 'left'}}
                fontSize={{base: 32, md: 48}}
                fontWeight={'bold'}
            >
                Calon Legislatif 2024
            </Heading>
            <Box bg='#80AF85' w='100%' p={4} color='white' rounded={'xl'}>
                <DapilModal names={dapilNames} onSelect={handleDapilSelect} />
                <Grid
                    flexDirection={{ base: 'column', md: 'row' }}
                    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
                    gap={4}
                    pt={4}
                >
                    {visibleData.map((calon) => (
                        <Card
                            key={calon._id}
                            borderWidth={3}
                            borderColor={'#540302'}
                            bgColor={'white'}
                            p={4}
                            align={'center'}
                            rounded={'2xl'}
                            textAlign={'center'}
                        >
                            <Text pb={2}>{calon.dapil}</Text>
                            <Text>Nomor Urut</Text>
                            <Heading pb={4}>{calon.no_urut}</Heading>
                            <Candidate name={calon.nama} img={calon.url_foto} width={120} height={160} />
                            <Text fontSize={'xs'}>{calon.kota}</Text>
                        </Card>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default CalonDPR;
