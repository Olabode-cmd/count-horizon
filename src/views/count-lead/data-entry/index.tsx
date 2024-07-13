import { Box, Text, Flex, Input, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../components/card/Card";
import { useHistory } from "react-router-dom";

export default function CountDataEntry() {
    const history = useHistory();

    const handleClick = () => {
      history.push("/count-lead/reconciliation");
    };
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Text>Count Lead Test Dashboard</Text>

      <Card mt="3">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Data Entry
            </Text>
          </Box>

          <button className="btn btn-green">Use Barcode</button>
        </Flex>

        <SimpleGrid columns={2} spacing={3} mt="3">
          <Box>
            <Text>Product ID</Text>
            <Input />
          </Box>
          <Box>
            <Text>Batch Number</Text>
            <Input />
          </Box>
          <Box>
            <Text>Logistic Area</Text>
            <Input />
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
