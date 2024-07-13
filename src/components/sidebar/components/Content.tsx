// chakra imports
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';

// FUNCTIONS

function SidebarContent(props: { routes: RoutesType[] }) {
	const { routes } = props;
	// SIDEBAR
	return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <Brand />
      <Stack direction="column" mt="8px" mb="auto">
        <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
          <Text fontSize="sm" fontWeight="bold">
            STOCK COUNT
          </Text>
          <Links routes={routes} />

          <Text fontSize="sm" fontWeight="bold" mt="3">
            INBOUND
          </Text>

          <Text fontSize="sm" fontWeight="bold" mt="3">
            OUTBOUND
          </Text>

          <Text fontSize="sm" fontWeight="bold" mt="3">
            CUSTOMER DEMAND
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
