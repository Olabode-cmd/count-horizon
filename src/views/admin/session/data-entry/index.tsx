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
  SimpleGrid,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import Card from "../../../../components/card/Card";

type Description = {
  value: string;
  label: string;
};

export default function DataEntry() {
    const history = useHistory();

    const handleClick = () => {
      history.push("/admin/reconciliation");
    };

    const descriptions: Description[] = [
      { value: "description1", label: "Pain Reliever Tablets" },
      { value: "description2", label: "Energy Drink" },
      { value: "description3", label: "Antibiotic Syrup" },
      { value: "description4", label: "Snack Bars" },
      { value: "description5", label: "Vitamin C Supplements" },
    ];

    const [selectedDescriptions, setSelectedDescriptions] =
      useState<SingleValue<Description>>(null);

    const handleChange = (selectedOption: SingleValue<Description>) => {
      setSelectedDescriptions(selectedOption);
    };
  return (
    <Box p="4">
      <Card mt="3">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Data Entry
            </Text>
          </Box>

          <button className="btn btn-green">Use Barcode</button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} mt="3">
          <Box>
            <Text>Decription</Text>
            <Select
              options={descriptions}
              value={selectedDescriptions}
              onChange={handleChange}
              placeholder=""
            />
          </Box>
          <Box>
            <Text>Material Number</Text>
            <Input disabled />
          </Box>
          <Box>
            <Text>Unit of measurements</Text>
            <Input value="Pack" disabled />
          </Box>
          <Box>
            <Text>Pack size</Text>
            <Input value="3" disabled />
          </Box>
          <Box>
            <Text>Carton Size</Text>
            <Input value="22" />
          </Box>
          <Box>
            <Text>Batch number</Text>
            <Input value="FG-356788" disabled />
          </Box>
          <Box>
            <Text>Expiry Date</Text>
            <Input />
          </Box>
          <Box>
            <Text>Storage Location</Text>
            <Input />
          </Box>
          <Box>
            <Text>Carton Quantity</Text>
            <Input />
          </Box>
          <Box>
            <Text>Pack Quantity</Text>
            <Input />
          </Box>
          <Box>
            <Text>Total</Text>
            <Input value="30" disabled />
          </Box>
          <Box>
            <Text>Counter</Text>
            <Input value="John Doe" disabled />
          </Box>
          <Box>
            <Text>Count Lead</Text>
            <Input value="John Doe" disabled />
          </Box>
          <Box>
            <Text>Remark</Text>
            <Input />
          </Box>
          <Box>
            <Text>Timestamp</Text>
            <Input type="datetime-local" value="2024-04-04T10:30" disabled />
          </Box>
        </SimpleGrid>

        <Flex mt="3">
          <button className="btn btn-green">Enter</button>
          <button className="btn btn-green ml-2" onClick={handleClick}>
            Start Reconciliation
          </button>
        </Flex>
      </Card>
    </Box>
  );
}