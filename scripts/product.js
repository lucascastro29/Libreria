
function showproduct(array) {
    let contenido = `     
            
 Título:  ${array[(localStorage.getItem("product"))-1].titulo}  <br>
Editorial:   ${array[(localStorage.getItem("product"))-1].editorial} <br>
Páginas:   ${array[(localStorage.getItem("product"))-1].paginas }<br>
<div>
<p>Resultado:<p id="resultado"></p></p>
<p>Cantidad de intentos:<p id="intentos"></p></p>
<p>puntaje total:<p id="total"></p></p>
<p>promedio:<p id="promedio"></p></p>
<button id="enviar">enviar</button></div>


<div>
    <p>
    
    <br>
    
    
    
    
    <tr><td width="600">
    <b id="pregunta1">1. </font></b>
    <blockquote>
    <input type="radio" id="respuesta1" value="A" onclick="point1('v')">A. <br>
    <input type="radio" id="respuesta2" value="B" onclick="point1('f')">B. <br> 
    <input type="radio" id="respuesta3" value="C" onclick="point1('f')">C. <br> 
    </blockquote>
    </td></tr>
    
    <tr><td>
    <b id="pregunta2">2. </b>
    <blockquote>
    <input type="radio" id="respuesta4" value="A" onclick="point2('f')">A. <br> 
    <input type="radio" id="respuesta5" value="B" onclick="point2('v')">B. <br> 
    <input type="radio" id="respuesta6" value="C" onclick="point2('f')">C. <br><br>
    </blockquote>
     </td></tr>
     
    <tr><td>
    <b id="pregunta3">3. </b>
    <blockquote>
    <input type="radio" id="respuesta7" value="A" onclick="point3('f')">A. <br>
    <input type="radio" id="respuesta8" value="B" onclick="point3('v')">B. <br>
    <input type="radio" id="respuesta9" value="C" onclick="point3('f')">C. <br>
    </blockquote>
    </td></tr>


</div>`

                
        
        document.getElementById("listado").innerHTML = contenido;
    
}

function point1(n){

    if (n=='v'){  x=+3
    }else{x=0}
    localStorage.setItem("point1",x)
  }
  function point2(n){
    if (n=='v'){  x=+3     
    }else{x=0}  
    localStorage.setItem("point2",x)
  }
  function point3(n){
    if (n=='v'){  x=+3     
    }else{x=0}  
    localStorage.setItem("point3",x)
  }

  function buttonclick(){
let content=''
 content +=parseInt(localStorage.getItem("point1"))+parseInt(localStorage.getItem("point2"))+parseInt(localStorage.getItem("point3"))
    document.getElementById("resultado").innerHTML=content
      
  }
  
  j=0;
function intento(){
  j++
  localStorage.setItem("cantidaddejugadas",j)
      let content=''
     content +=parseInt(localStorage.getItem("cantidaddejugadas"))
        document.getElementById("intentos").innerHTML=content
      }


t=parseInt(localStorage.getItem("point1"))+parseInt(localStorage.getItem("point2"))+parseInt(localStorage.getItem("point3"))
function total(){
  t=t+parseInt(localStorage.getItem("point1"))+parseInt(localStorage.getItem("point2"))+parseInt(localStorage.getItem("point3"))
  localStorage.setItem("total",t)
  let content=''
  content +=parseInt(localStorage.getItem("total"))
  document.getElementById("total").innerHTML=content
}

