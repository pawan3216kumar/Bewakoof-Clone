// on men  mouseover

let nav2Mid1 = document.querySelectorAll(".nav2Mid > #men")
let dropDown = document.querySelector('#dropDown')

nav2Mid1.forEach(p => {
    p.addEventListener("mouseover", () => {
        dropDown.style.display = "block"
        dropDown.addEventListener("mouseover", () => {
            dropDown.style.display = "block"
        })
        dropDown.addEventListener("mouseout", () => {
            dropDown.style.display = "none"
        })
    })

    p.addEventListener("mouseout", () => {
        
        dropDown.addEventListener("mouseover", () => {
            dropDown.style.display = "block"
        })
    })
})

// on women mouseOver

let nav2mid2 = document.querySelector(".nav2Mid>#women")

 nav2mid2.addEventListener("mouseover" , ()=>{
        dropDown.style.display = "block"
    })

    nav2mid2.addEventListener("mouseout" , ()=>{
        dropDown.style.display = "none"
    })


    // on mobileCover

   let  nav2mid3 = document.querySelector(".nav2Mid>#cover")
   let dropDown2 = document.querySelector("#dropDown2")
    nav2mid3.addEventListener("mouseover" , ()=>{
        dropDown2.style.display = "block"
    })
    nav2mid3.addEventListener("mouseout" , ()=>{
        dropDown2.style.display = "none"
    })











