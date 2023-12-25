import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import GreenButton from '../components/GreenButton'
import { EditUsername } from './EditUsername'
import ChangePassword from './ChangePassword'

const EditProfileModal = ({ userId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <GreenButton title={'Edit Profile'} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={{base: 4, md: 0}}>
          <ModalCloseButton />
          <ModalBody py={12}>
            <EditUsername userId={userId} />
            <ChangePassword />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditProfileModal