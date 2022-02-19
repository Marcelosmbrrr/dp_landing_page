import { ReactNode } from 'react';

import { MainBook } from './images/MainBook';
import { PHPBook } from './images/PHPBook';
import { JSBook } from './images/JSBook';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';

import {ItemCard} from './ItemCard';

function PriceWrapper({ children }) {
    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}>
        {children}
      </Box>
    );
}

const cardValues = {
  main: {
    title: 'Lógica de Programação',
    subtitle: 'EBOOK',
    price: 'R$19.99',
    oldprice: '',
    image: <MainBook />
  },
  php: {
    title: 'Lógica de Programação com PHP',
    subtitle: 'EBOOK',
    price: 'R$0.00',
    oldprice: 'R$19.99',
    image: <PHPBook />
  },
  js:{
    title: 'Lógica de Programação com JS',
    subtitle: 'EBOOK',
    price: 'R$0.00',
    oldprice: 'R$19.99',
    image: <JSBook />
  }
}

export function ProductItems() {

    return (
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            PAGUE POR 1 E LEVE OUTROS 2!
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            {/* texto */}
          </Text>
        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}>
          <PriceWrapper>
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-16px"
                  left="50%"
                  style={{ transform: 'translate(-50%)' }}
                  width={"max-content"}
                  >
                  <Text
                    textTransform="uppercase"
                    bg={useColorModeValue('red.300', 'red.700')}
                    px={3}
                    py={1}
                    color={useColorModeValue('gray.900', 'gray.300')}
                    fontSize="sm"
                    fontWeight="500"
                    rounded="xl">
                    GRÁTIS
                  </Text>
                </Box>
              </Box>
            <Box py={4} px={12}>
              <ItemCard {...cardValues.php} />
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}
                width={"max-content"}
                >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue('red.300', 'red.700')}
                  px={3}
                  py={1}
                  color={useColorModeValue('gray.900', 'gray.300')}
                  fontSize="sm"
                  fontWeight="500"
                  rounded="xl">
                  IRÁ PAGAR APENAS POR ESSE!
                </Text>
              </Box>
              <Box py={4} px={12}>
                <ItemCard {...cardValues.main}/>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <Box w="80%" pt={2}>
                  <Button w="full" colorScheme="red" p={6}>
                    COMPRAR!    
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-16px"
                  left="50%"
                  style={{ transform: 'translate(-50%)' }}
                  width={"max-content"}
                  >
                  <Text
                    textTransform="uppercase"
                    bg={useColorModeValue('red.300', 'red.700')}
                    px={3}
                    py={1}
                    color={useColorModeValue('gray.900', 'gray.300')}
                    fontSize="sm"
                    fontWeight="500"
                    rounded="xl">
                    GRÁTIS
                  </Text>
                </Box>
              </Box>
            <Box py={4} px={12}>
              <ItemCard {...cardValues.js} />
            </Box>
          </PriceWrapper>
        </Stack>
      </Box>
    );
  }