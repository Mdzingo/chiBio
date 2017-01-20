/*
 * mdzingo.github.io
 * https://github.com/Mdzingo/mdzingo.github.io
 *
 * Copyright (c) 2017 Morgan Monzingo
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.mdzingo_github_io = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.mdzingo_github_io = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.mdzingo_github_io.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.mdzingo_github_io.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].mdzingo_github_io = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
