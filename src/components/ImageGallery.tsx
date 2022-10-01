import { GridItem, Center } from '@chakra-ui/react';
import { Box, Image } from '@chakra-ui/react';
import { designImages, ImageData } from '../data/images';

type ImageGalleryProps = {
  tag: string;
};

export const ImageGallery = (props: ImageGalleryProps) => {
  return (
    <Center>
      <Box
        sx={{ columnCount: [2, 3], columnGap: 4 }}
        w={{ xl: '60%', md: '80%' }}
        marginTop={4}
      >
        {designImages
          .filter((data: ImageData) => data.tags.includes(props.tag))
          .map((element, i) => {
            return (
              <GridItem marginBottom={4} key={i}>
                <Image borderRadius={5} src={element.image}></Image>
              </GridItem>
            );
          })}
      </Box>
    </Center>
  );
};
