const getcolor=()=>{
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#" + randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    let col=document.querySelector("#color-code");
    col.innerHTML=randomCode;
    navigator.clipboard.writeText(randomCode);

}

//event call--------
document.getElementById("btn").addEventListener("click",getcolor);

//initial call------
getcolor();