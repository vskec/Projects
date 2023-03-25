const clock = document.querySelector(".clock")

function time() {
    let date = new Date()//sve ovo je javascript ugrađena metoda; vraća 0 do 23,59,59
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    h = (h < 10) ? "0" + h : h //ako je manje od 10 onda se dodaje 0 ispred sata
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    clock.innerText = h + " : " + m + " : " + s
    const t = setTimeout(function() {time()}, 1000) //funkcija se update svaku sekundu, bez ovoga ne funkcionira
}

time()