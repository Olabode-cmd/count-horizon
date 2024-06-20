import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import SessionTable from "./components/sessionTable"
import tableSession from "./variables/tableSessions";

export default function CountSession() {
  // Chakra Color Mode - 015e63
  //   const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="end">
        <button className="btn btn-green" onClick={onOpen}>
          Create Session
        </button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Count Session</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <Input placeholder="Session name" mb="4" />

              <Text mb='3' fontWeight='bold'>Count Session Period</Text>
              <Text>From:</Text>
              <Input type="date" mb="2" />

              <Text>To:</Text>
              <Input type="date" mb="4" />
            </ModalBody>

            <ModalFooter>
              <button className="btn btn-green">Create</button>
              <button className="btn btn-ghost" onClick={onClose}>
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <Box mt="3">
        <SessionTable tableData={tableSession} />
      </Box>
    </Box>
  );
}
