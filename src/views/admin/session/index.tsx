import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Select,
} from "@chakra-ui/react";
import UpcomingSessionTable from "./components/UpcomingSessionTable";
import tableUpcomingSession from "./variables/tableUpcomingSessions";

export default function CountSession() {
  // Chakra Color Mode - 015e63
  //   const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="end">
        <Button colorScheme="blue" borderRadius="0px" onClick={onOpen}>
          Create Session
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Count Session</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <Input placeholder="Session name" mb="2" />
              <Input type="date" mb="2" />
              <Select placeholder="Select count lead" mb="2">
                <option value="option1">John Doe</option>
                <option value="option2">Mary Doe</option>
                <option value="option3">Matt Doe</option>
              </Select>

              <Select placeholder="Select warehouse">
                <option value="option1">Raven Avenue</option>
                <option value="option2">Pen Avenue</option>
                <option value="option3">Open Stores</option>
              </Select>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} borderRadius="0px">
                Create
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <Box mt="3">
        <UpcomingSessionTable tableData={tableUpcomingSession} />
      </Box>
    </Box>
  );
}
