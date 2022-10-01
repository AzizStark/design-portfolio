import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config: themeConfig,
  fonts: {
    body: 'Open Sans',
    heading: 'Mrs Saint Delafield',
    text: 'Open Sans',
  },
  //   semanticTokens: {
  //     colors: {
  //       error: 'red.500',
  //       success: 'green.500',
  //       primary: {
  //         default: 'red.500',
  //         _dark: 'red.400',
  //       },
  //       secondary: {
  //         default: 'red.800',
  //         _dark: 'red.700',
  //       },
  //     },}
  styles: {
    global: (props: any) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? 'linear-gradient(to right, #141e30, #243b55)' : 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);',
        color: props.colorMode === 'dark' ? 'white' : 'black',
        lineHeight: 'tall',
      },
    }),
  },
});
