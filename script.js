let string = "";
let buttons = document.querySelectorAll(" .b1");
Array.from(buttons).forEach((b1)=>{
b1.addEventListener('click', (e)=>{
    if(e.target.innerHTML == "="){ 
        try{
       string = eval(string);
        document.querySelector('input').value = string;
        }
        catch(error){
            string="";
            document.querySelector('input').value = string;
        
        }
        }
        else  if(e.target.innerHTML == "C"){
                   
           string ="";
            document.querySelector('input').value = string;
             
        }
     else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
})
}
)
