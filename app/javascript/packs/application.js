// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// eslint-disable-next-line no-undef
require("@rails/ujs").start()
// eslint-disable-next-line no-undef
require("turbolinks").start()
// eslint-disable-next-line no-undef
require("@rails/activestorage").start()
// eslint-disable-next-line no-undef
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import { tchatbox } from './tchatbox/index';

document.addEventListener('turbolinks:load', () => {
  if (document.querySelector('#tchatbox')) {
    tchatbox();
  }
});
