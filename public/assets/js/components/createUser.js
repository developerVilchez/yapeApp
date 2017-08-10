"use strict";


const CreateUser = () => {
  const $form = $('<form></form>');
  const container = $('<div class="container"></div>');
  const divImgCell =$('<div class="logo-form"></div>');
  const imgLogo = $('<img src="assets/img/icons/lockone.png"></img>');
  const titulo = $('<h1>Crea tu usuario Yape</h1>');
  const msg = $('<p>Ingresa un nombre email y clave de usuario</p>');
  /*Grupo form Nombre */
  const divFormGroupNombre = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIconNombre = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegisterNombre = $('<img src="assets/img/icons/user.png" alt="" id="" class="icon">');
  const name = $('<input type="text" id="name" class="form-control text-center" placeholder="Ej: Mario Perez"  required maxlength="15"/>');
  const msgValidaFailNombre = $('<span class="help-block">Ingresa tu nombre</span>')
  const msgValidaSuccessNombre = $('<span class="help-block">Nombre validado correctamente!!</span>')
  const msgOkNombre = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok
  /*Grupo form Email */
  const divFormGroupEmail = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIconEmail = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegisterEmail = $('<img src="assets/img/icons/message-gray.png" alt="" id="" class="icon">');
  const email = $('<input type="email" id="email" class="form-control text-center" placeholder="correo@ejemplo.com" required/>');
  const msgValidaFailEmail = $('<span class="help-block">Ingresa una cuenta de correo válida</span>')
  const msgValidaSuccessEmail = $('<span class="help-block">Correo validado correctamente!!</span>')
  const msgOkEmail = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok

  /*Grupo form pass */
  const divFormGroupPass = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIconPass = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegisterPass = $('<img src="assets/img/icons/lock.png" alt="" id="" class="icon">');
  const pass = $('<input type="password" id="password" class="form-control text-center" placeholder="Ingresa Clave de 6 digitos" required maxlength="8"/>');
  const msgValidaFailPass = $('<span class="help-block">Ingresa el que será tu password!!</span>')
  const msgValidaSuccessPass = $('<span class="help-block">Password aceptado</span>') //cambiar el mensaje cuando sea ok, cuida esta clave como oro, es tu acceso a yape.
  const msgOkPass = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok

  const loginButton = $('<button type="submit" class="btn btn-default" disabled="true">Continuar</button>');
 
  $form.append(container);
  container.append(divImgCell);
  divImgCell.append(imgLogo);
  container.append(titulo);
  container.append(msg);

  container.append(divFormGroupNombre);
  divFormGroupNombre.append(divImgIconNombre);
  divImgIconNombre.append(imgRegisterNombre);
  divFormGroupNombre.append(name);
  divFormGroupNombre.append(msgValidaFailNombre);
  divFormGroupNombre.append(msgValidaSuccessNombre);
  divFormGroupNombre.append(msgOkNombre);

  container.append(divFormGroupEmail);
  divFormGroupEmail.append(divImgIconEmail);
  divImgIconEmail.append(imgRegisterEmail);
  divFormGroupEmail.append(email);
  divFormGroupEmail.append(msgValidaFailEmail);
  divFormGroupEmail.append(msgValidaSuccessEmail);
  divFormGroupEmail.append(msgOkEmail);


  container.append(divFormGroupPass);
  divFormGroupPass.append(divImgIconPass);
  divImgIconPass.append(imgRegisterPass);
  divFormGroupPass.append(pass);
  divFormGroupPass.append(msgValidaFailPass);
  divFormGroupPass.append(msgValidaSuccessPass);
  divFormGroupPass.append(msgOkPass);



  container.append(loginButton);

  //Seteamos clases para los mensajes de alerta
  msgValidaFailNombre.css("color","red").hide();
  msgValidaFailEmail.css("color","red").hide();
  msgValidaFailPass.css("color","red").hide();

  msgValidaSuccessNombre.hide();
  msgValidaSuccessEmail.hide();
  msgValidaSuccessPass.hide();

  msgOkNombre.hide();
  msgOkEmail.hide();
  msgOkPass.hide();


  //Patron de regex para validar el nombre 
  var regetTexto = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]*$/,
     regetCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
  
    name.one("focusin",function(){
      msgValidaFailNombre.show();  
    })

    name.on("keyup",function(e){
      var thisName = $(this).val();

      if(thisName==null || tiene_numeros(thisName)){
        msgValidaFailNombre.text("Este campo es obligatorio y solo requiere letras");
        $(this).val("");
      }

      else if(thisName== null ||thisName.length == 0|| tiene_numeros(thisName)|| thisName.search(regetTexto)|| thisName.substring(0,1) !== thisName.substring(0,1).toUpperCase()){
         msgValidaFailNombre.text("Ingrese el Nombre es Obligatorio, Recuerde la primera es Mayúscula, Solo Letras"); 
        }
      else {
        msgValidaFailNombre.hide();
        divFormGroupNombre.addClass("has-success has-feedback");
        msgValidaSuccessNombre.show();
        msgOkNombre.show();
        state.name = thisName;
        habilitarButton();
      } 

    })
  
    email.one("focusin",function(){
        msgValidaFailEmail.show();
    })

    email.on("keyup",function(){
      var thisEmail =  $(this).val();
        if(thisEmail.search(regetCorreo)||thisEmail==null){
          msgValidaFailEmail.show();
        }else{
           msgValidaFailEmail.hide();
           divFormGroupEmail.addClass("has-success has-feedback");
           msgValidaSuccessEmail.show();
           msgOkEmail.show();
           state.email = thisEmail;
           habilitarButton();
        }

      })
  
    pass.one("focusin",function(){
      msgValidaFailPass.show();
    })
    
    pass.on("keyup",function(){
        var thisPass =  $(this).val();
      if (thisPass == null || thisPass.length == 0 || thisPass == 123456 || thisPass.length <= 6) {
          msgValidaFailPass.text("La contraseña debe tener mínimo 6 caracteres")
      } else {
          msgValidaFailPass.hide();
          divFormGroupPass.addClass("has-success has-feedback");
          msgValidaSuccessPass.show();
          msgOkPass.show();
          state.pass = thisPass;
          habilitarButton();
        }
      })  

  function habilitarButton(){

  if(state.name && state.email && state.pass){
    loginButton.attr("disabled",false);
    }
  }

  $form.on("submit",function(e){
    e.preventDefault();


         $.ajax({
            url: 'api/createUser',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({phone: state.id, name:state.name, email:state.email, password:state.pass}),
            success: function(response) {
                    console.log(response);

                    if(response){
                      alert(response.message);
                      state.window = 4;
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



