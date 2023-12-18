import { useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from '../../../context/UserProvider';
import DeleteModal from '../../../components/DeleteModal';

const DeleteUserModal = ({ userId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const { users, updateUserList } = useUserContext()

    const onSubmit = () =>
    {
      axios
        .delete(`http://localhost:5000/users/${userId}`)
        .then(() => {
          toast.success('Delete user berhasil');
          onClose();
          const updatedUsers = axios.get('http://localhost:5000/users');
          updateUserList(updatedUsers.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Delete user gagal');
        })
    }

    return (
      <DeleteModal
        title={'User'}
        onSubmit={onSubmit}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        cancelRef={cancelRef}
      />
    )
}

export default DeleteUserModal