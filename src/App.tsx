import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Link,
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
              Azar Stark
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
            <Box textAlign="center" alignItems={'flex-start'}>
              <Heading as="h2" size="3xl" marginTop={'8rem'}>
                Contact Me
              </Heading>
              <Text fontSize="x-large" fontWeight={'bold'} marginTop={'3rem'}>
                {' '}
                Mohamed Azarudeen{' '}
              </Text>
              <Text fontSize="sm" marginBottom={'2rem'}>
                {' '}
                G R A P H I C D E S I G N E R{' '}
              </Text>
              <Link href="mailto:azar@gmail.com">
                E-mail: azar@gmail.com
              </Link>
              <br></br>
              <Link href="mailto:+918754277208" paddingBottom={"16rem"}>
                Phone: +91 87542 77208
              </Link>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
