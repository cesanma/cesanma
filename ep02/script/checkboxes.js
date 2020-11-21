function checklist(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
};

function camimgch(){
	if (document.getElementById("chcarretera").checked == true) {
		document.getElementById("carretera").style.display = "block"
	}
	else{
		document.getElementById("carretera").style.display = "none"
	}
	if (document.getElementById("chmontana").checked == true) {
		document.getElementById("montana").style.display = "block"
	}
	else{
		document.getElementById("montana").style.display = "none"
	}
	if (document.getElementById("churbana").checked == true) {
		document.getElementById("urbana").style.display = "block"
	}
	else{
		document.getElementById("urbana").style.display = "none"
	}
	if (document.getElementById("chciclocross").checked == true) {
		document.getElementById("ciclocross").style.display = "block"
	}
	else{
		document.getElementById("ciclocross").style.display = "none"
	}

};