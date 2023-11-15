import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Plus Jakarta Sans',
  },
  styles: {
    global: {
      body: {
        bg: '#FCFCFC', // replace with the color you want
      },
    },
  },
});

export default theme;
