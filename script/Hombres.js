



/* ---------------Borones de SEXO----------------------*/
function sexoHombre(){

    document.getElementById('Sexo').innerHTML = "Hombre";
    document.getElementById('sex1').value = "Hombre";
}

function sexoMujer(){

    document.getElementById('Sexo').innerHTML = "Mujer";
    document.getElementById('sex1').value = "Mujer";
}
/* ---------------Borones de SEXO----------------------*/



function traerInformacion(){

     const Nombre = document.getElementById('nombre2').value
     const sexo = 'Hombre'
     const edad = document.getElementById('edad1').value
     const peso = document.getElementById('peso1').value
     const altura = document.getElementById('altura1').value



    

     if (edad <20){
       

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Que pena este formulario es para adultos mayores a 20 años',
          })


    }else{


        

    const results = peso / (altura  * altura)

  
    document.getElementById('ID0000').innerHTML = results

    /* Informacion para guardar en Local storage */
    const usuario = {
 
        Nombre,
        edad,
        peso,
        altura,
        sexo,
        results
    }

    let cliente = []

     if(localStorage.getItem('cliente')){
        cliente = JSON.parse(localStorage.getItem('cliente'))
     }
       cliente.push(usuario)
     
     localStorage.setItem('Clientes',  JSON.stringify(cliente));

     /*-------------------------------------------------*/


    if(results < 18.5 ){

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Carga Exitosa',
            showConfirmButton: false,
            timer: 1500
          })

        document.getElementById('Este_es_el_Resultado_exacto').innerHTML = "Tu color es AZUL";
        document.getElementById('Tu_Peso_ideal_es_').innerHTML = "<strong> Tu Peso ideal es Mayor a 48 </strong>";

    }else{ 
        
        if(results > 18.5 && results < 24.9 ){

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Carga Exitosa',
                showConfirmButton: false,
                timer: 1500
              })

            document.getElementById('Este_es_el_Resultado_exacto').innerHTML = "Tu color es Verde";
            document.getElementById('Tu_Peso_ideal_es_').innerHTML = "<strong> Felicidades Tu peso es IDEAL </strong>";

                }else{ 
        
                    if(results > 25.0 && results < 29.9 ){

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Carga Exitosa',
                            showConfirmButton: false,
                            timer: 1500
                          })
    
                        document.getElementById('Este_es_el_Resultado_exacto').innerHTML = "Tu color es NARANJA";
                        document.getElementById('Tu_Peso_ideal_es_').innerHTML = "<strong>Tu peso deberia ser debajo de 72,5</strong>";
    
                            }else{ 
        
                                if(results > 30.0 && results < 39.9 ){

                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Carga Exitosa',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
        
                                    document.getElementById('Este_es_el_Resultado_exacto').innerHTML = "Tu color es ROJO ALERTA";
                                    document.getElementById('Tu_Peso_ideal_es_').innerHTML = "<strong>Tu peso deberia ser debajo de 86.5</strong>";
        
                                        }else{ 
        
                                            if(results > 40.0){

                                                Swal.fire({
                                                    position: 'center',
                                                    icon: 'success',
                                                    title: 'Carga Exitosa',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                  })
            
                                                document.getElementById('Este_es_el_Resultado_exacto').innerHTML = "Obesidad extrema";
                                                document.getElementById('Tu_Peso_ideal_es_').innerHTML = "<strong>Tu salud esta en RIESGO</strong>";
            
                    }

                 }
  
              }
            }
        }
    }
}