import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import Card from "../../../components/card/Card";
import ReconTable from "./components/ReconTable";
import tableRecon from "./variables/tableRecon";

export default function Reconciliation() {
     const [showTable, setShowTable] = useState(false);

     const handleViewDataClick = () => {
       setShowTable(true);
     };
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card>
        <Text fontSize="xl" fontWeight="bold">
          Reconciliation
        </Text>

        <SimpleGrid columns={3} spacing={3} mt="3">
          <Select placeholder="Select Warehouse">
            <option value="option1">Ojo Major Stores</option>
            <option value="option2">Ikeja Stores</option>
            <option value="option3">Igando Warehouse Branch</option>
          </Select>

          <Select placeholder="Select product type">
            <option value="option1">Raw materials</option>
            <option value="option2">Finished goods</option>
          </Select>
        </SimpleGrid>

        <Box mt="3">
          <button className="btn btn-green" onClick={handleViewDataClick}>
            View Data
          </button>
        </Box>
      </Card>

      <Flex alignItems="center" justifyContent="center" mt="5">
        {!showTable && <Text>No data available</Text>}
      </Flex>

      <Box mt="3">{showTable && <ReconTable tableData={tableRecon} />}</Box>
    </Box>
  );
}
