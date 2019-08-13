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


//= require jquery
//= require jquery3
//= require jquery_ujs
//= require jquery-ui
//= require best_in_place
//= require best_in_place.jquery-ui
//= require activestorage
//= require_tree .


/// alert desapear funtion
$(function() {
  setTimeout(function () {
    $('#alert').fadeOut(500);
  }, 1000);
});



// After reloar page open de modal
function reloadP() {
  location.reload();
  location.reload();

  localStorage.setItem("po", "momo");
}

$(window).on("load", function() {
if (localStorage.getItem("po") === "momo" ) {
  $('.boton_reclamaciones').trigger('click');
  localStorage.setItem("po", "lulu");
} else {

}

});




// best_in_place service modal

function service_modal() {
  $('#edit').modal('toggle');
};



// open edit modal
function edit_trigger(){
  setTimeout(function () {
        $('#edit_btn').trigger('click');
  }, 2000);
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
    $(' #view_info').hover(function () {
      $('#customer_info ').animate({height: "67%"},700);

        $('.customer_info ').addClass('class_auto_over');
    });

    $('aside, .left_section').hover(function () {
      $('#customer_info').animate({height: "220px"},700);
        $('.customer_info ').removeClass('class_auto_over');


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

function numAutorization() {
  $('#numAutorization').html('')
  $('#numAutorization').append($('#input_numAutorization').val());
};
$(function(){
 if ($('#input_numAutorization').val().length > 0) {
   $('#numAutorization').append($('#input_numAutorization').val());

 }

})



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

// guardar relclamacion
function imprimirGuardar_cenasa() {
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


}


/// print the relclamacion


function printerReclam(divID) {
//Get the HTML of div


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
