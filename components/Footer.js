import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaFacebook } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {

    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
}

export function Footer(){

    return(
        <Box
            bg={useColorModeValue('#333', 'gray.900')}
            color={useColorModeValue('#fff', 'gray.200')}>
            <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>{new Date().getFullYear()} Direto ao Ponto. Todos os direitos reservados.</Text>
            <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Instagram'} href={'#'}>
                    <FaInstagram />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                    <FaFacebook />
                </SocialButton>
            </Stack>
            </Container>
        </Box>      
    )
}