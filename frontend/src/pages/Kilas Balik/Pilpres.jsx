import { Card, CardBody, CardHeader, Flex, Heading } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import { useEffect, useRef, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const Pilpres = () => {
    const [data, setData] = useState([]);
    const tableRef = useRef(null);
  
    useEffect(() => {
      axios.get('http://localhost:5000/datapilpres2019')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error Fetching Data: ', error);
        });
    }, []);

    useEffect(() => {
        if($.fn.DataTable.isDataTable('#tabelPilpres')) {
            $(tableRef.current).DataTable().destroy();
        }

        $(tableRef.current).DataTable({
            data: data,
            columns: [
                { title: 'No', data: null, render: (data, type, row, meta)=> type === 'display' ? meta.row + 1 : meta.row },
                { title: 'Wilayah', data: 'Wilayah' },
                { title: 'No Urut 1', data: 'Capres_01' },
                { title: 'No Urut 2', data: 'Capres_02' },
            ]
        });
    }, [data])

    const sumUrutSatu = data.reduce((sum, entry) => sum + entry.Capres_01, 0);
    const sumUrutDua = data.reduce((sum, entry) => sum + entry.Capres_02, 0)

    const labels = ['No Urut 1', 'No Urut 2'];
    const chartData = {
        labels: labels,
        datasets: [{
            data: [sumUrutSatu, sumUrutDua],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
            ],
            borderWidth: 1
        }]
    };

    return (
        <Flex flexDirection={'column'} gap={6}>
            <Card rounded={'2xl'}>
                <CardHeader bg={'#540302'} color={'white'}>
                    <Heading textAlign={'center'}>Hasil Hitung Suara Pemilu Presiden dan Wakil Presiden RI 2019</Heading>
                </CardHeader>
                <CardBody
                    width={"50%"}
                    mx={'auto'}
                >
                    <Pie
                        key='chart-pie'
                        datasetIdKey='idPie'
                        data={chartData}
                        options={{
                            responsive: true
                        }}
                    />
                </CardBody>
            </Card>

            <table
                id='tabelPilpres'
                className='display'
                ref={tableRef}
                width={'100%'}
            >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Wilayah</th>
                        <th>Calon 1</th>
                        <th>Calon 2</th>
                    </tr>
                </thead>
                <tbody />
            </table>
        </Flex>
    )
}

export default Pilpres