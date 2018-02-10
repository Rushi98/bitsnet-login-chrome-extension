console.log("HI");
i = document.getElementsByClassName("textbox");
i[0].value="username";           /* <-- PUT YOUR USERNAME THERE*/
i[1].value="password";           /* <-- PUT YOUR PASSWORD THERE*/
l = document.getElementById("logincaption");
if (l.value === "Login") l.click();