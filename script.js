var sec=0
var min=0
var hr=0
var interval

function doisDigitos (digito){
    if(digito<10) {
        return('0'+ digito);
    }else {
        return(digito);
    }
}

function start(){
    cronometro()
    interval = setInterval(cronometro, 1000);
}

function pause(){
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);
    sec=0;
    min=0;
    hr=0
    document.getElementById('contador').innerText = '00:00:00';
}

function cronometro() {
    sec++;
    if(sec==60) {
        min++
        sec=0
        
    }

    if(min==60) {
        hr++
        min=0        
    }
    document.getElementById('contador').innerText = doisDigitos(hr) + ':' + doisDigitos(min) + ':' + doisDigitos(sec);
}