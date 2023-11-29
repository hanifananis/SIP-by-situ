import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@chakra-ui/react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';

const ManageForum = () => {
  const [data, setData] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/forums')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, []);

  useEffect(() => {
    if($.fn.DataTable.isDataTable('#manageForum')) {
      $(tableRef.current).DataTable().destroy();
    }

    $(tableRef.current).DataTable({
      data: data,
      responsive: true,
      columns: [
        { title: 'No', data: null, render: (data, type, row, meta) => type === 'display' ? meta.row + 1 : meta.row },
        { title: 'Judul', data: 'judul'},
        { title: 'Isi', data: 'isi' }
      ],
      columnDefs: [
        { width: 100, targets: 0 },
        { width: 400, targets: 1 },
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
        <table id="manageForum" className='display' ref={tableRef}>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Isi</th>
                </tr>
            </thead>
            <tbody />
        </table>
    </Container>
  );
};

export default ManageForum;