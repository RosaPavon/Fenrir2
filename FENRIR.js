
//Elegir la frase de la dedicatoria
 
//boton

buscar = () => {
  const value = document.getElementById('inputBuscador').value;

  fetch('https://api.adviceslip.com/advice/search/' + value).then(response => response.json()).then(data => {
   
      const slips = data.slips;//tras slips estan las frases
      const rand = Math.floor(Math.random() * slips.length);//Crea frase random
      const advice = slips[rand].advice;
      document.getElementById('resultado').innerHTML = advice;
      document.getElementById('buttonGuardar').style.display = 'inline';
    
  }).catch(error => {
    document.getElementById('resultado').innerHTML = `
    <p>Por favor introduzca un valor válido</p>`
  });
 }


//la frase guardada
guardar = () => {
  const advice = document.getElementById('resultado').innerHTML;

  localStorage.setItem('datos', JSON.stringify(advice));
  var guardado = localStorage.getItem('datos');
  window.onload = (function (){//paraa salvar el error cannot read property innerHTML of null
  document.getElementById("fraseguardada").innerHTML=JSON.parse(guardado)}) 

}
var elNombre = localStorage.getItem('datos')//lo que esta guardado en la base de datos
window.onload = (function (){//paraa salvar el error cannot read property innerHTML of null
  document.getElementById("abc").innerHTML = elNombre//donde se ven las guardadas en value
})

//Elegir la base
function botonañadircirculo(){
  document.getElementById("materiales").innerHTML=
  `<img src="../Plantilla web/imagen/circulo.jpg" alt="circulo" class="ajustarimagenes">
  <div class="container">           
  <button onclick="botonquitarcirculo()">Eliminar</button>
  </div>`
}
function botonquitarcirculo(){
  document.getElementById("materiales").innerHTML=
  `<img id="circulo" src="../Plantilla web/imagen/circulob.jpg" alt="circulo" class="ajustarimagenes">
  <div class="container">  
  <button onclick="botonañadircirculo()">Añadir</button>      
  <button onclick="botonquitarcirculo()">Eliminar</button>
  </div>`
}
function botonañadircuadrado(){
  document.getElementById("materiales1").innerHTML=
  `<img src="../Plantilla web/imagen/cuadradob.jpg" alt="cuadrado" class="ajustarimagenes">
  <div class="container">           
  <button onclick="botonquitarcuadrado()">Eliminar</button>
  </div>`
}
function botonquitarcuadrado(){
  document.getElementById("materiales1").innerHTML=
  `<img id="circulo" src="../Plantilla web/imagen/cuadrado.jpg" alt="cuadrado" class="ajustarimagenes">
  <div class="container">  
  <button onclick="botonañadircuadrado()">Añadir</button>      
  <button onclick="botonquitarcuadrado()">Eliminar</button>
  </div>`
}
function botonañadirpentagono(){
  document.getElementById("materiales2").innerHTML=
  `<img src="../Plantilla web/imagen/pentagono.jpg" alt="pentagono" class="ajustarimagenes">
  <div class="container">           
  <button onclick="botonquitarpentagono()">Eliminar</button>
  </div>`
}
function botonquitarpentagono(){
  document.getElementById("materiales2").innerHTML=
  `<img id="circulo" src="../Plantilla web/imagen/pentagonob.jpg" alt="pentagono" class="ajustarimagenes">
  <div class="container">  
  <button onclick="botonañadirpentagono()">Añadir</button>      
  <button onclick="botonquitarpentagono()">Eliminar</button>
  </div>`
}
function botonañadirrectangulo(){
  document.getElementById("materiales3").innerHTML=
  `<img src="../Plantilla web/imagen/rectangulo.jpg" alt="rectangulo" class="ajustarimagenes">
  <div class="container">           
  <button onclick="botonquitarrectangulo()">Eliminar</button>
  </div>`
}
function botonquitarrectangulo(){
  document.getElementById("materiales3").innerHTML=
  `<img id="circulo" src="../Plantilla web/imagen/rectangulob.jpg" alt="rectangulo" class="ajustarimagenes">
  <div class="container">  
  <button onclick="botonañadirrectangulo()">Añadir</button>      
  <button onclick="botonquitarrectangulo()">Eliminar</button>
  </div>`
}
function botonañadirpersonalizado(){
  document.getElementById("materiales4").innerHTML=
  `<img src="../Plantilla web/imagen/personalizadob.jpg" alt="personalizado" class="ajustarimagenes">
  <div class="container">           
  <button onclick="botonquitarpersonalizado()">Eliminar</button>
  </div>`
}
function botonquitarpersonalizado(){
  document.getElementById("materiales4").innerHTML=
  `<img id="circulo" src="../Plantilla web/imagen/personalizado.jpg" alt="personalizado" class="ajustarimagenes">
  <div class="container">  
  <button onclick="botonañadirpersonalizado()">Añadir</button>      
  <button onclick="botonquitarpersonalizado()">Eliminar</button>
  </div>`
}

