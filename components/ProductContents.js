import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';

import { QuestionIcon } from '@chakra-ui/icons';
  
// Replace test data with your own
const features = [
  {
    id: 1,
    title: 'Variáveis?',
    text: 'Imagine uma caixa que tem espaço para apenas uma coisa...',
  },
  {
    id: 2,
    title: 'Estruturas de dados?',
    text: 'Imagine uma caixa que tem divisões para guardar várias coisas...',
  },
  {
    id: 3,
    title: 'Condições?',
    text: 'Se X for igual a 2, faça isso, senão faça aquilo...',
  }
]

export function ProductContents() {


    return (
      <Box p={4} bg={"#333"} color={"white"} height={"92vh"}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'4xl'}>EM MENOS DE 20 PÁGINAS!?</Heading>
          <Text fontSize={'xl'}>
              Todas as linguagens de programação funcionam utilizando os mesmos fundamentos! Conhecendo eles, todas são fácilmente compreensíveis.
          </Text>
          <Text fontSize={'xl'}>
              "Fundamentos? Lá vem o blablabla computacional...", não! O propósito desse livro é preparar você para a prática pura com a melhor e mais intuitiva didática possível.
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'red.400'} px={2}>
                  <Icon as={QuestionIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  
