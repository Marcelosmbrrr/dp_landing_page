import {Image} from '@chakra-ui/react';

export function PHPBook(){

    return(
        <Image 
        src="/images/png_jpeg/lp_ebook_capa_php.png" 
        alt="Livro PHP" 
        rounded={'lg'}
        height={230}
        width={282}
        objectFit={'cover'}
        />
    );
}