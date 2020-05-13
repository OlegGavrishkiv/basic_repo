let admin = "Admin";
let cancel = "Cancel";
let pass = "TheMaster";
let a = prompt("Whose there?" + "\n Other" + "\n Cancel" + "\n Admin");
let p;

if (a === admin) {
    p = prompt("Password?");
    if (p === pass) alert("Welcome!");
    else if (p === cancel) alert("Canceled");
    else alert("Wrong password");
} else if (a === cancel){
    alert("Canceled");
} else alert("I dont know you");