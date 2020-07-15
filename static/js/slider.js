function myfunction(n) {
    if(n == 1) {
        var x = document.getElementsByClassName("galPhoto")[0].getAttribute("src")
        document.getElementsByTagName('img')[9].setAttribute("src",x)
    }
    if(n == 2) {
        var x = document.getElementsByClassName("galPhoto")[1].getAttribute("src")
        document.getElementsByTagName('img')[9].setAttribute("src",x)
    }
    if(n == 3) {
        var x = document.getElementsByClassName("galPhoto")[2].getAttribute("src")
        document.getElementsByTagName('img')[9].setAttribute("src",x)
    }

}