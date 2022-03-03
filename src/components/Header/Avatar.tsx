import { Box, Flex, Text, Avatar as ChakraAvatar } from '@chakra-ui/react';

type TAvatarProps = {
  showProfileData?: boolean;
};

export function Avatar({ showProfileData = true }: TAvatarProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andres dos Santos</Text>
          <Text color="gray.300" fontSize="small">
            andres.dosantosbritoamaral@gmail.com
          </Text>
        </Box>
      )}

      <ChakraAvatar
        size="md"
        name="Andres Santos"
        src="https://github.com/AndresdoSantos.png"
      />
    </Flex>
  );
}
