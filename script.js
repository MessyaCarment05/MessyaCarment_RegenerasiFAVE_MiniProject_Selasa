
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
    alert ("Nama Minimal Terdiri Dari 3 Karakter!");
    inputNameValue.focus();
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
      alert ("Email Tidak Valid!! (Harus ada simbol @ dan .)");
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
      alert ("Message Minimal Terdiri Dari 3 Kata!");
      inputMessageValue.focus();
      return false;   
   }
   if (temp==1)
   {
    document.getElementById("forms").submit();
   }
});

