let email = document.getElementById("email");
let pass = document.getElementById("pass");
let pesan = document.getElementById("pesan");

pass.style.Visibility =" hidden"

function cekEMAIL() {
    let email_db =" AR@email.id";
    if(email.value === email_db) {
        pass.style.visibility ="";
        pass.focus();
        email.disable  =true;
    }
}    



 function cekpassword() {
     let pass_db = "1";
     if(pass.value === pass_db) {
         pass.disable = true;
         pesan.interHTML = "AKSES DITERIMA!";
    }
}

