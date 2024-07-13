import { Box, Text, useColorModeValue } from "@chakra-ui/react";
// Assets
// Custom components
import SessionTable from "./components/sessionTable";
import tableSession from "./variables/tableSessions";

export default function CountDashboard() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Text>Count Lead Test Dashboard</Text>

      <Box mt="3">
        <SessionTable tableData={tableSession} />
      </Box>
    </Box>
  );
}
