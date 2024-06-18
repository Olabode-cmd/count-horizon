// Chakra imports
import { Flex, useColorModeValue, Image } from '@chakra-ui/react';
import logo from "assets/img/logo-green.png";
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	return (
		<Flex alignItems='center' flexDirection='column'>
			<Image src={logo} w="175px" />
			<HSeparator mb='20px' mt='10px' />
		</Flex>
	);
}

export default SidebarBrand;
