function set() {
  // (------------------------check the checkbox-----------------------------)
  let chek = document.querySelector('#ss');
  if (chek.checked) {
    console.log("true");
    // (----------------------selected the items------------------------------)
    let issubmit = true;
    let emaile=document.getElementById("email-div");
    let pass = document.getElementById("pass-div");
    let btn = document.querySelector('#btn-checked');
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    // (--------------------check the email-------------------------------------)
    email = email.indexOf("@");
    if( email== -1){
      console.log("email not active");
      let small = document.createElement("small");
      small.appendChild(document.createTextNode("ایمیل نادرست است"));
      emaile.appendChild(small);
      emaile.classList.add("smal")
      issubmit = false
    }
    // (-------------------chekn the password-------------------------------)
    if(password!=password2)
    {
    console.log("pass not active");
      let smalpass = document.createElement("small");
      smalpass.appendChild(document.createTextNode("رمزعبور مغایرت دارد"));
      pass.appendChild(smalpass);
      pass.classList.add("smal")
      issubmit = false
    }
   if(issubmit){
    document.getElementById("myForm").submit();
   } 
  }
 
}