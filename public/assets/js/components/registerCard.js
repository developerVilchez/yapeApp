"use strict";


const RegisterCard = () => {
  const $form = $('<form></form>');
  const container = $('<div class="container"></div>');
  const divImgBcp =$('<div class="logo-form"></div>');
  const imgLogoBcp = $('<img src="assets/img/icons/bcp-logo.png"></img>');
  const titulo = $('<h1>Registra tu tarjeta débito BCP</h1>');
  const msg = $('<p>Por ahora solo acpetamos cuentas de ahorro <br> y/o corriente en soles</p>');
 
  const divFormGroup = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIcon = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegister = $('<img src="assets/img/icons/card.png" alt="" id="" class="icon-scan">');
  const cardNumber = $('<input type="text" id="cardBcp" class="form-control text-center" placeholder="9999999999999999" required maxlength="16"/>');
  const msgValidaFail = $('<span class="help-block">Ingresa el número de tu tarjeta,Por favor</span>')
  const msgValidaSuccess = $('<span class="help-block">Número validado correctamente!!</span>')
  const msgOk = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok
  
  const divCheckBox = $('<div></div>');
  const imgCheck =$('<img src="assets/img/icons/scan.png" alt="" id="" class="icon-scan">');
  const spanCheckBox = $('<span>Escanaer Tarjeta</span>');

  

  const divFormGroupFecha = $('<div class="form-groups"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const labelFecha = $('<label>Fecha de Vencimiento</label>')
  const monthNumber = $('<input type="text" id="monthCard" class="form-control text-center" placeholder="Mes" required maxlength="2"/>');
  const msgValidaFailMes = $('<span class="help-block">Ingrese el mes</span>')
  const msgValidaSuccessMes = $('<span class="help-block">Número validado correctamente!!</span>')
  const msgOkMes = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok
  const yearNumber = $('<input type="text" id="yearCard" class="form-control text-center" placeholder="Año" required maxlength="2"/>');
  const msgValidaFailYear = $('<span class="help-block">Ingresa el año</span>')
  const msgValidaSuccessYear = $('<span class="help-block">Número validado correctamente!!</span>')
  const msgOkYear = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok


  const loginButton = $('<button type="submit" class="btn btn-default" disabled="true">Continuar</button>');
 




 $form.append(container);
 container.append(divImgBcp);
 divImgBcp.append(imgLogoBcp);
 container.append(titulo);
 container.append(msg);
 container.append(divFormGroup);
 divFormGroup.append(divImgIcon);
 divImgIcon.append(imgRegister);
 divFormGroup.append(cardNumber);
 divFormGroup.append(msgValidaFail);
 divFormGroup.append(msgValidaSuccess);
 divFormGroup.append(msgOk);
 container.append(divCheckBox);
 divCheckBox.append(imgCheck);
 divCheckBox.append(spanCheckBox);
 container.append(divFormGroupFecha);
 divFormGroupFecha.append(labelFecha);
 divFormGroupFecha.append(monthNumber);
 divFormGroupFecha.append(msgValidaFailMes);
 divFormGroupFecha.append(msgValidaSuccessMes);
 divFormGroupFecha.append(yearNumber);
 divFormGroupFecha.append(msgValidaFailYear);
 divFormGroupFecha.append(msgValidaSuccessYear);

 container.append(loginButton);

//Seteamos clases para los mensajes de alerta
  msgValidaFail.css("color","red").hide();
  msgValidaFailMes.css("color","red").css("font-size","10x").css("position","absolute").hide();
  msgValidaFailYear.css("color","red").css("font-size","10x").css("position","absolute").hide();

  msgValidaSuccess.hide();
  msgValidaSuccessMes.hide(); 
  msgValidaSuccessYear.hide();
  msgOk.hide();
  msgOkMes.hide();
  msgOkYear.hide();

  cardNumber.one("focusin",function(){
    msgValidaFail.show();  
  })


  monthNumber.on("focusin",function(){
    msgValidaFailYear.hide();
    msgValidaFailMes.show();
  })

  yearNumber.on("focusin",function(){
    msgValidaFailMes.hide();
    msgValidaFailYear.show(); 
})

  cardNumber.on("keyup",function(e){
    console.log(e.which); 
    if(e.which<48 || e.which>57 || $(this).val().toString().trim().length==0){
      msgValidaFail.text("Ingrese los 16 dígitos de su tarjeta de débito").css("color","red");
      $(this).val("");
    
  }

  else if($(this).val().toString().trim().length==16 && $(this).val() !== ""){
    parseInt($(this).val());
    msgValidaFail.hide();
    divFormGroup.addClass("has-success has-feedback");
    msgOk.show();
    msgValidaSuccess.show();
    state.cardNumber = parseInt($(this).val());
    activarButton();
    }

  console.log(parseInt($(this).val()));

})


  monthNumber.on("keyup",function(e){
    if(e.which<48 || e.which>57 || $(this).val().toString().trim().length==0){
      msgValidaFailMes.text("Ingrese solo 2 digitos, ejm 01")
      $(this).val("");

  }

  else if($(this).val()!=="" && ($(this).val().substring(0,1)=="0" ||$(this).val().substring(0,1)=="1") && $(this).val().toString().trim().length==2 && parseInt($(this).val()) <= 12 && parseInt($(this).val())>0){
      msgValidaFailMes.hide();
      state.cardMonth = $(this).val();
      activarButton();
  }
})




yearNumber.on("keyup",function(e){
  if(e.which<48 || e.which>57 || $(this).val().toString().trim().length==0){
    msgValidaFailMes.text("Ingrese solo 2 digitos, ejm 01")
    $(this).val("");
    loginButton.attr("disabled",true);
  }

  else if($(this).val()!=="" && ($(this).val().substring(0,1)=="1"||$(this).val().substring(0,1)=="2") && $(this).val().toString().trim().length==2 && parseInt($(this).val()) <= 24 && parseInt($(this).val())>=17){
      msgValidaFailMes.hide();
      msgValidaFailYear.hide();
      state.cardYear = $(this).val();
      activarButton();
  }
})

function activarButton(){
  console.log(state.cardNumber)
  console.log(state.cardMonth)
  console.log(state.cardYear)

    if(state.cardNumber && state.cardMonth && state.cardYear){
      loginButton.attr("disabled",false);  
    } 
  }


$form.on("submit",function(e){
  e.preventDefault();


         $.ajax({
            url: 'api/registerCard',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({phone: state.id, 
                                  cardNumber:state.cardNumber, 
                                  cardMonth:state.cardMonth,
                                  cardYear:state.cardYear,
                                  cardPassword:state.pass}),
            success: function(response) {
                    console.log(response);

                    if(response){

                      state.pass = response.data.cardPassword;
                      alert(response.message);
                      state.window = 6;
                      state.doRender();
                    }
                  
                },
             fail: function(request){
              if(request){
                alert(request.message);  
              }
             }   
        });


})
  




return $form



}



