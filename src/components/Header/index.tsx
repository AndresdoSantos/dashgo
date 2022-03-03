import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Avatar } from './Avatar';
import { Logo } from './Logo';
import { Notifications } from './Notifications';
import { Search } from './Search';

export function Header() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />

        <Avatar showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
