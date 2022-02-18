import {Image} from '@chakra-ui/react';

export function MainBook(){

    return(
        <Image 
        src="/images/png_jpeg/lp_ebook_capa.png" 
        alt="Livro Lógica de Programação" 
        rounded={'lg'}
        height={230}
        width={282}
        objectFit={'cover'}
        />
    );
}