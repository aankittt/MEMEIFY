const generatememebutton=document.querySelector(".meme-generator .generate-meme-button");
const memeimage=document.querySelector(".meme-generator img");
const memeauthor=document.querySelector(".meme-generator .meme-author");

const memetitle=document.querySelector(".meme-generator .meme-title");

const updatedetails = (url,title,author)=>{
    memeimage.setAttribute("src",url);
    memeauthor.innerHTML=author;
    memetitle.innerHTML=title;

}

const generatememe =()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then((data)=>{
        updatedetails(data.url,data.title,data.author);   
    });
};

generatememebutton.addEventListener("click",generatememe);

generatememe();



