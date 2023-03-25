const clock = document.querySelector(".clock")

function time() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    h = (h < 10) ? "0" + h : h 
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    clock.innerText = h + " : " + m + " : " + s
    const t = setTimeout(function() {time()}, 1000) 
}

time()
