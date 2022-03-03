import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';

export function Automation() {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        AUTOMAÇÃO
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        <NavLink name="Formulários" icon={RiInputMethodLine} />
        <NavLink name="Automação" icon={RiGitMergeLine} />
      </Stack>
    </Box>
  );
}
