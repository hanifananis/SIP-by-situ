import { Flex, Box } from '@chakra-ui/react';
import Banner from '../../components/Banner';
import { Suspense, lazy, useEffect, useState } from 'react';
import axios from 'axios';
import AddTopikModal from './AddTopikModal';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';

const TopicCardPreview = lazy(() => import('../../components/TopicCard'));

const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const [nextDataStart, setNextDataStart] = useState(3); 
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/forums`)
      .then(response => {
        setData(response.data);
        setLoading(false);
        setVisibleData(response.data.slice(0, nextDataStart)); // Load the initial set of data
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
        setLoading(false);
      });
  }, [nextDataStart]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    if (scrollPercentage > 50) {
      setNextDataStart(nextDataStart + 1); // Load the next set of data
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextDataStart]);

  const fetchedData = (searchInput) => {
    const filteredData = searchInput
      ? data.filter((forum) => 
          forum.judul.toLowerCase().includes(searchInput.toLowerCase()) ||
          forum.isi.toLowerCase().includes(searchInput.toLowerCase())
        )
      : data;

    return filteredData.slice(0, nextDataStart); // Return the current visible data
  };

  return (
    <Flex
      flexDirection={'column'}
      marginY={{base: 12, md: 16}}
      px={{base: 6, md: 24, xl: 52}}
      gap={6}
    >
      <Banner title={"Forum"} desc={"Kami dengan bangga mempersembahkan wadah ini sebagai tempat bertemunya pikiran-pikiran brilian dan pandangan yang beragam."} />
      <Flex gap={{base: 2, md: 8}} flexDir={{base: 'column', md: 'row'}}>
        <SearchBar searchInput={searchInput} handleChange={handleChange} />
        <AddTopikModal />
      </Flex>
      <Suspense fallback={<Loading type={'bubbles'} color={'#4F7B58'} />}>
        { 
          loading ?  <Flex mx={'auto'}><Loading type={'bubbles'} color={'#4F7B58'} /></Flex> :
          fetchedData(searchInput).length === 0 ? 'No results found.' : <TopicCardPreview data={fetchedData(searchInput)} />
        }
      </Suspense>
    </Flex>
  );
}

export default MainPage;
