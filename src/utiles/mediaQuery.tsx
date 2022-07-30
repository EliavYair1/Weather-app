import { pxToRem } from 'styled-media-query';
import { generateMedia } from 'styled-media-query';
const customMedia = generateMedia({
  desktop: '1920px',
  tablet: '1280px',
  mobile: '414px',
});

export const breakpointsInRem = pxToRem(
  {
    mobile: '414px',
    tablet: '1280px',
    desktop: '1920px',
  },
  10
);
export default customMedia;
