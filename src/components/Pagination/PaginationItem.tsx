import { Button } from '@chakra-ui/react';

type TPaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export function PaginationItem({
  number,
  isCurrent = false, // Sempre que uma prop é opcional devemos passar um valor padrão para ela
}: TPaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  );
}
