import { Box, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// Assets
// Custom components
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {
  MdAddTask,
  MdBarChart,
  MdSupervisedUserCircle,
  MdOutlineCardGiftcard,
} from "react-icons/md";
import TotalSpent from 'views/admin/default/components/TotalSpent';
import tableRecentStock from 'views/admin/default/variables/tableRecentStock';
import RecentStockCountTable from './components/RecentStockCountTable';

export default function Dashboard() {
  // Chakra Color Mode - 015e63
//   const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdBarChart} color="#015e63" />}
            />
          }
          name="Total Warehouses"
          value="5"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdSupervisedUserCircle}
                  color="#015e63"
                />
              }
            />
          }
          name="Count Leads"
          value="13"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdOutlineCardGiftcard}
                  color="#015e63"
                />
              }
            />
          }
          name="Total Items"
          value="2935"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #015e63 0%, #015e63 100%)"
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="Active count sessions"
          value="14"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <TotalSpent />
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        {/* <CheckTable tableData={tableDataCheck} /> */}
        <RecentStockCountTable tableData={tableRecentStock} />
        {/* <PieCard /> */}
      </SimpleGrid>
    </Box>
  );
}
