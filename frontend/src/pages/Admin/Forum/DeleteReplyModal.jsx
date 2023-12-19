import { useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useReplyContext } from '../../../context/ForumProvider';
import DeleteModal from '../../../components/DeleteModal';

const DeleteReplyModal = ({ commentId, replyId, userId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const { reply, updateReplyList } = useReplyContext();

    const onSubmit = () =>
    {
      axios
        .delete(`${import.meta.env.VITE_URL}/comments/${commentId}/${replyId}`)
        .then(() => {
          toast.success('Delete reply berhasil');
          onClose();
          const updatedReply = axios.get(`${import.meta.env.VITE_URL}/replies-by-author/${userId}`);
          updateReplyList(updatedReply.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Delete reply gagal');
        })
    }

    return (
      <DeleteModal
        title={'Reply'}
        onSubmit={onSubmit}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        cancelRef={cancelRef}
      />
    )
}

export default DeleteReplyModal