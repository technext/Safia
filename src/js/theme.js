import { docReady } from './utils';
import navbarInit from './bootstrap-navbar';
import detectorInit from './detector';
import swiperInit from './swiper';
import navbarDarkenOnScroll from './navbar-darken-on-scroll'


// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(navbarInit);
docReady(detectorInit);
docReady(swiperInit);
docReady(navbarDarkenOnScroll);
