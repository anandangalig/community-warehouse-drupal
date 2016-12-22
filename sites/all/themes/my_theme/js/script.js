(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {
      if(document.getElementById('edit-cancel')){
        $('#already_registered').hide();
      }
    }
  };

})(jQuery, Drupal, this, this.document);
