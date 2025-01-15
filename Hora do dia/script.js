function atualizarHora(){
    let msg = document.getElementById('msg')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${min}:${seg}`

    let img = document.getElementById('imagemManha')
      if(hora >= 0 && hora < 12){
        img.src = 'pexels-biluk-165537.jpg'
        document.body.style.backgroundColor = '#87CEEB'
      }
      else if(hora >=12 && hora < 18){
        img.src = 'pexels-andersonmartins-retratos-2386144.jpg'
        document.body.style.backgroundColor = '#CD853F'
      }
      else{
        img.src = 'pexels-esan-2085998.jpg'
        document.body.style.backgroundColor = '#282828'
      }  
    }
    atualizarHora()
    setInterval(atualizarHora, 1000)