function  promedio(){
  let x=0
  let promedio= (parseInt(localStorage.getItem("point1"))+parseInt(localStorage.getItem("point2"))+parseInt(localStorage.getItem("point3")))/3
if(promedio==3){
  x=` <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>`
}else
if(promedio==2){
  x=`<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>`
}else
if(promedio==1){
  x=` 
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>`

}else
if(promedio==0){
  x=`      <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>`
}
  document.getElementById("promedio").innerHTML=x
 }
 
 function preguntas(n){
  if(n==1){
    document.getElementById("pregunta1").innerHTML+=`¿En que año fue publicado?`
    document.getElementById("respuesta1").innerHTML+=`1917`
    document.getElementById("respuesta2").innerHTML+=`2000`
    document.getElementById("respuesta3").innerHTML+=`1000`
    document.getElementById("pregunta2").innerHTML+=`¿Cuantos cuentos incluyo la primera publicación?`
    document.getElementById("respuesta4").innerHTML+=`1`
    document.getElementById("respuesta5").innerHTML+=`18`
    document.getElementById("respuesta6").innerHTML+=`100`
    document.getElementById("pregunta3").innerHTML+=`¿En que pais se publico?`
    document.getElementById("respuesta7").innerHTML+=`Peru`
    document.getElementById("respuesta8").innerHTML+=`Argentina`
    document.getElementById("respuesta9").innerHTML+=`China`
  }else
  if(n==3){
    document.getElementById("pregunta1").innerHTML+=`¿En que año fue publicado?`
    document.getElementById("respuesta1").innerHTML+=`1939`
    document.getElementById("respuesta2").innerHTML+=`2020`
    document.getElementById("respuesta3").innerHTML+=`2000`
    document.getElementById("pregunta2").innerHTML+=`¿Quien es el personaje principal?`
    document.getElementById("respuesta4").innerHTML+=`Maria`
    document.getElementById("respuesta5").innerHTML+=`Eladio Linacero`
    document.getElementById("respuesta6").innerHTML+=`Juan Pedro`
    document.getElementById("pregunta3").innerHTML+=`¿Cuantos años tiene el protagonista?`
    document.getElementById("respuesta7").innerHTML+=`10`
    document.getElementById("respuesta8").innerHTML+=`47`
    document.getElementById("respuesta9").innerHTML+=`100`

  }else
  if(n==2){
    document.getElementById("pregunta1").innerHTML+=`¿En que año fue publicado?`
    document.getElementById("respuesta1").innerHTML+=`1960`
    document.getElementById("respuesta2").innerHTML+=`2010`
    document.getElementById("respuesta3").innerHTML+=`1200`
    document.getElementById("pregunta2").innerHTML+=`¿Quien es el personaje principal?`
    document.getElementById("respuesta4").innerHTML+=`Paulino`
    document.getElementById("respuesta5").innerHTML+=`Martin Santomé`
    document.getElementById("respuesta6").innerHTML+=`Don Ramon`
    document.getElementById("pregunta3").innerHTML+=`¿De que trabaja el personaje principal?`
    document.getElementById("respuesta7").innerHTML+=`Policia`
    document.getElementById("respuesta8").innerHTML+=`Oficinista`
    document.getElementById("respuesta9").innerHTML+=`Verdulero`

  }else
  if(n==5){
    
    document.getElementById("pregunta1").innerHTML+=`¿En que año fue publicado?`
    document.getElementById("respuesta1").innerHTML+=`1971`
    document.getElementById("respuesta2").innerHTML+=`2000`
    document.getElementById("respuesta3").innerHTML+=`1000`
    document.getElementById("pregunta2").innerHTML+=`¿Cual es la trama?`
    document.getElementById("respuesta4").innerHTML+=`La historia de la cultura de America Latina`
    document.getElementById("respuesta5").innerHTML+=`La historia de la economia de America Latina`
    document.getElementById("respuesta6").innerHTML+=`volar`
    document.getElementById("pregunta3").innerHTML+=`¿Quien es el Autor?`
    document.getElementById("respuesta7").innerHTML+=`Messi`
    document.getElementById("respuesta8").innerHTML+=`Eduardo Galeano`
    document.getElementById("respuesta9").innerHTML+=`La China Suarez`
  }else
  if(n==4){
    
    document.getElementById("pregunta1").innerHTML+=`¿En que año fue publicado?`
    document.getElementById("respuesta1").innerHTML+=`2003`
    document.getElementById("respuesta2").innerHTML+=`1000`
    document.getElementById("respuesta3").innerHTML+=`1500`
    document.getElementById("pregunta2").innerHTML+=`¿Que instrumento toca Sebastian?`
    document.getElementById("respuesta4").innerHTML+=`Piano`
    document.getElementById("respuesta5").innerHTML+=`La Guitarra`
    document.getElementById("respuesta6").innerHTML+=`Tambor`
    document.getElementById("pregunta3").innerHTML+=`¿Cual es el sueño de Sebastian?`
    document.getElementById("respuesta7").innerHTML+=`volar`
    document.getElementById("respuesta8").innerHTML+=`Formar una banda con sus amigos`
    document.getElementById("respuesta9").innerHTML+=`Ser policia`
  }
  
}

document.addEventListener("DOMContentLoaded",function(){
    localStorage.setItem("point1",0)
    localStorage.setItem("point2",0)
    localStorage.setItem("point3",0)
    localStorage.setItem("total",0)
    
    
    getJSONData(LIBROS_URL).then(function(result){

        showproduct(result.data)
        preguntas(parseInt(localStorage.getItem("product")))        
    }).then(function(){
        document.getElementById("enviar").addEventListener("click",function(){
            buttonclick()
            intento()
            total()
            promedio()


           
        })
    })
      
})

