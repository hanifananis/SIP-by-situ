import { Card, CardBody, CardHeader, Flex, Heading } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import React, { useEffect, useRef, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, BarElement);

const DPR = () => {
    const [data, setData] = useState([]);
    const tableRef = useRef(null);

    useEffect(() => {
      axios.get('http://localhost:5000/datahasildpr2019')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error Fetching Data: ', error);
        });
    }, []);
    
    useEffect(() => {
        if($.fn.DataTable.isDataTable('#tabelDPR')) {
            $(tableRef.current).DataTable().destroy();
        }

        $(tableRef.current).DataTable({
            scrollX: true,
            data: data,
            columns: [
                { title: 'No', data: null, render: (data, type, row, meta) => type === 'display' ? meta.row + 1 : meta.row },
                { title: 'Wilayah', data: 'Wilayah'},
                { title: 'PKB', data: 'PKB' },
                { title: 'Gerindra', data: 'Gerindra'},
                { title: 'PDIP', data: 'PDIP' },
                { title: 'NasDem', data: 'NasDem'},
                { title: 'Garuda', data: 'Garuda' },
                { title: 'Berkarya', data: 'Berkarya'},
                { title: 'PKS', data: 'PKS' },
                { title: 'Perindo', data: 'Perindo'},
                { title: 'PPP', data: 'PPP' },
                { title: 'PSI', data: 'PSI'},
                { title: 'PAN', data: 'PAN' },
                { title: 'Hanura', data: 'Hanura'},
                { title: 'Demokrat', data: 'Demokrat' },
                { title: 'PBB', data: 'PBB' },
                { title: 'PKPI', data: 'PKPI' },
            ]
        });
    }, [data]);

    const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 1', 'Label 2', 'Label 3', 'Label 1'];
    const chartData = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    
    return (
        <Flex flexDirection={'column'} gap={6}>
            <Card rounded={'2xl'}>
                <CardHeader bg={'#540302'} color={'white'}>
                    <Heading textAlign={'center'}>Hasil Hitung Suara Legislatif DPR RI 2019</Heading>
                </CardHeader>
                <CardBody
                    width={"50%"}
                    mx={'auto'}
                >
                    <Bar
                        key='chart-bar'
                        datasetIdKey='idBar'
                        data={chartData}
                        options={{
                            responsive: true
                        }}
                    />
                </CardBody>
            </Card>

            <table 
                id='tabelDPR' 
                className='display nowrap'
                ref={tableRef} 
            >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Wilayah</th>
                        <th>PKB</th>
                        <th>Gerindra</th>
                        <th>PDIP</th>
                        <th>NasDem</th>
                        <th>Garuda</th>
                        <th>Berkarya</th>
                        <th>PKS</th>
                        <th>Perindo</th>
                        <th>PPP</th>
                        <th>PSI</th>
                        <th>PAN</th>
                        <th>Hanura</th>
                        <th>Demokrat</th>
                        <th>PBB</th>
                        <th>PKPI</th>
                    </tr>
                </thead>
                <tbody />
            </table>
        </Flex>
    )
}

export default DPR