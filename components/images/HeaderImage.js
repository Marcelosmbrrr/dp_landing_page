import { Image } from '@chakra-ui/react';

export function HeaderImage() {

    return (
        <Image
            src="/images/png_jpeg/lp_capa_transp.png"
            alt="Ebooks do Pacote"
            rounded={'lg'}
            objectFit={'cover'}
        />
    );
}