
document.getElementById("forms").
addEventListener("submit", function (e){
    e.preventDefault();
    let inputNameValue=document.getElementById("inputname").value;
    let temp="0";
   if (inputNameValue.length>=3)
   {
    temp=1;
   }
   else{
   document.getElementById("nameValidation").innerText="Name Must Be More Than or Equal to 3 Characters";
    return false;
   }
   
   let inputEmailValue=document.getElementById("inputemail").value;
   let validasiDots=inputEmailValue.lastIndexOf(".");

   if (validasiDots>=1)
   {
      temp=1;
   }
   else
   {
      document.getElementById("emailValidation").innerText="Email Must Contain @ and .com";
      inputEmailValue.focus();
      return false;   
   }
   let words=1;
   let inputMessageValue=document.getElementById("inputmessage").value;
   for (let i=0; i<inputMessageValue.length; i++)
   {
      if (inputMessageValue[i]==" ")
      {
         words++;
      }
   }
   if (words>=3)
   {
      temp=1;
   }
   else
   {
      ocument.getElementById("messageValidation").innerText="Message Must Be More Than Or Equal to 3 Words";
      inputMessageValue.focus();
      return false;   
   }
   if (temp==1)
   {
    document.getElementById("forms").submit();
   }
});

