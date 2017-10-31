// Automatically inject livereload code on a .dev domain
import $ from 'jquery';
var host = location.host.split('.');
var tld = host[host.length - 1];
if (tld == 'dev') {
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}

// Site specific imports
import './partials/jquery-global.js';
import gallerySlide from './partials/slider.js';
import openNav from './partials/nav.js';
// import initNav from './partials/navigation.js';

// Invoke imported funtions inside this IIFE
(function() {
  // initNav();
  openNav();
  gallerySlide();
})();
