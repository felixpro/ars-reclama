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
//= require jquery_ujs
//= require jquery-ui
//= require best_in_place
//= require best_in_place.jquery-ui
//= require activestorage

//= require jquery.mask

//= require_tree .

$.jMaskGlobals.watchDataMask = true;








/// alert desapear funtion
$(function() {
  setTimeout(function () {
    $('#alert').fadeOut(500);
  }, 1000);
});


$(function(){



   // check if the input has a insurance value

  if ($("#humano_terapias").val().length <= 0) {
    $("#humano_terapias").val(3);
    $("#print_therapies").html("")
    $("#print_therapies").append("3")
  }


  if ($('#multiple_insuranse').val() === "humano") {
    $(".primera_logo").hide();
    $(".humano_reclam_logo").show();

    $("#primera_btn").css(
      {"background":"none",
      "color":"#000",
      "border":"1px solid #000000"}
    );

    $("#humano_btn").css(
      {"background":"#00b2e3",
        "color":"#fff",
      "border":"none"}
    );


  } else if ($('#multiple_insuranse').val() === "primera") {
    $(".humano_reclam_logo").hide();
    $(".primera_logo").show();

    $("#humano_btn").css(
      {"background":"none",
      "color":"#000",
      "border":"1px solid #000000"}
    );

    $("#primera_btn").css(
      {"background":"#2d7bb7",
      "color":"#fff",
      "border":"none"}
    );

  } else if ($('#multiple_insuranse').val() === "") {
    $(".primera_logo").hide();
    $(".humano_reclam_logo").show();

    $('#multiple_insuranse').val("");
    $('#multiple_insuranse').val("humano");

    $("#primera_btn").css(
      {"background":"none",
      "color":"#000",
      "border":"1px solid #000000"}
    );

    $("#humano_btn").css(
      {"background":"#00b2e3",
        "color":"#fff",
      "border":"none"}
    );
  }


  });


function seguro_humano() {
  $('#multiple_insuranse').val("");
  $('#multiple_insuranse').val("humano");

  $(".primera_logo").hide();
  $(".humano_reclam_logo").show();

  $("#primera_btn").css(
    {"background":"none",
    "color":"#000",
    "border":"1px solid #000000"}
  );

  $("#humano_btn").css(
    {"background":"#00b2e3",
      "color":"#fff",
    "border":"none"}
  );

}

function seguro_primera() {
  $('#multiple_insuranse').val("");
  $('#multiple_insuranse').val("primera");

  $(".humano_reclam_logo").hide();
  $(".primera_logo").show();

  $("#humano_btn").css(
    {"background":"none",
    "color":"#000",
    "border":"1px solid #000000"}
  );

  $("#primera_btn").css(
    {"background":"#2d7bb7",
    "color":"#fff",
    "border":"none"}
  );

}


// After reloar page open de modal
function reloadP() {
  // it will call the funtion to update the atuth and diagnostic input
  localStorage.setItem("printer", "on");
  localStorage.setItem("numData", $('#authNum').val());
  localStorage.setItem("numData_humano", $('#authNum_humano').val());
  localStorage.setItem("diagnostic", $('#diagnostic_text').val());
  localStorage.setItem("diagnostic_humano", $('#diagnostic_text_humano').val());
  localStorage.setItem("therapieNum", $('#input_1_therapie').val());
  localStorage.setItem("therapieNum_humano", $('#humano_terapias').val());
  localStorage.setItem("multiple_insuranse", $('#multiple_insuranse').val());

  setTimeout(function () {
  location.reload(true);
    }, 1000);
  localStorage.setItem("po", "momo");
}

$(window).on("load", function() {

if (localStorage.getItem("po") === "momo" ) {
  $('.boton_reclamaciones').trigger('click');
  localStorage.setItem("po", "lulu");
} else {}
});




// best_in_place service modal

