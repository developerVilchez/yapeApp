"use strict";

const App = () => {
  const divApp = $('<div class="app"></div>');
  const container = $('<div class="container"></div>');
  const divImgIconApp = $('<div class="icon-app"></div>');
  const imgApp = $('<img src="assets/img/icons/check.png" alt="" id="" class="icon">');
  const msg = $('<p>¡Bien!</p>')
  const msgOkApp = $('<p>Ahora puedes usar Yape</p>');

 
 
 divApp.append(container);
 container.append(divImgIconApp);
 divImgIconApp.append(imgApp);
 container.append(msg);
 container.append(msgOkApp);

 setTimeout(function(){
  		state.doRender();
  		state.window = 5;
 	},3000)



	return divApp;
}



