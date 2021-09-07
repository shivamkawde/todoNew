let container= document.querySelector(".inputs")



let arr=JSON.parse(localStorage.getItem("data"))==null?[]:JSON.parse(localStorage.getItem("data"))
let click=true
//let container= document.querySelector(".inputs")
// document.querySelector(".btn").addEventListener("click",()=>{    
//  let input=document.createElement("input")    
//  let Div=document.createElement("div")
//  input.classList.add("write")
//  var checkbox = document.createElement('input');
//  checkbox.type = "checkbox";
//  checkbox.id = "checkbox";
//  Div.classList.add("data")
//  Div.append(checkbox)
//  Div.append(input)
//  container.append(Div)
// checkbox.addEventListener("click",function(){
//       arr.push(input.value)
// localStorage.setItem("data",JSON.stringify(arr))

// })

// })

let task=document.querySelector(".task")
task.addEventListener("click",()=>{
    task2.classList.remove("taskBackground")
    task.classList.add("taskBackground")
    click=true
    let cls=document.querySelectorAll(".data")
    console.log(cls[0])

   for(let i=0;i<cls.length;i++)
   {
       cls[i].remove()
   }


    document.querySelector(".btn").addEventListener("click",()=>{    
        let input=document.createElement("input")    
        let Div=document.createElement("div");
       
        input.classList.add("write")
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        Div.classList.add("data")
        Div.append(checkbox)
        Div.append(input)
        container.append(Div)
       checkbox.addEventListener("click",function(){
             arr.push(input.value)
       localStorage.setItem("data",JSON.stringify(arr))
       
       })
       
    


       })
       









})
let task2=document.querySelector(".task2")

//localstorage se fetch krwane wala code
task2.addEventListener("click",()=>{
    task.classList.remove("taskBackground")
    task2.classList.add("taskBackground")

     console.log(arr.length)
    if(localStorage.getItem("data")!=null&& (JSON.parse(localStorage.getItem("data")).length!=arr.length||click)){
          click=false
        console.log(localStorage.getItem("data"))
        let storestr=localStorage.getItem("data")
        let dele
        let s=JSON.parse(storestr)
        console.log(s[0])
        for(let i=0;i<s.length;i++)
        {
            let inp = document.createElement("input")
            let div= document.createElement("div")

            div.classList.add("data")
            dele=document.createElement("button")
            dele.innerHTML="X"
            let checkbox = document.createElement("input")
            checkbox.type="checkbox"
            checkbox.checked=true
            inp.value=s[i]
             div.append(checkbox)
            div.append(inp)
            div.append(dele)
            container.append(div)
          
          
          //delete krne wala code
            dele.addEventListener("click",(e)=>{
             
                let vv=JSON.parse(localStorage.getItem("data"))
                for(let i=0;i<vv.length;i++){
                 if(inp.value==vv[i])
                 {
                    vv.splice(i,1);
                    div.remove()
                 }
            }
    
              localStorage.setItem("data",JSON.stringify(vv))
    
            })
        }
      

        }
  
        

      
    




})