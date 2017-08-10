"use strict";

const Home = () => {
  
  const header = $('<header class="home"></header>');
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>')
  const col = $('<div class="col-xs-12"></div>')
  const divSlider  = $('<div class="slider"></div>');
  const imgSlider = $('<img src="assets/img/icons/icon-people.png" alt="" id="" class="slider">');
  const tituloSlider = $('<h1>Paga a tus amigos</h1>');
  const parrafoSlider = $('<p>Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
  const btnSlider = $('<div class="controles"></div>')
  const loginButton = $('<button type="submit">Ingresar</button>');
   
  console.log(arrImagenes);

  container.append(row);
  row.append(col);
  col.append(divSlider);
  divSlider.append(imgSlider);
  divSlider.append(tituloSlider);
  divSlider.append(parrafoSlider);
  divSlider.append(btnSlider);
  col.append(loginButton);
  header.append(container);

  for(var i in arrImagenes){
    btnSlider.append('<button class="control"></button>');
  }

  var arrBtn = btnSlider.children(); 

  console.log(arrBtn);

    jQuery.each(arrImagenes,function(i,val){
      arrBtn.eq(i).text($(this).attr("id"));
      arrBtn.eq(i).attr("id", val.url);
      arrBtn.eq(i).on('click',function(){
      imgSlider.attr('src',$(this).attr("id")); 
      tituloSlider.text(val.titulo);
      parrafoSlider.text(val.msg);
    
    })
  })


    loginButton.on("click",function(){
    state.window = 1;
    state.doRender();
  })

  /*Efecto Slider con el mouse */
  /*$( document ).on( "mouseout", function( event ) {
   $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
    });

    */




  return header;
}


