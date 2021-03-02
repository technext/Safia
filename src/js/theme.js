import { docReady } from './utils';
import navbarInit from './bootstrap-navbar';
import detectorInit from './detector';
import swiper from './swiper';
import navbarDarkenOnScroll from './navbar-darken-on-scroll'


// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(navbarInit);
docReady(detectorInit);
docReady(swiper);
docReady(navbarDarkenOnScroll);
