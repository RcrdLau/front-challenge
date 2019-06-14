

// $(".rosa").on("click", function(){
//     // $("#boxgrande").replaceWith("<div id='boxgrande' class='col box1-1'>1</div>"); --pra funcionar, precisa descomentar a .box1-1 no css
//     $( "#boxgrande" ).css( "background-color", "#E91E63").text("1");
//     }
//   );

//   $(".verde").on("click", function(){
//     // $("#boxgrande").replaceWith("<div id='boxgrande' class='col box1-2'>2</div>"); --pra funcionar, precisa descomentar a .box1-2 no css
//     $( "#boxgrande" ).css( "background-color", "#009688").text("2");
//     }
//   );

//   $(".azul").click(function(){
//     // $("#boxgrande").replaceWith("<div id='boxgrande' class='col box1-3'>3</div>"); --pra funcionar, precisa descomentar a .box1-3 no css
//     $( "#boxgrande" ).css( "background-color", "#3F51B5").text("3");
//     }
//   );

//   $("#boxgrande").click(function(){
//     // $("#boxgrande").replaceWith("<div id='boxgrande' class='col box4'>0</div>"); --não ta funcionando
//     $( "#boxgrande" ).css( "background-color", "#494949").text("0");
//     }
//   );

//   $(document).ready(iniciar)


function iniciar() {
  $(".azul").click(function() {
    mudaBoxGrande("3", "azul")
  })
  $(".verde").click(function() {
    mudaBoxGrande("2", "verde")
  })
  $(".rosa").click(function() {
    mudaBoxGrande("1", "rosa")
  })
  $("#boxgrande").click(function() {
    mudaBoxGrande("0", "cinza")
  })
}

function mudaBoxGrande(texto, classe) {
  console.log("mudaNeutro", texto, classe)
  $("#boxgrande")
    .text(texto)
    .removeClass("cinza")
    .removeClass("azul")
    .removeClass("verde")
    .removeClass("rosa")
    .addClass(classe)
}

$(document).ready(iniciar)