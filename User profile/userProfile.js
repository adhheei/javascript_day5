const usernameinput=document.getElementById("username");
const ageinput=document.getElementById("age");
const addressinput=document.getElementById("address");
const submt=document.getElementById("submit");

submt.addEventListener("click",()=>{
    var userobj={
        name:usernameinput.value,
        age:ageinput.value,
        address:addressinput.value
    }

    // console.log(userobj);
    document.getElementById("display").innerHTML=`
    name=${userobj.name}<br>
    age=${userobj.age}<br>
    address=${userobj.address}
    `
}

)
