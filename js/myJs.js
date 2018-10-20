var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function(){
	var txtUserName = document.forms["register-form"]["username"];
	var msgUsername = txtUserName.nextElementSibling;

	var txtPassword = document.forms["register-form"]["password"];
	var msgPassword = txtPassword.nextElementSibling;

	var txtFullname = document.forms["register-form"]["fullName"];
	var msgFullname = txtFullname.nextElementSibling;

	var txtEmail = document.forms["register-form"]["email"];
	var msgEmail = txtEmail.nextElementSibling;

	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (txtUserName == null || txtUserName.value.length == 0) {
		msgUsername.innerHTML = "* Vui long nhap ten cua ban";
		msgUsername.classList.remove("hidden-text");
	}else if (txtUserName.value.length < 5){
		msgUsername.innerHTML = "* Vui long nhap lon hon 5 ky tu";
		msgUsername.classList.remove("hidden-text");
	}else if(txtUserName.value.length > 10){
		msgUsername.innerHTML = "* Vui long nhap nho hon 10 ky tu";
		msgUsername.classList.remove("hidden-text");
	}else{
		msgUsername.classList.add("hidden-text");
	}
	//pasword
	if(txtPassword == null || txtPassword.value.length == 0){
		msgPassword.innerHTML = "* PassWord không được bỏ trống";
		msgPassword.classList.remove("hidden-text");
	}else{
		msgPassword.classList.add("hidden-text");
	}
	//fullname
	 if (txtFullname == null || txtFullname.value.length == 0) {
		msgFullname.innerHTML = "* Vui long nhap ten cua ban";
		msgFullname.classList.remove("hidden-text");
	}else if (txtFullname.value.length < 5){
		msgFullname.innerHTML = "* Vui long nhap lon hon 5 ky tu";
		msgFullname.classList.remove("hidden-text");
	}else if(txtFullname.value.length > 30){
		msgFullname.innerHTML = "* Vui long nhap nho hon 30 ky tu";
		msgFullname.classList.remove("hidden-text");
	}else{
		msgFullname.classList.add("hidden-text");
	}

	//email
	 if (txtEmail == null || txtEmail.value.length == 0) {
		msgEmail.innerHTML = "* Vui long nhap email";
		msgEmail.classList.remove("hidden-text");
	}else if (!txtEmail.value.match(mailformat)){
		msgEmail.innerHTML = "* Vui lòng nhập đúng định dạng email";
		msgEmail.classList.remove("hidden-text");
	}else{
		msgEmail.classList.add("hidden-text");
	}
}
