import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@chakra-ui/react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';

const ManagePaslon = () => {
  const [data, setData] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/paslons')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, []);

  useEffect(() => {
    if($.fn.DataTable.isDataTable('#managePaslon')) {
      $(tableRef.current).DataTable().destroy();
    }

    $(tableRef.current).DataTable({
      data: data,
      responsive: true,
      columns: [
        { title: 'No Urut', data: 'no_urut'},
        { title: 'Calon Presiden', data: 'capres'},
        { title: 'Calon Wakil Presiden', data: 'cawapres'},
        { title: 'Action', defaultContent: 'Edit' },
      ]
    })
  })

  return (
    <Container 
    maxW='container.xl' 
    bgColor={'white'} 
    py={6} 
    px={8} 
    rounded={'lg'}
  >
    <table id="managePaslon" className='display' ref={tableRef}>
      <thead>
        <tr>
          <th>No Urut</th>
          <th>Calon Presiden</th>
          <th>Calon Wakil Presiden</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody />
    </table>
  </Container>
  )
}

export default ManagePaslon