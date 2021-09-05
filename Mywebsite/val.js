function validation() {

   var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
     var message = document.getElementById('message').value;
     var error = document.getElementById('error');
  var text;
   error.style.padding =   "10px";

   if(name.length < 3) {
      text ="Please Enter Valid Name";
      error.innerHTML = text;
      return false;
   }

   if(subject.length < 10) {
      text ="Please Enter Correct Subject";
      error.innerHTML = text;
      return false;
   }

   if(message.length < 50) {
      text ="Please Enter More Than 50 words";
      error.innerHTML = text;
      return false;
   }

   alert("Form Is Submitted Sucessfully");
 return true;

}
