let form = document.querySelector("form");
let data = []

function handleSubmit(e){
    e.preventDefault() 
      let inputs = e.target
    //   console.log(inputs)--imp *
      let name = inputs[0].value
      let email = inputs[1].value;
      let number = inputs[2].value;
      let password = inputs[3].value;

      let narr = data.filter(function(ele , i){
         return ele.name === name;
      })
        
        if(narr.length>0){
            alert("username is already taken")
        }else{

            let obj = {
                name : name,
                email : email,
                number : number,
                password : password 
            } 
            
            data.push(obj)  
            saveData()
            console.log(data)
            alert("Registration Successfully")
            window.location.href= "index.html"
        }
}

function saveData(){
    localStorage.setItem("data" , JSON.stringify(data))
}

function loadData(){
    let storeData = JSON.parse(localStorage.getItem("data"))

    if(saveData){
        data = storeData 
    }
}

form.addEventListener("submit" , function(event){
          handleSubmit(event)
})



// ---login page---

let form2 = document.querySelector("#form")

function loginData(e){
   e.preventDefault()
   let inputs = e.target
   let email = inputs[0].value;
   let password = inputs[1].value

let narr = data.filter(function(ele , i){
      return (ele.email === email) && (ele.password === password)
})

if(narr.length>0){
    alert("logged in successfully")
    window.location.href = "product.html"; 
}else{
    alert("Incorrect email and password")
}
}

form2.addEventListener("submit" , loginData)

loadData()





