"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.window) {
    case null:
              wrapper.append(Home());
      break;
    case 1:
            wrapper.append(RegisterNumber());

      break;
    case 2:
            wrapper.append(RegisterCode());

      break;
       case 3:
            wrapper.append(CreateUser());

      break;
       case 4:
            wrapper.append(App());

      break;
      case 5:
            wrapper.append(RegisterCard());

      break;
       case 6:
            wrapper.append(CardCode());

      break;
      case 7:
            wrapper.append(Hello());

      break;
}


  root.append(wrapper);

}


const state = {
  window:null,
  id:null,
  checked:false,
  code:null,
  name:null,
  email:null,
  pass:null,
  cardNumber:null,
  cardMonth:null,
  cardYear:null
 
}


$( _ => {

  const root = $(".root");
  render(root);
  state.doRender = render.bind(null,root);

});
