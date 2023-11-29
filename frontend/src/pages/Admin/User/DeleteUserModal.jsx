import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from '../../../context/UserProvider';

const DeleteUserModal = ({ userId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { users, updateUserList } = useUserContext()

    const cancelRef = useRef()

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
      <>
        <Button colorScheme='red' onClick={onOpen}>
            <i class="ph-bold ph-trash"></i>
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete User
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={onSubmit} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default DeleteUserModal