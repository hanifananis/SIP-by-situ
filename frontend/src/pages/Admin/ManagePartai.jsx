import React, { useEffect, useRef, useState } from 'react'
import { Container } from '@chakra-ui/react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';

const ManagePartai = () => {
  const [data, setData] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/partaiInfos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error)
      });
  }, [])

  useEffect(() => {
    if ($.fn.DataTable.isDataTable('#managePartai')) {
      $(tableRef.current).DataTable().destroy();
    }
  
    $(tableRef.current).DataTable({
      data: data,
      responsive: true,
      columns: [
        { title: 'No Urut', data: 'no_urut'},
        { title: 'Name', data: 'name'},
        { title: 'Action', defaultContent: 'Edit' },
      ],
      columnDefs: [
        { width: 100, targets: 0 },
        { width: 800, targets: 1 },
      ],
    });
  }, [data]);
  

  return (
    <Container 
      maxW='container.xl' 
      bgColor={'white'} 
      py={6} 
      px={8} 
      rounded={'lg'}
    >
      <table id="managePartai" className='display' ref={tableRef}>
        <thead>
          <tr>
            <th>No Urut</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </Container>
  )
}

export default ManagePartai