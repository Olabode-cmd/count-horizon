import {
  Box,
  useColorModeValue,
  SimpleGrid,
  Text,
  Input,
  Select,
  Flex,
  Button,
} from "@chakra-ui/react";
import Card from '../../../components/card/Card'

export default function Report() {

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Card>
          <Text fontSize="lg" fontWeight="bold" mb="4">
            Report Generation Form
          </Text>

          <Text>Report type</Text>
          <Select mb="3">
            <option value="option1">Inventory Accuracy</option>
            <option value="option2">Variance Analysis</option>
            <option value="option3">Aging Analysis</option>
          </Select>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="3">
            <Box>
              <Text>From:</Text>
              <Input type="date" />
            </Box>

            <Box>
              <Text>To:</Text>
              <Input type="date" />
            </Box>
          </SimpleGrid>

          <Text>Warehouse</Text>
          <Select mb="2">
            <option value="option1">Pen Avenue Stores</option>
            <option value="option2">Raven Stores</option>
            <option value="option3">ICM</option>
          </Select>

          <Flex justifyContent='end'>
            <Button borderRadius='4px' colorScheme="blue">Generate</Button>
          </Flex>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
