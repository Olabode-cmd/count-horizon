import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Text,
  SimpleGrid,
  Flex,
  Select,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdWarehouse } from "react-icons/md";
import { useHistory } from "react-router-dom";

const SubSession = () => {
  const history = useHistory();
  const handleDataClick = () => {
    history.push("/session/data-entry");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex>
        <Button
          onClick={onOpen}
          size="sm"
          rightIcon={<MdWarehouse />}
          colorScheme="teal"
          variant="outline"
          borderRadius="0px"
        >
          Config Warehouse
        </Button>

        <Button
          size="sm"
          colorScheme="teal"
          variant="solid"
          borderRadius="0px"
          ml="2"
          onClick={handleDataClick}
        >
          Start data entry
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subsession Config</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid spacing={3} columns={2} mb="3">
              <Input placeholder="Subsession name" size="md" type="text" />
              <Select placeholder="Select Warehouse">
                <option value="option1">Ojo Major Stores</option>
                <option value="option2">Ikeja Stores</option>
                <option value="option3">Igando Warehouse Branch</option>
              </Select>

              <Select placeholder="Select Count Lead">
                <option value="option1">Mr John</option>
                <option value="option2">Jane Doe</option>
                <option value="option3">Emily Doe</option>
              </Select>

              <Input placeholder="Select Date" size="md" type="date" />

              <Select placeholder="Product type">
                <option value="option1">Raw materials</option>
                <option value="option2">Finished goods</option>
              </Select>

              <Select placeholder="Count parameter">
                <option value="option1">Material Number</option>
                <option value="option2">Description</option>
              </Select>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-green">Done</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SubSession;
