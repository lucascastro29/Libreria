
function showproduct(array) {
    let contenido = "";      
            
                    contenido += 'Título: ' + array[(localStorage.getItem("product"))-1].titulo + '<br>';
                    contenido += 'Editorial: ' + array[(localStorage.getItem("product"))-1].editorial + '<br>';
                    contenido += 'Páginas: ' + array[(localStorage.getItem("product"))-1].paginas + '<br>';



                
        
        document.getElementById("listado").innerHTML = contenido;
    
}

function point1(n){

    if (n=='v'){  x=+2
    }else{x=-1}
    localStorage.setItem("point1",x)
  }
  function point2(n){
    if (n=='v'){  x=+2     
    }else{x=-1}  
    localStorage.setItem("point2",x)
  }
  function point3(n){
    if (n=='v'){  x=+2     
    }else{x=-1}  
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


document.addEventListener("DOMContentLoaded",function(){
    localStorage.setItem("point1",0)
    localStorage.setItem("point2",0)
    localStorage.setItem("point3",0)
    localStorage.setItem("total",0)
    
    
    getJSONData(LIBROS_URL).then(function(result){

        showproduct(result.data)
        
    }).then(function(){
        document.getElementById("enviar").addEventListener("click",function(){
            buttonclick()
            intento()
            total()
  

           
        })
    })
      
})



