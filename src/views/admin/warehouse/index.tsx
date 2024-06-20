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
  Stack,
  VStack,
  Text,
  StackDivider,
} from "@chakra-ui/react";

import WarehouseTable from "./components/WarehouseTable";
import tableWarehouses from "./variables/tableWarehouses";

export default function Warehouse() {
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="end">
        <button className="btn btn-green" onClick={onOpen}>
          Add Warehouse
        </button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Warehouse</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb='2'>Download the excel template if you don't already have it, kindly fill in the appropriate cells and upload warehouse details.</Text>
              <Text mb='4'>Be sure to double-check warehouse details before uploading to avoid errors.</Text>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
              >
                <button className="btn btn-green">
                  Download Excel Template
                </button>
                <button className='btn btn-alt'>
                  Upload Data
                </button>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <button className="btn btn-green">Add</button>
              <button className='btn btn-ghost' onClick={onClose}>
                Close
              </button>
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
