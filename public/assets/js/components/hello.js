"use strict";

const Hello = ()=>{
  
  const divHello = $('<div class="hello"></div>');
  const container = $('<div class="container"></div>');
  const row1 = $('<div class="row top"></div>');
  const row2 = $('<div class="row down"></div>');
  const col_xs_12_1 = $('<div class="col-xs-12"></div>');
  const col_xs_12_2 = $('<div class="col-xs-12"></div>');
  const imgHappyFace = $('<img src="assets/img/icons/happy-face.png"></img>');
  const titulo = $('<h1>Hola</h1>');
  const imgEye = $('<img src="assets/img/icons/eye.png"></img>');
  const msgSaldo = $('<span id="cardNumber">Mostrar Saldo</span>');
  const msgMov = $('<p>ÚLTIMOS MOVIMIMIENTOS</p>')
  const imgIcon = $('<img src="assets/img/icons/icon.png" class="icon"></img>');
  const msgPago = $('<p>Aún no realizas tu primer pago? <br/> Es rápido y sencillo</p>');
  const imgSend = $('<img src="assets/img/icons/code-qr.png"></img>');
  const imgCodeQr = $('<img src="assets/img/icons/send.png"></img>')
  


  divHello.append(container);
  container.append(row1);
  container.append(row2);
  row1.append(col_xs_12_1);
  row2.append(col_xs_12_2);
  col_xs_12_1.append(imgHappyFace);
  col_xs_12_1.append(titulo);
  col_xs_12_1.append(imgEye);
  col_xs_12_1.append(msgSaldo);
  col_xs_12_2.append(msgMov);
  col_xs_12_2.append(imgIcon);
  col_xs_12_2.append(msgPago);
  col_xs_12_2.append(imgSend);
  col_xs_12_2.append(imgCodeQr);



  container.children().first().css("background-color", "#451e36")
  container.children().first().next().css("background-color", "#38052a")
  titulo.css("color","white");
  msgSaldo.css("color","#00c3a3")
  container.children().find('img').wrap('<div class="img"></div>');
  container.children().find('img').eq(1).unwrap('div.img');
  container.children().find('img').eq(2).unwrap('div.img');

  return divHello;
}
