let username= prompt("Who's there?"); 
if(username==="Admin"){
    let password = prompt("Enter your password"); 
    if(password=="TheMaster"){
        alert("Welome"); 
    } else if(password===" " || password===null){
        alert("Cancelled"); 
    }else{
        alert("Wrong password"); 
    }
    } else if(username===" " || username===null){
        alert("cancelled. . .")
    }else{
        alert("Fuck You. . ."); 
    }
