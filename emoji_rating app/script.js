let starEl = document.querySelectorAll(".starEl");
const colors = ["red", "orange", "lightblue", "lightgreen", "green"]


updateEmoji(0)

starEl.forEach((star, index)=>{
    star.addEventListener("click", ()=>{
        updateEmoji(index)
    })
});

function updateEmoji(index){
    let emojiEl = document.querySelectorAll(".emojiEl");

    starEl.forEach((star, idx) =>{
        if(idx < index + 1){
            star.classList.add("active")
        }else{
            star.classList.remove("active")
        }
    });

    emojiEl.forEach((emoji) =>{
        emoji.style.transform = `translateX(${index * - 55}px)`
        emoji.style.color = colors[index]
    })
}