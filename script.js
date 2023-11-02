
 

function datas(data,result){
    let itext =document.querySelector(".itext")
    if(data.title){itext.innerHTML=`can't find the meaning of ${result}`}
    else{
   // console.log(data);
    itext.style.display="none"
    document.querySelector(".text").style.display="block"
    document.getElementById("para").innerHTML=data[0].word
    document.getElementById("span").innerHTML=data[0].meanings[0].partOfSpeech + data[0].phonetics[1].text
    document.getElementById("span1").innerHTML=data[0].meanings[0].definitions[0].definition
    document.getElementById("span2").innerHTML=data[0].meanings[0].definitions[0].example
    document.getElementById("span3").innerHTML=data[0].meanings[0].synonyms
   

}}


 function search(){
    let result= document.getElementById("input").value
    let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${result}`
    fetch(api)
    .then(res=>res.json())
    .then(data=> datas(data,result))
    
}

function aa(){
    let result= document.getElementById("input").value
    let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${result}`
    fetch(api ,{method : "GET"})
    .then(res=>res.json())
    .then(data=> allu(data) )
}
function allu(data){
 audio = new Audio(data[0].phonetics[1].audio)
   audio.play()
}
 
