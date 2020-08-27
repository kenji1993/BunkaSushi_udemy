$(document).ready(function(){
  var boton = $('#enviar');

  	boton.click(function(){
  		Swal.fire({
  			title:'Enviado',
  			icon:'success',
  			showConfirmButton: false,
             timer: 1500
  		});
  	});
});