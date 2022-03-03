import { ElementType } from 'react';
import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

type TNavLinkProps = ChakraLinkProps & {
  name: string;
  icon: ElementType; // Quando passa apenas o nome do componente.
};

export function NavLink({ icon, name, ...props }: TNavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize={20} />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </Link>
  );
}
