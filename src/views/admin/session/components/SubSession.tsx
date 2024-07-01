import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, SimpleGrid, Flex, Select, Input } from "@chakra-ui/react";

const SubSession = () => {

  return (
    <Box p="4">
      <SimpleGrid spacing={3} columns={2} mb="3">
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

        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />

        <Select placeholder="Product type">
          <option value="option1">Raw materials</option>
          <option value="option2">Finished goods</option>
        </Select>
      </SimpleGrid>

      <hr />
    </Box>
  );
};

export default SubSession;