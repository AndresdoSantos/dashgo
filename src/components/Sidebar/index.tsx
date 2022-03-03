import { Box, Stack } from '@chakra-ui/react';

import { Automation } from './Automation';
import { General } from './General';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Automation />

        <General />
      </Stack>
    </Box>
  );
}
