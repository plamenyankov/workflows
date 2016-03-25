var $, fill;

$ = require('jquery');

(fill = function(item) {
  console.log('hello');
  return $('.tagline').append("" + item);
})('The most creative minds in Art');

fill;
