$ = require 'jquery'
do fill = (item = 'The most creative minds in Art') ->
  console.log('hello')
  $('.tagline').append "#{item}"
fill