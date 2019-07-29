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




// open edit modal
// open edit modal
function edit_trigger(){
  setTimeout(function () {
        $('#edit_btn').trigger('click');

  }, 1000);
};

function reloadTimer() {

  setTimeout(function () {
    location.reload();

  }, 500);
}



// best_in_place

$(function(){

    jQuery(".best_in_place").best_in_place();

    // view more slideDown
    $('#customer_info, #view_info').hover(function () {
      $('#customer_info ').animate({height: "560px"});

    }, function() {
      $('#customer_info').animate({height: "220px"});
    })

  });





// Update the inputs
function myFunction() {
  $('#actualizar').html('')
  $('#actualizar').append($('#authNum').val());
};

function diagnosticFuntion() {
  $('#input_diagnostic').html('')
  $('#input_diagnostic').append($('#diagnostic_text').val());
};

function dateFuntion() {
  $('.dateUpdate').html('')
  $('.dateUpdate').append($('#dateInput').val());
};


// update input historial_link

function padecimiento() {
  $('#padecimiento').html('')
  $('#padecimiento').append($('#input_padecimiento').val());
};

function antecedentes() {
  $('#antecedentes').html('');
  var texto = $('#input_antecedentes' ).val();
  $('#antecedentes').append(texto)
};

function status() {
  $('#status').html('')
  $('#status').append($('#input_status').val());
};

function familiares() {
  $('#familiares').html('')
  $('#familiares').append($('#input_familiares').val());
};

function examen() {
  $('#examen').html('')
  $('#examen').append($('#input_examen').val());
};

function anexo() {
  $('#anexo').html('')
  $('#anexo').append($('#input_anexo').val());
};

function unificada() {
  $('#unificada').html('')
  $('#unificada').append($('#input_unificada').val());
};

function autorizar() {
  $('#autorizar').html('')
  $('#autorizar').append($('#input_autorizar').val());
};



// save historial
function guardarHistorial() {
  $('#historial_btn').trigger('click');
  setTimeout(function () {
    location.reload();

  }, 500);
}

function imprimirGuardar() {
  $('#historial_btn').trigger('click');
}






// Print section
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



function printerHistorial(divID) {
//Get the HTML of div

setTimeout(function () {

  var historial = document.getElementById(divID).innerHTML;

  //Get the HTML of whole page
  var oldPage = document.body.innerHTML;
  //Reset the pages HTML with divs HTML only
       document.body.innerHTML =

       "<html ><head><title></title></head><body>" +
       historial + "</body>";


  //Print Page
  window.print();
  //Restore orignal HTML
  document.body.innerHTML = oldPage;

}, 500);
}
