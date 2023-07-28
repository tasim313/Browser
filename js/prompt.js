const showAlert = () =>{
    alert('How are you')
}

const lendMoney = () =>{
   const result = confirm("Let's go Tour")
   console.log("result", result)
   if (result === true){
    alert("Tonight at 8 pm")
   }
   else{
    alert("I don't have taka")
   }
}

const getInfo = () =>{
    const result = prompt("Tell me your name")
    console.log(result)
    if(result === null){
        alert("You can not login")
    }
    else{
        alert("You can login")
    }
}