//Elegir la dificultad
function botondif1añadir(){
  document.getElementById("auto").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad.jpg" alt="dif1"class="justificacionfoto2">
  <P class= "justificacioncrear">AUTOSUFICIENTE<br>La ecoesfera es autosuficiente y con un mantenimiento anual</P>
  <button onclick="botondif1quitar()">Eliminar</button>

  </div>`
}
function botondif1quitar(){
  document.getElementById("auto").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad.jpg" alt="dif1"class="justificacionfoto">
  <P class= "justificacioncrear">AUTOSUFICIENTE<br>La ecoesfera es autosuficiente y con un mantenimiento anual</P>
  <button onclick="botondif1añadir()">Añadir</button>
  <button onclick="botondif1quitar()">Eliminar</button>
  </div>`
}
function botondif2añadir(){
  document.getElementById("auto1").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad1.jpg" alt="dif2"class="justificacionfoto2">
  <P class= "justificacioncrear">DIFICULTAD BAJA<br> La ecoesfera requiere un mantenimiento bimensual</P>
  <button onclick="botondif2quitar()">Eliminar</button>

  </div>`
}
function botondif2quitar(){
  document.getElementById("auto1").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad1.jpg" alt="dif2"class="justificacionfoto">
  <P class= "justificacioncrear">DIFICULTAD BAJA<br> La ecoesfera requiere un mantenimiento bimensual</P>
  <button onclick="botondif2añadir()">Añadir</button>
  <button onclick="botondif2quitar()">Eliminar</button>
  </div>`
}
function botondif3añadir(){
  document.getElementById("auto2").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad2.jpg" alt="dif3"class="justificacionfoto2">
  <P class= "justificacioncrear">DIFICULTAD MEDIA<br> La ecoesfera requiere un mantenimiento semanal</P>
<button onclick="botondif3quitar()">Eliminar</button>

  </div>`
}
function botondif3quitar(){
  document.getElementById("auto2").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad2.jpg" alt="dif3"class="justificacionfoto">
  <P class= "justificacioncrear">DIFICULTAD MEDIA<br> La ecoesfera requiere un mantenimiento semanal</P>
<button onclick="botondif3añadir()">Añadir</button>
  <button onclick="botondif3quitar()">Eliminar</button>
  </div>`
}
function botondif4añadir(){
  document.getElementById("auto3").innerHTML=
  `        <img src="../Plantilla web/imagen/dificultad3.jpg" alt="dif4" class="justificacionfoto2">
  <P class= "justificacioncrear">DIFICULTAD ALTA<br> La ecoesfera requiere un mantenimiento cada 3 días</P>

<button onclick="botondif4quitar()">Eliminar</button>

  </div>`
}
function botondif4quitar(){
  document.getElementById("auto3").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad3.jpg" alt="dif4" class="justificacionfoto">
  <P class= "justificacioncrear">DIFICULTAD ALTA<br> La ecoesfera requiere un mantenimiento cada 3 días</P>
<button onclick="botondif4añadir()">Añadir</button>
  <button onclick="botondif4quitar()">Eliminar</button>
  </div>`
}
function botondif5añadir(){
  document.getElementById("auto4").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad4.jpg" alt="dif5" class="justificacionfoto2">
  <P class= "justificacioncrear">PLANTAS ESTACIONALES<br> La ecoesfera requiere un mantenimiento estacional</P>
  <button onclick="botondif5quitar()">Eliminar</button>

  </div>`
}
function botondif5quitar(){
  document.getElementById("auto4").innerHTML=
  `<img src="../Plantilla web/imagen/dificultad4.jpg" alt="dif5" class="justificacionfoto">
  <P class= "justificacioncrear">PLANTAS ESTACIONALES<br> La ecoesfera requiere un mantenimiento estacional</P>
  <button onclick="botondif5añadir()">Añadir</button>
  <button onclick="botondif5quitar()">Eliminar</button>
  </div>`
}