import { useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useForumContext } from '../../../context/ForumProvider';
import DeleteModal from '../../../components/DeleteModal';

const DeleteForumModal = ({ forumId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const { forum, updateForumList } = useForumContext();

    const onSubmit = () =>
    {
      axios
        .delete(`http://localhost:5000/forums/${forumId}`)
        .then(() => {
          toast.success('Delete forum berhasil');
          onClose();
          const updatedForum = axios.get('http://localhost:5000/forums');
          updateForumList(updatedForum.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Delete forum gagal');
        })
    }

    return (
      <DeleteModal
        title={'Forum'}
        onSubmit={onSubmit}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        cancelRef={cancelRef}
      />
    )
}

export default DeleteForumModal