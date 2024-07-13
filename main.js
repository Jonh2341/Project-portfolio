// document.getElementById("form-id").addEventListener("submit", formValidation);

// function formValidation(event) {
//     event.preventDefault();
//     let form = document.getElementById("form-id");

//     const gmail = form.email.value;
//     const textarea = form.text.value;
//     const state = form.status.value;

//     let fail = "";

//     if(gmail == "" || password == "" || state == ""){
//         fail = "nothing!";
//     }else if (gmail.length <= 1 || gmail.length > 40){
//         fail = "check your gmail!";
//     }else if (textarea != repassword){
//        fail = "check your password!" 
//     }else if (textarea.split("%").length > 1){
//         fail = "check your textarea length!"
//     }
        
//     if (fail != ""){
//         document.getElementById("error").innerHTML = fail;
//     } else {
//         document.getElementById("error").innerHTML = "it's OK!";
//         document.getElementById("button-send").href = "mailto:repaloadam@gmail.com";
//     }
// }
