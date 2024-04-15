

function imgoscura (){
document.getElementById ("github").src = "/img/github_n.png"
}

function imgclara (){
    document.getElementById ("github").src = "/img/github2.svg.png"
}  


let infodev = document.getElementById("dropdev")
let btn = document.getElementById("but-dev")

btn.onmouseover = function () {
    infodev.classList.remove("hidden")
}



infodev.onmouseleave = function () {
    infodev.classList.add("hidden")
}


