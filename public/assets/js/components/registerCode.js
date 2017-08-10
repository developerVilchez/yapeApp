"use strict";

const RegisterCode = ()=>{


  const form = $('<form></form>');
  const container = $('<div class="container"></div>');
  const divImgCell =$('<div class="logo-form"></div>');
  const imgLogo = $('<img src="assets/img/icons/message.png"></img>');
  const titulo = $('<h1>Ahora ingresa tu código</h1>');
  const msg = $('<p>Envimos un SMS con el codigo de validación al número <span>'+state.id+'</span> </p>');
  const msgValidaCode = $('<p class="help-block">Por favor registra el siguiente código: </p>')
  const divFormGroup = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIcon = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegister = $('<img src="assets/img/icons/lock.png" alt="" id="" class="icon-phone">');
  const code = $('<input type="number" id="code" class="form-control text-center" placeholder="999999" required maxlength="6"/>');
  //const msgValidaFail = $('<span class="help-block">Ingresa el número de tu celular,Por favor</span>')
  //const msgValidaSuccess = $('<span class="help-block">Número validado correctamente!!</span>')
  const msgOk = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok
  const loginButton = $('<button type="submit" class="btn btn-default" disabled="true">Continuar</button>');
 

 form.append(container);
 container.append(divImgCell);
 divImgCell.append(imgLogo);
 container.append(titulo);
 container.append(msg);
 container.append(msgValidaCode);
 container.append(divFormGroup);
 divFormGroup.append(divImgIcon);
 divImgIcon.append(imgRegister);
 divFormGroup.append(code);
 //divFormGroup.append(msgValidaFail);
 //divFormGroup.append(msgValidaSuccess);
 divFormGroup.append(msgOk);
 container.append(loginButton);


form.one("focusin",function(){
  msgValidaCode.append('<span id="clave"></span>');
    $('span#clave').text(state.code);
     msgValidaCode.css("color","green");
})

code.on("keyup", function(){
  if($(this).val() == state.code){
  loginButton.attr("disabled",false);

} 

})

 form.on("submit",function(e){
  e.preventDefault();
  state.window = 3;
  state.doRender();
 }) 

  return form
}
