# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
jQuery ->
  $('.best_in_place').best_in_place()


  $('#humano').click(() ->
    $('.insurance_input').val('humano');
    $('#insurance_submit').trigger('click');
  )
  $('#cenasa').click(() ->
    $('.insurance_input').val('cenasa');
    $('#insurance_submit').trigger('click');
  )
  $('#Naseguro').click(() ->
    $('.insurance_input').val('Nasegurado');
    $('#insurance_submit').trigger('click');
  )
