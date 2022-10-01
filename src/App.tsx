import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './themes/theme';
import { CustomTab } from './fragments/tab';
import { ImageGallery } from './components/ImageGallery';
import { ImageTags } from './data/images';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" h="100vh">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading as="h2" size="3xl">
              Aziz Stark
            </Heading>
            <Text fontSize="sm">
              D E S I G N <Text as="span" marginLeft={2} /> P O R T F O L I O
            </Text>
            <Tabs variant="unstyled" width="100%">
              <TabList alignItems="center" justifyContent="center">
                {(Object.values(ImageTags) as Array<ImageTags>)
                  .filter(value => isNaN(Number(value)) === true)
                  .map((tag, i) => {
                    return <CustomTab key={i}> {tag} </CustomTab>;
                  })}
              </TabList>
              <TabPanels>
                {(Object.values(ImageTags) as Array<ImageTags>)
                  .filter(value => isNaN(Number(value)) === true)
                  .map((tag, i) => {
                    return (
                      <TabPanel padding={1}>
                        <ImageGallery tag={tag} />
                      </TabPanel>
                    );
                  })}
              </TabPanels>
            </Tabs>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
