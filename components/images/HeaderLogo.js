import {Image} from '@chakra-ui/react';

import { HStack, VStack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export function HeaderLogo(){

    return(
        <>
            <HStack sx = {{ position: "relative"}}>
                {/* LADO ESQUERDO */}
                <MotionBox
                >
                    <Image 
                        src="/images/png_jpeg/title_black.png" 
                        alt="Header Title" 
                        rounded={'lg'}
                        objectFit={'cover'}
                        width={"min-content"}
                    />
                </MotionBox>
                <MotionBox>
                    {/* LADO DIREITO */}
                    <VStack>
                        {/* PARTE DE CIMA DO LADO DIREITO - MÃO */}
                        <MotionBox 
                         animate = "up_down"
                         variants = {{
                             up_down:{
                                 y: [-20, 5],
                                 transition:{
                                     delay: 0, duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0
                                 }
                             }
                         }}
                        >
                            <Image 
                            src="/images/png_jpeg/hand_black.png" 
                            alt="Title Hand" 
                            rounded={'lg'}
                            objectFit={'cover'}
                            translateX = "-5"
                            />
                        </MotionBox>

                        {/* PARTE DE BAIXO DO LADO DIREITO - PONTO VERMELHO */}
                        <MotionBox>
                            <Image 
                            src="/images/png_jpeg/red_dot.png" 
                            alt="Title Hand" 
                            rounded={'lg'}
                            objectFit={'cover'}
                            translateX = "-5"
                            />
                        </MotionBox>
                    </VStack>
                </MotionBox> 
            </HStack>
            
        </>
    );
}