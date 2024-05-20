const changecolors = () => {
            const randomNumber = Math.floor(Math.random()*16777215)
            const randomCode = "#" + randomNumber.toString(16);
            document.body.style.backgroundColor = randomCode;
            document.getElementById('get-color').innerHTML=randomCode;
            changecolors();
}
document.getElementById("btn").addEventListener("click",changecolors)

changecolors();