let url = "https://quote-garden.onrender.com/api/v3/quotes";

let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let quote = await getQuotes();
    console.log(quote);
    let h3 = document.querySelector(".result");
    h3.innerText=quote;
})

async function getQuotes(){
    try{
        let res = await axios.get(url);
        //console.log(res.data);
        let index = Math.floor((Math.random()*10));
        let d = res.data;
        return d.data[index].quoteText;
    }
    catch(error){
        return "quote not found";
    }
}
