

const button = document.getElementById('btn');
const bulb= document.querySelector('#off');

button.addEventListener('click', function() {
   console.log(bulb.src)
if(bulb.src.match("off")){
   bulb.src = './bulb-on.gif';
   
  
   button.innerHTML = "OFF"
}
else {
   bulb.src = './bulb-off.gif';
   button.innerHTML = "ON"
}
   
  });




