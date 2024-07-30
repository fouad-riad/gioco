
document.getElementById("gioca").addEventListener("click",function(){
    console.log("gioca")
    let numEstratto1
let numEstratto2
    numEstratto1=Math.floor(Math.random()*10)+1
    numEstratto2=Math.floor(Math.random()*10)+1
    document.getElementById("spanyou").innerHTML=numEstratto1
    document.getElementById("spancpu").innerHTML=numEstratto2
if(numEstratto1>numEstratto2){
    document.getElementById("messaggio").innerHTML="complimenti"
}
else if(numEstratto1<numEstratto2){
    document.getElementById("messaggio").innerHTML="hai perso"
}
else{
    document.getElementById("messaggio").innerHTML="patta"
}
    })
