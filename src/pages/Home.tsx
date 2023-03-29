import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import LazyLoad from 'react-lazy-load';
import {
  Flex,
  Box,
  Text,
  Container,
  Image,
  Heading,
  useColorModeValue,
  useColorMode,
  Link,
  Icon,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

import { MainHead } from '../components/Head';
import iconBook from '../assets/imgBook.svg';
import iconBookReading from '../assets/iconBookReading.svg';
import patternBlack from '../assets/patternpadBlack.svg';
import patternWhite from '../assets/patternpadWhite.svg';

export function Home() {
  const { colorMode } = useColorMode();
  const bgButton = useColorModeValue('#2de000', '#24b300');
  const bContainer = useColorModeValue('gray.50', 'none');
  const height = useBreakpointValue({
    base: '163px',
    sm: '311px',
    md: '268px',
  });

  return (
    <>
      <MainHead
        title='XBuniverse'
        description='Comparte tus libros favoritos con la comunidad.'
        urlImage='https://xbu.netlify.app/ogImage.png'
      />
      <Container
        maxW='9xl'
        p='0'
        bg={bContainer}
        backgroundSize='cover'
        backgroundPosition='center center'
        backgroundImage={colorMode === 'dark' ? patternBlack : patternWhite}
        backgroundAttachment='fixed'
      >
        <Box py={{ base: 10, md: '20vh' }} pt={{ base: 24, lg: 28 }}>
          <Box
            textAlign='center'
            as='h1'
            fontSize={{ base: '3.35rem', md: '9xl' }}
            bgGradient='linear-gradient(to-l, #2de000, #e9f501)'
            bgClip='text'
          >
            XBuniverse
          </Box>
          <Box maxW='2xl' m='auto'>
            <Box
              color='#1f9c00'
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight='bold'
              my='3'
              textAlign={{ base: 'center', md: 'left' }}
            >
              ¡Explora!
            </Box>
            <Text
              px={{ base: 5, md: 0 }}
              fontSize='lg'
              textAlign={{ base: 'center', md: 'left' }}
            >
              Comparte tus libros favoritos con la comunidad.
            </Text>
            <Flex
              mt='14'
              textAlign='center'
              direction={{ base: 'column', md: 'row' }}
              align='center'
            >
              <Link
                w={{ base: '250px', md: '200px' }}
                to='/register'
                as={NavLink}
                border='1px'
                bg={bgButton}
                color='black'
                borderRadius='lg'
                p='3'
                fontSize='xl'
                _hover={{
                  outline: 'none',
                  bg: '#28c900',
                }}
              >
                Regístrate
              </Link>
              <Link
                w={{ base: '250px', md: '200px' }}
                to='/explore'
                as={NavLink}
                border='1px'
                borderColor='black'
                bg={bgButton}
                color='black'
                borderRadius='lg'
                mt={{ base: 5, md: 0 }}
                p='3'
                ml={{ base: 0, md: 5 }}
                fontSize='xl'
                _hover={{
                  outline: 'none',
                  bg: '#28c900',
                }}
              >
                <Flex align='center' justify='center'>
                  Explorar
                  <Icon as={FiArrowRight} ml='2' />
                </Flex>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Container>
      <Flex
        w='full'
        justify='center'
        align='flex-start'
        maxWidth='5xl'
        m='auto'
        pt='28'
        px='10'
        direction={{ base: 'column', md: 'row' }}
      >
        <LazyLoad height={height} offset={0}>
          <Image src={iconBook} w='500px' alt='' decoding='async' />
        </LazyLoad>
        <Stack direction='column' ml={{ base: 0, md: 3 }} spacing='4'>
          <Heading
            mb='10'
            mt={{ base: 14, md: 0 }}
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontFamily='Poppins, sans-serif'
          >
            ¿Qué es XBuniverse?
          </Heading>
          <Text fontSize='lg'>
            Es un sitio donde cualquiera puede compartir sus libros favoritos!
          </Text>
          <Text fontSize='lg'>
            ¡Crea una cuenta y empieza a compartir y explorar!
          </Text>
          <Text fontSize='lg'>Es muy facil de usar!</Text>
        </Stack>
      </Flex>
      <Flex
        w='full'
        justify='center'
        align='flex-start'
        maxWidth='5xl'
        m='auto'
        py={{ base: 10, md: 28 }}
        px='10'
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack
          direction='column'
          ml={{ base: 0, md: 3 }}
          mr={{ base: 0, md: 7 }}
          mb='3'
        >
          <Heading
            mb='10'
            mt={{ base: 10, md: 0 }}
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontFamily='Poppins, sans-serif'
          >
            Explora cientos de libros
          </Heading>
          <Text fontSize='lg' mb={{ base: 14, md: 0 }}>
            Descubre que leer en tu proximo viaje o tiempo libre.
          </Text>
        </Stack>
        <LazyLoad offset={0}>
          <Image src={iconBookReading} w='500px' alt='' decoding='async' />
        </LazyLoad>
      </Flex>
    </>
  );
}
