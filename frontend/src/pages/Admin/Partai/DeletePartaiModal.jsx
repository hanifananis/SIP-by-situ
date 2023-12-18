import { useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePartaiContext } from '../../../context/PartaiProvider';
import DeleteModal from '../../../components/DeleteModal';

const DeletePartaiModal = ({ partaiId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const { partai, updatePartaiList } = usePartaiContext();

    const onSubmit = () => 
    {
      axios
        .delete(`http://localhost:5000/partaiInfos/${partaiId}`)
        .then(() => {
          toast.success('Delete partai berhasil');
          onClose();
          const updatedPartai = axios.get('http://localhost:5000/partaiInfos');
          updatePartaiList(updatedPartai.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Delete partai gagal');
        });
    };

    return (
      <DeleteModal
        title={'Partai'}
        onSubmit={onSubmit}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        cancelRef={cancelRef}
      />
    );
}

export default DeletePartaiModal;
