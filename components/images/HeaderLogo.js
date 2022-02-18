import {Image} from '@chakra-ui/react';

import { HStack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export function HeaderLogo(){

    return(
        <>
            <HStack sx = {{ position: "relative"}}>
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
                <MotionBox
                 animate = "up_down"
                 variants = {{
                     up_down:{
                         y: [-30, -15],
                         transition:{
                             delay: 0, duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0
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
            </HStack>
            
        </>
    );
}