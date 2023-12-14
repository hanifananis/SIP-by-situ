import { Flex } from '@chakra-ui/react'
import Banner from '../../components/Banner'
import TopicCard from '../../components/TopicCard'
import { useEffect, useState } from 'react'
import axios from 'axios';
import AddTopikModal from './AddTopikModal';
import SearchBar from '../../components/SearchBar';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  useEffect(() => {
    axios.get('http://localhost:5000/forums')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, [data]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  const fetchedData = (searchInput) => {
    if (searchInput === '') {
      return data;
    } else {
      const lowercasedSearchInput = searchInput.toLowerCase();
  
      return data.filter((forum) => 
        forum.judul.toLowerCase().includes(lowercasedSearchInput) ||
        forum.isi.toLowerCase().includes(lowercasedSearchInput)
      );
    }
  };

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={6}
    >
      <Banner title={"Forum"} desc={"Kami dengan bangga mempersembahkan wadah ini sebagai tempat bertemunya pikiran-pikiran brilian dan pandangan yang beragam."} />
      <Flex gap={8}>
        <SearchBar searchInput={searchInput} handleChange={handleChange} />
        <AddTopikModal />
      </Flex>
      { 
        fetchedData(searchInput).length == 0 ? 'No results found.' : <TopicCard data={fetchedData(searchInput)} />
      }
    </Flex>
  )
}

export default MainPage