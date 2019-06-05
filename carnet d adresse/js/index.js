var div= $("div");
console.log(div);
div.fadeOut(5000);
div.on("click",onClick)
function onClick(){
    alert("Mr Stark... I don't fell so good...");
}
//cookies//
var cookies= window.localStorage.getItem("cookie","p.text")
console.log(cookies)
var pCookie = $("<p>");
pCookie.text(cookies)
div.append(pCookie)