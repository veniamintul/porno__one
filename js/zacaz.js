const phone = document.querySelector('#phone');
phone.addEventListener("keydown",function(event){
  let isDigit=false;   // нажали ли мы цифру .По умолчанию всегда false
  if(event.key>=0||event.key<=9 ||event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace')
  {
      isDigit=true;
  }
  else{
      event.preventDefault();
  }

  let isDash=false;   
  if(event.key=="-"){
    isDash=true; 
  }

  if(isDigit=false &&!isDash){    
    event.preventDefault();
}


});