function service_modal() {
  $('#edit').modal('toggle');
};
function humano_modal() {
  $('#edit_modal_humano').modal('toggle');
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

  // add diagnostic to the print section when starting
  $('#input_diagnostic').html('')
  $('#input_diagnostic').append($('#diagnostic_text').val());

  $('#input_diagnostic_humano').html('')
  $('#input_diagnostic_humano').append($('#diagnostic_text_humano').val());

    jQuery(".best_in_place").best_in_place();

    // view more slideDown
    $(' #view_info').hover(function () {
      $('#customer_info ').animate({height: "60%"},700);
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

  $('#input_humano_auth').html('')
  $('#input_humano_auth').append($('#authNum_humano').val());

};

function textTerapias() {
  $('#print_therapies').html('')
  $('#print_therapies').append($('#humano_terapias').val());

};



function diagnosticFuntion() {
  $('#input_diagnostic').html('')
  $('#input_diagnostic').append($('#diagnostic_text').val());

  $('#input_diagnostic_humano').html('')
  $('#input_diagnostic_humano').append($('#diagnostic_text_humano').val());
};

function dateFuntion() {
  $('.dateUpdate').html('')
  $('.dateUpdate').append($('#dateInput').val());
};

function dateFuntion_1() {
  $('.dateUpdate').html('')
  $('.dateUpdate').append($('#dateInput_1').val());
};

function dateFuntion_2() {
  $('.dateUpdate').html('')
  $('.dateUpdate').append($('#dateInput_2').val());
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
localStorage.setItem("printer", "on");
localStorage.setItem("numData", $('#authNum').val());
localStorage.setItem("numData_humano", $('#authNum_humano').val());
localStorage.setItem("diagnostic", $('#diagnostic_text').val());
localStorage.setItem("diagnostic_humano", $('#diagnostic_text_humano').val());

localStorage.setItem("therapieNum", $('#input_1_therapie').val());
localStorage.setItem("therapieNum_humano", $('#humano_terapias').val());
localStorage.setItem("multiple_insuranse", $('#multiple_insuranse').val());



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


// After reloar page open de modal

$(window).on("load", function() {
if (localStorage.getItem("printer") === "on" ) {
  $('.boton_reclamaciones').trigger('click');
var dataAuth = localStorage.getItem("numData");
var dataAuth_humano = localStorage.getItem("numData_humano");
var dataDiagnostic = localStorage.getItem("diagnostic");
var dataDiagnostic_humano = localStorage.getItem("diagnostic_humano");

var dataTherapie = localStorage.getItem("therapieNum");
var dataTherapie_humano = localStorage.getItem("therapieNum_humano");

var multiple_insuranse = localStorage.getItem("multiple_insuranse");

// multiple_insuranse_humano
$('#multiple_insuranse').val(multiple_insuranse);



  if ($('#multiple_insuranse').val() === "humano") {
    $(".primera_logo").hide();
    $(".humano_reclam_logo").show();

    $("#primera_btn").css(
      {"background":"none",
      "color":"#000",
      "border":"1px solid #000000"}
    );

    $("#humano_btn").css(
      {"background":"#00b2e3",
        "color":"#fff",
      "border":"none"}
    );


  } else if ($('#multiple_insuranse').val() === "primera") {
    $(".humano_reclam_logo").hide();
    $(".primera_logo").show();

    $("#humano_btn").css(
      {"background":"none",
      "color":"#000",
      "border":"1px solid #000000"}
    );

    $("#primera_btn").css(
      {"background":"#2d7bb7",
      "color":"#fff",
      "border":"none"}
    );

  } else if ($('#multiple_insuranse').val() === "") {
    $(".primera_logo").hide();
    $(".humano_reclam_logo").show();

    $('#multiple_insuranse').val("");
    $('#multiple_insuranse').val("humano");

    $("#primera_btn").css(
      {"background":"none",
      "color":"#000",
      "border":"1px solid #000000"}
    );

    $("#humano_btn").css(
      {"background":"#00b2e3",
        "color":"#fff",
      "border":"none"}
    );
  }



  // Auth num
  $('#authNum').trigger('click');
  $('#authNum').val(dataAuth);
  $('#actualizar').append(dataAuth);
  // auth num humano
  $('#authNum_humano').val(dataAuth_humano);
  $('#input_humano_auth').append(dataAuth_humano);


  // therapie num
  $('#input_1_therapie').trigger('click');
  $('#input_1_therapie').val(dataTherapie);
  $('#humano_terapias').val(dataTherapie_humano);
  $('#print_therapies').html('')
  $('#print_therapies').append(dataTherapie_humano);




  // Diagnostic
  $('#diagnostic_text').trigger('click');
  $('#diagnostic_text').val(dataDiagnostic);
  $('#input_diagnostic').append(dataDiagnostic);
  // Diagnostic humano
  $('#diagnostic_text_humano').trigger('click');
  $('#diagnostic_text_humano').val(dataDiagnostic_humano);
  $('#input_diagnostic_humano').html('');
  $('#input_diagnostic_humano').append(dataDiagnostic_humano);


  // reset
  localStorage.setItem("printer", "off");
  localStorage.setItem("numData", "off");
  localStorage.setItem("numData_humano", "off");
  localStorage.setItem("diagnostic", "off");
  localStorage.setItem("therapieNum","off");
  localStorage.setItem("multiple_insuranse", "off");


} else {}

});





function printerHistorial(divID) {
//Get the HTML of div
localStorage.setItem("printer_historial", "on");
localStorage.setItem("padecimiento",    $('#input_padecimiento').val());
localStorage.setItem("status",          $('#input_status').val());
localStorage.setItem("patologico",      $('#input_antecedentes').val());
localStorage.setItem("familiares",      $('#input_familiares').val());
localStorage.setItem("examen",          $('#input_examen').val());
localStorage.setItem("anexo",           $('#input_anexo').val());
localStorage.setItem("unificada",       $('#input_unificada').val());
localStorage.setItem("autorizar",       $('#input_autorizar').val());


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
  location.reload();

}, 500);
}


$(window).on("load", function() {
if (localStorage.getItem("printer_historial") === "on" ) {
  $('#historial_modal_humano').modal('toggle');
  $('#historial_modal_senasa').modal('toggle');


  // historial section
  var padecimiento = localStorage.getItem("padecimiento");
  var status = localStorage.getItem("status");
  var patologico = localStorage.getItem("patologico");
  var familiares = localStorage.getItem("familiares");
  var examen = localStorage.getItem("examen");
  var anexo = localStorage.getItem("anexo");
  var unificada = localStorage.getItem("unificada");
  var autorizar = localStorage.getItem("autorizar");


  // padecimiento
  $('#input_padecimiento').val(padecimiento);
  $('#padecimiento').append(padecimiento);

  // status
  $('#input_status').val(status);
  $('#status').append(status);

  // patologico
  $('#input_antecedentes').val(patologico);
  $('#antecedentes').append(patologico);

  // familiares
  $('#input_familiares').val(familiares);
  $('#familiares').append(familiares);

  // Examen
  $('#input_examen').val(familiares);
  $('#examen').append(familiares);

  // anexo
  $('#input_anexo').val(anexo);
  $('#anexo').append(anexo);

  // unificada
  $('#input_unificada').val(unificada);
  $('#unificada').append(unificada);

  // autorizar
  $('#input_autorizar').val(autorizar);
  $('#autorizar').append(autorizar);


  // reset
  localStorage.setItem("printer_historial", "off");

} else {}

});
