import { Box, Stack, Text } from '@chakra-ui/react';
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri';
import { NavLink } from './NavLink';

export function General() {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        Geral
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        <NavLink name="Dashboard" icon={RiDashboardLine} />
        <NavLink name="Usuários" icon={RiContactsLine} />
      </Stack>
    </Box>
  );
}
