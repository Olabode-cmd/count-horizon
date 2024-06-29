import { Box, Text, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
// Assets
// Custom components
import {
  MdAddTask,
  MdBarChart,
  MdSupervisedUserCircle,
  MdOutlineCardGiftcard,
} from "react-icons/md";

export default function CountDashboard() {
  // Chakra Color Mode - 015e63
  //   const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Text>Count Lead Test Dashboard</Text>
    </Box>
  );
}
