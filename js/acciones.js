// JavaScript Document
var ID_Usuario="";
 function LoginConectar(U,P)
   {
	   datos="usuario="+U+"&password="+P;
	   
	   $.ajax({
		   type:"POST",
		   url:"http://198.168.1.182/sitio6/Log_in_m.php",
		   data: datos
		   }).done(function(msg){
			   alert(msg);
			   if (msg==""|| msg==null)
			   {
				   alert("usuario incorrecto");
			   }//if
				   else
				   {
<<<<<<< HEAD
					   var OUsiario = jQuery.parseJSON(msg);
					   ID_Usuario= OUsuario.Usuario;
					   
					   alert("Bienvenido"+ID_Usuario);
					   location.href="#Busqueda";
=======
					   var OUsuario = jQuery.parseJSON(msg)
					   ID_Usuario = OUsuario.Usuario;
					   alert("Bienvenido" + ID_Usuario);
					   location.href = "#Busqueda";
>>>>>>> biblioteca
				   }//else
});
   }


$(document).ready(function(e) 
{
	document.addEventListener("deviceready",function()
	{
		$('.Enviar').tap(function()
		{
			var formulario=$(this).parents('form');
			var usuario= document.getElementById('Usuario').value;
   			var password= document.getElementById('Password').value;
    });//tap
	});//deviceredy
	 });//ready
