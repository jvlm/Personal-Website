function montaRepositorio(){
  let xhr = new XMLHttpRequest ()
  
  xhr.onload = function (){

    let info = JSON.parse(this.responseText)
    let rep = ""
    let perfil = ""
    for (i=0; i<3; i++){
      let data
      data = info[i]['updated_at'][0]
      data += info[i]['updated_at'][1]
      data += info[i]['updated_at'][2]
      data += info[i]['updated_at'][3]
      data += info[i]['updated_at'][4]
      data += info[i]['updated_at'][5]
      data += info[i]['updated_at'][6]
      data += info[i]['updated_at'][7]
      data += info[i]['updated_at'][8]
      data += info[i]['updated_at'][9]
      rep += `<a href="${info[i]['html_url']}" target="_blank" id="posCards">
                    <div class="card" id="sobrepostoDepois">
                      <div class="box">
                        <div class="content">
                          <h3><em>${info[i]['name']}</em></h3>
                          <p>${info[i]['description']}</p>
                          <h6>Last Update: ${data}</h6>
                        </div>
                      </div>
                    </div>
                    </a>`
    
    }
    
    document.getElementById ('rep').innerHTML += rep
  }
  xhr.onerror = function (){
    alert('Erro na requisição!')
  }
  xhr.open ('GET', 'https://api.github.com/users/jvlm/repos')
  xhr.send ()
}   
window.onload = function montaTela(){
  montaRepositorio()
}