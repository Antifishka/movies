import { ColorRing } from 'react-loader-spinner';
import { Box } from 'components/Box/Box';

export const Loader = () => (
  <Box
    position="fixed"
    top={0} bottom={0} left={0} right={0}
    display="flex" justifyContent="center" alignItems="center"
    height="100%">
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['orangered', '#f47e60', '#f8b26a', '#f47e60', 'orangered']}
    />
  </Box>
);