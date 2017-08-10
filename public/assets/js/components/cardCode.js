"use strict";

const CardCode = ()=>{

  var cadena = state.cardNumber.toString().substring(0,12);
  var tarjetaId = state.cardNumber.toString().replace(cadena,"************");


  const form = $('<form></form>');
  const container = $('<div class="container"></div>');
  const divImgCell =$('<div class="logo-form"></div>');
  const imgLogo = $('<img src="assets/img/icons/bcp-logo.png"></img>');
  const titulo = $('<h1>Ingresa la clave de tu tarjeta</h1>');
  const msg = $('<p>Tarjeta : <span id="cardNumber">'+tarjetaId+'</span> </p>');
  const msgValidaCode = $('<p class="help-block">Por favor registra el siguiente código: </p>')
  const divFormGroup = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIcon = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegister = $('<img src="assets/img/icons/lock.png" alt="" id="" class="icon-phone">');
  const code = $('<input type="password" id="code" class="form-control text-center" required maxlength="4"/>');
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
  divFormGroup.append(msgOk);
  container.append(loginButton);



  code.on("keyup", function(){
    if($(this).val().length ==4){
    loginButton.attr("disabled",false);

    } else{

      loginButton.attr("disabled",true);
    }  

  })

  form.on("submit",function(e){
    e.preventDefault();
    state.window = 7;
    state.doRender();
 })

 

  return form
}
