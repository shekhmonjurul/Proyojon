
const display = document.querySelector("#Display")
const hire = document.querySelector("#Hire")
const worker = document.querySelector("#Worker")




hire.addEventListener(
    "click", ()=>{
           document.body.innerHTML = displayLogIn("hire")
      
            const _log  = document.querySelector("#hire")
            _log.addEventListener(
                "click", ()=>{
                    console.log("this _log is hire")
                }
            )
           
        
    }
)

worker.addEventListener(
    "click", ()=>{
        
        document.body.innerHTML=displayLogIn("worker")
        const worker = document.querySelector("#worker")
        worker.addEventListener(
            "click", 
            ()=>{
                document.body.innerHTML= _dispalyJOb()
       const _log = document.querySelector("#log")
       _log.addEventListener(
        "click",
         ()=>{
            console.log("_log is clicked")
        }

       )
            }

        )
    }
)


function _dispalyJOb(){

   return `<div id="JobInformarion" class="ParsonalJob">
   <h1>Job Information</h1>
   <form action="">

       <span>Job Name:</span><input type="text" placeholder="Enter your name"><br><br>
       <span>Experinece:</span><input type="text" placeholder="Have you experinece, Yes or NO"><br><br>
       

   </form>
   <button id = "log">Submit</button>
</div>
`
}

function displayLogIn(name){
   
        return document.body.innerHTML= ` <div id="ParsonalInformation" class="ParsonalJob">
        <h1>Porsonal Information</h1>
        <form action="">
    
             <span>Name:</span><input type="text" placeholder="Enter your name"><br><br>
             <span>Father's Name:</span><input type="text" placeholder="Enter your father's name"><br><br>
             <span>Mother's Name:</span><input type="text" placeholder="Enter your mother name"><br><br>
             <span>NID:</span><input type="text" placeholder="Enter your NID "><br><br>
             <span>Date of Brith:</span><input type="text" placeholder="Enter your date of brith"><br><br>
             <span>Permanet Address:</span><input type="text" placeholder="Enter Your permanet address"><br><br>
             <span>Present Address:</span><input type="text" placeholder="Enter your present address:"><br><br>
    
        </form>
        <button id= "${name}">Submit</button>
    </div>
    `
}