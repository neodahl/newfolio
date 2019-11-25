'use strict';


(function(){
  /* Input Only Number */
  function onlyNum(){
    $(this).val( $(this).val().replace(/\D/g,''));
  }
  $('.onlyNum').on('input', onlyNum);

})();
