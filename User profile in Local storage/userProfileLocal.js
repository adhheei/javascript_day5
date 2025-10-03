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
    // document.getElementById("display").innerHTML=`
    // name=${userobj.name}<br>
    // age=${userobj.age}<br>
    // address=${userobj.address}
    // `

    var user=JSON.stringify(userobj);
    localStorage.setItem("data",user)
    // document.getElementById("display").innerHTML=user;

    var user=localStorage.getItem("data");
    var retrievedobject=JSON.parse(user);
    console.log(retrievedobject)
}

)
