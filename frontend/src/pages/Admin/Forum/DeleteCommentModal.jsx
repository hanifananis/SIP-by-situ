import { useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useCommentContext } from '../../../context/ForumProvider';
import DeleteModal from '../../../components/DeleteModal';

const DeleteCommentModal = ({ commentId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const { comment, updateCommentList } = useCommentContext();

    const onSubmit = () =>
    {
      axios
        .delete(`${import.meta.env.VITE_URL}/comments/${commentId}`)
        .then(() => {
          toast.success('Delete comment berhasil');
          onClose();
          const updatedComment = axios.get(`${import.meta.env.VITE_URL}/comments`);
          updateCommentList(updatedComment.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Delete comment gagal');
        })
    }

    return (
      <DeleteModal
        title={'Comment'}
        onSubmit={onSubmit}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        cancelRef={cancelRef}
      />
    )
}

export default DeleteCommentModal