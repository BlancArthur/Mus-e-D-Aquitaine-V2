var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('fenetre_popup');
var btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click',openMoadl);
	
btnClose.addEventListener('click',closeModal);

function openMoadl() {
overlay.style.display='block';
}

function closeModal() {
overlay.style.display='none';
}


