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
  return (
    <Box p="4">
      <ReconTable tableData={tableRecon} />
    </Box>
  );
}
