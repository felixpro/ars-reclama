// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

//= require rails-ujs
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require jquery.purr
//= require best_in_place.purr

//= require best_in_place
//= require best_in_place.jquery-ui
//= require activestorage
//= require_tree .


$(document).ready(function() {
  jQuery(".best_in_place").best_in_place();
});



// open edit modal
function edit_trigger(){
  setTimeout(function () {
    // trigger the btn when the windows is loaded
    window.onload = momo();
  }, 1000);
}

function momo() {
  $('#edit_btn').trigger('click');
  }


// Update the inputs
function myFunction() {
  $('#actualizar').html('')
  $('#actualizar').append($('#authNum').val());
}

function diagnosticFuntion() {
  $('#input_diagnostic').html('')
  $('#input_diagnostic').append($('#diagnostic_text').val());
}

function dateFuntion() {
  $('.dateUpdate').html('')
  $('.dateUpdate').append($('#dateInput').val());
}




//// Print section
function printerDiv(divID) {
//Get the HTML of div

setTimeout(function () {
  var divElements = document.getElementById(divID).innerHTML;

  //Get the HTML of whole page
  var oldPage = document.body.innerHTML;
  //Reset the pages HTML with divs HTML only
       document.body.innerHTML =

       "<html ><head><title></title></head><body>" +
       divElements + "</body>";


  //Print Page
  window.print();
  //Restore orignal HTML
  document.body.innerHTML = oldPage;
location.reload();

}, 500);

}




function printerCenasa(divID) {
//Get the HTML of div

setTimeout(function () {

  var cenasaContent = document.getElementById(divID).innerHTML;

  //Get the HTML of whole page
  var oldPage = document.body.innerHTML;
  //Reset the pages HTML with divs HTML only
       document.body.innerHTML =

       "<html ><head><title></title></head><body>" +
       cenasaContent + "</body>";


  //Print Page
  window.print();
  //Restore orignal HTML
  document.body.innerHTML = oldPage;
  location.reload();

}, 500);

}
