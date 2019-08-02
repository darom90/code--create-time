

var quiz = () => {
    let score = 0;
    let css = document.getElementById("css");
    let css1 = document.getElementById("css1");
    let css2 = document.getElementById("css2");

    if(css.checked){
        score +=25;
    }else if(css1.checked){
        score += 0;
    }else if (css2.checked){
        score += 0;
    }
    let uml = document.getElementById("uml");
    let uml1 = document.getElementById("uml1");
    let uml2 = document.getElementById("uml2");
    if(uml.checked){
        score += 0;
    }else if(uml1.checked){
        score += 25;
    }else if(uml2.checked){
        score += 0;
    }

    document.getElementById("result").innerHTML = score;
}

var changeColor = () =>document.body.style.background=document.body.style.background== "teal" ? "blue" : "teal";
setInterval(changeColor,1000);
let btn = document.getElementById('answer');
btn.addEventListener('click',quiz);