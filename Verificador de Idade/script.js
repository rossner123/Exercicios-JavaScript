function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let formsAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(formsAno.value == 0 || formsAno.value > ano){
      alert('Verifique os dados e tente novamente')
    }
    else{
      let formsSexo = document.getElementsByName('sexo')
      let idade = ano - Number(formsAno.value)
      let genero = ''
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(formsSexo[0].checked){
        genero = ' homem'
        if(idade >= 0 && idade < 10){
          // Criança
          img.setAttribute('src', 'criança.jpg')
        }
        else if(idade < 21 ){
          //Jovem
          img.setAttribute('src', 'jovem.jpg')
        }
        else if(idade < 60 ){
          //Adulto
          img.setAttribute('src', 'adulto.jpg')
        }
        else{
          //Idoso
          img.setAttribute('src', 'idoso.jpg')
        }
      }
      else{
        genero = 'a mulher'
        if(idade >= 0 && idade < 10){
          // Criança
          img.setAttribute('src', 'criança2.jpg')
        }
        else if(idade < 21 ){
          //Jovem
          img.setAttribute('src', 'jovem2.jpg')
        }
        else if(idade < 60 ){
          //Adulta
          img.setAttribute('src', 'adulta.jpg')
        }
        else{
          //Idosa
          img.setAttribute('src', 'idosa.jpg')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `<br>Detectamos um${genero} com ${idade} anos`
      res.appendChild(img)
      
    }
  }