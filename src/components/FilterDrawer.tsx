import React from 'react';
import {
  CheckboxGroup,
  Checkbox,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Flex,
  Box,
  Button,
} from '@chakra-ui/react';

import { PropsDrawer } from './types';

export function FilterDrawer({
  isOpen,
  onClose,
  languages,
  handleLanguageChange,
  language,
}: PropsDrawer) {
  const bgDrawer = useColorModeValue('#ffffffe0', '#121212e4');
  const bgContentCheckbox = useColorModeValue('white', 'gray.800');
  const bgButtonCancel = useColorModeValue('transparent', 'black');
  const bgButtonApply = useColorModeValue('#2de000', '#24b300');

  return (
    <>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} size='full'>
        <DrawerOverlay bg='#1212126e' />
        <DrawerContent bg={bgDrawer} backdropFilter='auto' backdropBlur='12px'>
          <DrawerHeader>Filtrar</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex px='2' direction='column'>
              <Box mb='4' borderBottom='1px'>
                Idioma
              </Box>
              <CheckboxGroup
                value={languages}
                onChange={handleLanguageChange}
                colorScheme='green'
              >
                <Flex
                  mx='3'
                  bg={bgContentCheckbox}
                  p='3'
                  rounded='lg'
                  direction='column-reverse'
                  gap='5'
                >
                  {language &&
                    language.map((language) => (
                      <Checkbox key={language} value={language}>
                        {language}
                      </Checkbox>
                    ))}
                </Flex>
              </CheckboxGroup>
            </Flex>
          </DrawerBody>
          <DrawerFooter justifyContent='center' borderTopWidth='1px'>
            <Flex mb='14' gap='5'>
              <Button
                onClick={onClose}
                bg={bgButtonCancel}
                border='1px'
                size='lg'
                fontWeight='light'
                borderColor='#28c900'
                _hover={{ color: 'white', bg: 'black' }}
              >
                Cancelar
              </Button>
              <Button
                onClick={onClose}
                bg={bgButtonApply}
                border='1px'
                size='lg'
                fontWeight='light'
                color='black'
                _hover={{ bg: '#28c900' }}
                _active={{ bg: '#28c900' }}
              >
                Aplicar
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
