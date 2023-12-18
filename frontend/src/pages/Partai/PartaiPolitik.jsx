import { Flex, Text } from '@chakra-ui/react'
import React, { Suspense, useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Cards from './Cards'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'
import Loading from '../../components/Loading'

const PartaiPolitik = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/partaiInfos`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const fetchedData = (searchInput) => {
    if (searchInput === '') {
      return data;
    } else {
      return data.filter((partai) => partai.name.toLowerCase().includes(searchInput))
    }
  }

  return (
    <Flex 
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={14}
    >
      <Banner 
        title={"Partai Politik Indonesia"}
        desc={"Menyelidiki catatan prestasi dan sejarah partai politik yang berpengaruh merupakan langkah yang penting bagi pemilih yang ingin membuat keputusan yang berdasarkan informasi yang mendalam dalam konteks pemilihan politik."}
      />
      <SearchBar searchInput={searchInput} handleChange={handleChange} />
      <Suspense fallback={<Loading type={'bubbles'} color={'#4F7B58'} />}>
        { 
          loading ? <Flex mx={'auto'}><Loading type={'bubbles'} color={'#4F7B58'} /></Flex> : fetchedData(searchInput).length == 0 ? 'No results found.' : <Cards data={fetchedData(searchInput)} />
        }
      </Suspense>
    </Flex>
  )
}

export default PartaiPolitik