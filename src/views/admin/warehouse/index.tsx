import {
  Box,
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
} from "@chakra-ui/react";

import WarehouseTable from "./components/WarehouseTable";
import tableWarehouses from "./variables/tableWarehouses";

export default function Warehouse() {
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="end">
        <Button colorScheme="blue" borderRadius="0px" onClick={onOpen}>
          Add Warehouse
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Warehouse</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex>
                    <Button colorScheme="blue" borderRadius='4px'>Download Excel Template</Button>
                    <Button colorScheme="blue" borderRadius='4px' ml='5px'>Upload Data</Button>
                </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} borderRadius="0px">
                Add
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <Box mt="3">
        <WarehouseTable tableData={tableWarehouses} />
      </Box>
    </Box>
  );
}
