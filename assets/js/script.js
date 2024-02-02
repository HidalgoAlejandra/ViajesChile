/* Tooltips */
var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
/* al hacer click en enviarContacto nos aparecera un alert */
$("#enviarcontacto").click(function (e) {
	e.preventDefault();
	alert("El Contacto fue enviado correctamente...");
});
/* al hacer doble click se convierte en rojo*/
$(".quien").dblclick(function(){
    $(this).css({
    "color": "red",
    });
    });
/* uso de toggle */
$(".card-title").click(function () {
	$(".card-text").toggle();
});