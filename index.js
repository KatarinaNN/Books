const searchInput=document.querySelector("#search");
const books=document.querySelectorAll(".book");

searchInput.addEventListener("keyup", function(event){
    const word=event.target.value.toLowerCase();
    books.forEach(book=>{
        book.querySelector("a").textContent.toLowerCase().includes(word) || book.querySelector("h4").textContent.toLowerCase().includes(word) ? (book.style.display="block") : (book.style.display="none");
    })
})
