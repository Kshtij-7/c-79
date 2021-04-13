var namearray = [];

function Submit() {
    var name_1 = document.getElementById("name1").value
    var name_2 = document.getElementById("name2").value
    var name_3 = document.getElementById("name3").value
    var name_4 = document.getElementById("name4").value
    var name_5 = document.getElementById("name5").value;

    namearray.push(name_1)
    namearray.push(name_2)
    namearray.push(name_3)
    namearray.push(name_4)
    namearray.push(name_5)
    console.log(namearray)
    document.getElementById("aftrsub").innerHTML = namearray;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block"; 
    
}

function Sort(){
    namearray.sort();
    console.log(namearray)
    document.getElementById("aftrsub").innerHTML = namearray;
}