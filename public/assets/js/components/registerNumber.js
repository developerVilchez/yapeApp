"use strict";


const RegisterNumber = () => {
  const $form = $('<form></form>');
  const container = $('<div class="container"></div>');
  const divImgCell =$('<div class="logo-form"></div>');
  const imgLogo = $('<img src="assets/img/icons/phone.png"></img>');
  const titulo = $('<h1>Para comenzar validemos tu número</h1>');
  const msg = $('<p>Recibirás un sms con un código de validación</p>');
  const divFormGroup = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIcon = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegister = $('<img src="assets/img/icons/phoneandnumber.png" alt="" id="" class="icon-phone">');
  const telefono = $('<input type="text" id="telefono" class="form-control text-center" placeholder="999999999" required maxlength="9"/>');
  const msgValidaFail = $('<span class="help-block">Ingresa el número de tu celular,Por favor</span>')
  const msgValidaSuccess = $('<span class="help-block">Número validado correctamente!!</span>')
  const msgOk = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok
  const divCheckBox = $('<div class="checkbox"></div>');
  const labelCheckBox = $('<label></label>');
  const inputCheckBox = $('<input type="checkbox" required/>');
  const spanCheckBox = $('<span>Acepto los terminos y condiciones</span>');
  const loginButton = $('<button type="submit" class="btn btn-default" disabled="true">Continuar</button>');
 
 $form.append(container);
 container.append(divImgCell);
 divImgCell.append(imgLogo);
 container.append(titulo);
 container.append(msg);
 container.append(divFormGroup);
 divFormGroup.append(divImgIcon);
 divImgIcon.append(imgRegister);
 divFormGroup.append(telefono);
 divFormGroup.append(msgValidaFail);
 divFormGroup.append(msgValidaSuccess);
 divFormGroup.append(msgOk);
 container.append(divCheckBox);
 divCheckBox.append(labelCheckBox);
 labelCheckBox.append(inputCheckBox);
 labelCheckBox.append(spanCheckBox);
 container.append(loginButton);

//Seteamos clases para los mensajes de alerta
msgValidaFail.css("color","red").hide();
msgValidaSuccess.hide();
msgOk.hide();
telefono.on("focusin",function(){
  msgValidaFail.show();  
})


telefono.on("keyup",function(e){
  console.log(e.which); 
  if(e.which<48 || e.which>57 || $(this).val().toString().trim().length==0){
    msgValidaFail.text("Ingrese solo los 9 dígitos de su número celular").css("color","red");
    $(this).val("");
    activarButton();
  }

  else if($(this).val().toString().trim().length==9 && $(this).val().toString().trim().substring(0,1)=="9" && $(this).val() !== 0){
    msgValidaFail.hide();
    divFormGroup.addClass("has-success has-feedback");
    msgOk.show();
    msgValidaSuccess.show();
    state.id = $(this).val();
    }

  console.log(state.id);

})


inputCheckBox.on("change",function(){
  if($(this).get(0).checked) {
     $(this).attr("checked","checked") 
    state.check = $(this).get(0).checked;
    console.log(state.check);
    activarButton();
  }
  else{
     loginButton.attr('disabled',true); 
  }


})


function activarButton(){
  if(state.id !== null && state.check == true){
    loginButton.attr('disabled',false);   
  }else {
     loginButton.attr('disabled',true); 
  }
}


$form.on("submit",function(e){
  e.preventDefault();


         $.ajax({
            url: 'api/registerNumber',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({phone: state.id, terms:state.check}),
            success: function(response) {
                console.log(response.data);
                alert("Por favor registre el siguiente codigo : " + response.data.code);
                 state.code = response.data.code;
                  
                }
        });


   state.window = 2;
   state.doRender();


})

console.log(state.code);

return $form



}



