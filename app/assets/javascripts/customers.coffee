# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
jQuery ->
  $('.best_in_place').best_in_place()


  $('#humano').click(() ->
    $('.insurance_input').val('ARS Humano');
    $('#insurance_submit').trigger('click');
  )
  $('#cenasa').click(() ->
    $('.insurance_input').val('CENASA');
    $('#insurance_submit').trigger('click');
  )
  $('#Naseguro').click(() ->
    $('.insurance_input').val('Sin Seguro');
    $('#insurance_submit').trigger('click');
  )
