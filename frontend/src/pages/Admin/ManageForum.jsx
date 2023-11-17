import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import { Container } from '@chakra-ui/react';

const ManageForum = () => {
  useEffect(() => {
    const dataTable = new DataTable('#example');

    return () => {
      dataTable.destroy();
    };
  }, []);

  return (
    <Container maxW='container.xl' bgColor={'white'} py={6} px={8} rounded={'lg'}>
        <table id="example" className='display'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Topik</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quas eos quis laudantium, exercitationem minima sint doloribus, consectetur vel iusto commodi sit, nesciunt doloremque earum quisquam rem. Quod, corrupti dolorem?</td>
                    <td>Edit</td>
                </tr>
                <tr>
                <td>2</td>
                    <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, officiis! Voluptatibus vero ut sed, ab nam commodi temporibus repellendus, deleniti provident nemo eius aliquid accusamus explicabo sunt veniam assumenda veritatis?</td>
                    <td>Edit</td>
                </tr>
            </tbody>
        </table>
    </Container>
  );
};

export default ManageForum;