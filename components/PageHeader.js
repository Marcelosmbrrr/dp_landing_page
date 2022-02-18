import Head from 'next/head';

import { HeaderLogo } from './images/HeaderLogo';
import { HeaderImage } from './images/HeaderImage';

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';

import { motion } from 'framer-motion'
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export function PageHeader() {

    return (
      <Container maxW={'7xl'} height={"92vh"}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 5 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <HeaderLogo />
            </Heading>
            <Text color={'gray.500'}>
              Quer aprender a programar o mais rápido possível para ingressar em uma das profissões
              mais bem valorizadas atualmente? 
            </Text>
            <Text color={'gray.500'}>
              Esse livro oferece os fundamentos para lidar com qualquer linguagem de programação
              em <Text as={'span'} color={'red.400'} fontWeight={600}>MENOS DE 20 PÁGINAS!</Text>
            </Text>
            <Stack
              spacing={{ base: 6, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <MotionButton
                rounded={'full'}
                size={'lg'}
                w={"full"}
                fontWeight={'normal'}
                px={12}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}
                animate="shake"
                variants={{
                  shake: {
                    rotate: [0, -10, 10, 0, -10, 10, 0],
                    transition: {
                      delay: 2, duration: 1, repeat: Infinity, repeatDelay: 5
                    }
                  }
                }}
                >
                QUERO COMPRAR!
              </MotionButton>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <MotionBox
              initial = "smaller" 
              animate="normal"
              variants={{
                smaller:{
                  scale: 0.2
                },
                normal: {
                  scale: 1,
                  rotate: [0, -10, 10, 0],
                  transition: {
                    delay: 0.3,
                  },
                },
              }}
              position={'relative'}
              height={'325px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <HeaderImage />
            </MotionBox>
          </Flex>
        </Stack>
      </Container>
    );

  }
  
export function Blob(props){

    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );

  }; 