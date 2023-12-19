import { Button, Card, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
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
        <ModalContent>
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