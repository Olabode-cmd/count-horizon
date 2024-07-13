import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Input,
  Select,
  ModalBody,
  ModalFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Card from "../../../../components/card/Card";
import { CloseIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import SubSession from "./SubSession";

const SessionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isOpen: isOpenEditModal, onOpen: onOpenEditModal, onClose: onCloseEditModal } = useDisclosure();
  const {isOpen: isOpenConfigModal, onOpen: onOpenConfigModal, onClose: onCloseConfigModal} = useDisclosure();

  const history = useHistory();

  const handleClick = () => {
    history.push("/admin/reconciliation");
  };

  const sessionData = {
    id,
    name: `Session ${id}`,
    date: "2024-06-24",
    status: "Upcoming",
  };

  const [sessions, setSessions] = useState<number[]>([0]);

  const addSession = () => {
    setSessions([...sessions, sessions.length]);
  };

  const removeSession = (index: number) => {
    setSessions(sessions.filter((_, i) => i !== index));
  };

  const downloadTemplate = (templateName: string) => {
    const templates: { [key: string]: string } = {
      productList: "/ProductList.xlsx",
      stockPosition: "/StockPosition.xlsx",
      batchDetails: "/BatchDetails.xlsx",
    };

    const link = document.createElement("a");
    link.href = templates[templateName];
    link.download = templates[templateName];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box p="4">
      <Card>
        <Text fontSize="2xl" fontWeight="bold">
          {sessionData.name}
        </Text>
        <Flex alignItems="center">
          <Text>Session Start Date: {sessionData.date}</Text>
          <Text pl="2">Status: {sessionData.status}</Text>
        </Flex>

        <Box mt="3">
          <button className="btn btn-green" onClick={onOpenConfigModal}>
            View Config Data
          </button>
        </Box>
      </Card>

      <Card mt="4">
        <Flex alignItems="center" mt="5">
          <Text fontSize="xl" fontWeight="bold">
            Subsessions -
          </Text>
          <button className="btn btn-green ml-2" onClick={addSession}>
            Add warehouse column
          </button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {sessions.map((_, index) => (
            <Box>
              <Flex
                key={index}
                position="relative"
                mt="4"
                mb="3"
                alignItems="center"
              >
                <Text mr="3">Warehouse session {index + 1}:</Text>
                <SubSession />
                {index > 0 && (
                  <IconButton
                    aria-label="Remove session"
                    icon={<CloseIcon />}
                    size="sm"
                    position="absolute"
                    top="0"
                    right="0"
                    onClick={() => removeSession(index)}
                  />
                )}
              </Flex>

              <hr />
            </Box>
          ))}
        </SimpleGrid>

        <Flex mt="3">
          <button className="btn btn-alt" onClick={onOpenEditModal}>
            Edit Subsessions
          </button>
          <button className="btn btn-green ml-2">Update</button>
        </Flex>
      </Card>

      <Modal isOpen={isOpenEditModal} onClose={onCloseEditModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Subsessions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize="xl" fontWeight="bold">
                          Warehouse 1:
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <SimpleGrid columns={2} spacing={3} mb="3">
                        <Box>
                          <Text mt="2" mb="1">
                            Warehouse
                          </Text>
                          <Select>
                            <option value="option1" selected>
                              Ojo Major Stores
                            </option>
                            <option value="option2">Ikeja Stores</option>
                            <option value="option3">
                              Igando Warehouse Branch
                            </option>
                          </Select>
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Count Lead
                          </Text>
                          <Select>
                            <option value="option1">Mr John</option>
                            <option value="option2">Jane Doe</option>
                            <option value="option3" selected>
                              Emily Doe
                            </option>
                          </Select>
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Date
                          </Text>
                          <Input type="date" defaultValue="2024-06-24" />
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Product type
                          </Text>
                          <Select>
                            <option value="option1">Raw materials</option>
                            <option value="option2" selected>
                              Finished goods
                            </option>
                          </Select>
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Count Parameter
                          </Text>
                          <Select>
                            <option value="option1">Material Number</option>
                            <option value="option2" selected>
                              Description
                            </option>
                          </Select>
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize="xl" fontWeight="bold">
                          Warehouse 2:
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <SimpleGrid columns={2} spacing={3} mb="3">
                        <Box>
                          <Text mt="2" mb="1">
                            Warehouse
                          </Text>
                          <Select>
                            <option value="option1">Ojo Major Stores</option>
                            <option value="option2">Ikeja Stores</option>
                            <option value="option3" selected>
                              Igando Warehouse Branch
                            </option>
                          </Select>
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Count Lead
                          </Text>
                          <Select>
                            <option value="option1">Mr John</option>
                            <option value="option2" selected>
                              Jane Doe
                            </option>
                            <option value="option3">Emily Doe</option>
                          </Select>
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Date
                          </Text>
                          <Input type="date" defaultValue="2024-06-24" />
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Product type
                          </Text>
                          <Select>
                            <option value="option1">Raw materials</option>
                            <option value="option2" selected>
                              Finished goods
                            </option>
                          </Select>
                        </Box>

                        <Box>
                          <Text mt="2" mb="1">
                            Count Parameter
                          </Text>
                          <Select>
                            <option value="option1" selected>
                              Material Number
                            </option>
                            <option value="option2">Description</option>
                          </Select>
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-green">Update</button>
            <button className="btn btn-ghost" onClick={onCloseEditModal}>
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenConfigModal} onClose={onCloseConfigModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Config Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" direction="column">
              <Box>
                <button
                  className="btn btn-green"
                  onClick={() => downloadTemplate("productList")}
                >
                  View Product List table
                </button>
              </Box>

              <hr className="w-100 mb-2 mt-2" />

              <Box>
                <button
                  className="btn btn-green"
                  onClick={() => downloadTemplate("stockPosition")}
                >
                  View Stock Position table
                </button>
              </Box>

              <hr className="w-100 mb-2 mt-2" />

              <Box>
                <button
                  className="btn btn-green"
                  onClick={() => downloadTemplate("batchDetails")}
                >
                  View Batch Details table
                </button>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-ghost" onClick={onCloseConfigModal}>
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SessionDetails;
