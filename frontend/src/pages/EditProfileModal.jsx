import { Button, Card, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import RedInput from '../components/RedInput'
import GreenTransparentButton from '../components/GreenTransparentButton'
import GreenButton from '../components/GreenButton'

const EditProfileModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = (values) =>
  {
    axios
      .patch(`${import.meta.env.VITE_URL}/users/${userId}`, {
        name: values.name,
      })
      .then(() => {
        toast.success('Edit profile berhasil');
        onClose();
        const updatedUsers = axios.get(`${import.meta.env.VITE_URL}/users/`);
        updateUserList(updatedUsers.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Edit profile gagal');
      })
  }

  return (
    <>
      <GreenButton title={'Edit Profile'} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={12}>
            <Heading fontSize={'2xl'} fontWeight={'semibold'}>Ganti Username</Heading>
            <Card gap={4} p={8} mt={4}>
              <Text fontWeight={'semibold'}>Username Baru</Text>
              <RedInput val={'Masukkan Username'} />
              <GreenTransparentButton title={'Simpan'} onClick={''} />
            </Card>

            <Heading fontSize={'2xl'} fontWeight={'semibold'} mt={8}>Ganti Kata Sandi</Heading>
            <Card gap={4} p={8} mt={4}>
              <Text fontWeight={'semibold'}>Kata Sandi Baru</Text>
              <RedInput val={'Kata Sandi Baru'} />
              <Text fontWeight={'semibold'}>Konfirmasi Kata Sandi Baru</Text>
              <RedInput val={'Konfirmasi Kata Sandi Baru'} />
              <GreenTransparentButton title={'Simpan'} />
            </Card>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditProfileModal