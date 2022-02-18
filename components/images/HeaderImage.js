import {Image} from '@chakra-ui/react';

export function HeaderImage(){

    return(
        <Image 
        src="/images/png_jpeg/lp_ebook_capas.png" 
        alt="Ebooks do Pacote" 
        rounded={'lg'}
        objectFit={'cover'}
        />
    );
}