function atualizarelogio(){
    var display = document.getElementById('display');

    var agora = new Date();
    
    var horário = String(agora.getHours()).padStart(2,'0') + ':' + String(agora.getMinutes()).padStart(2,'0') + ':' + String(agora.getSeconds()).padStart(2,'0');
    
    display.textContent = horário;
    
    
}

setInterval(atualizarelogio,1000);


