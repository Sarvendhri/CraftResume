function addNewWEField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2)
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewSKField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("sk");
    let weAddButtonOb = document.getElementById("skAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewLField()
{
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("l");
    let weAddButtonOb = document.getElementById("lAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function GenerateResume()
{
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    document.getElementById("nT").innerHTML=nameField;
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("linkT").innerHTML = document.getElementById("LinkedField").value;

    document.getElementById("objT").innerHTML = document.getElementById("obj").value;

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    let sks = document.getElementsByClassName("skField");
    let str2 = "";
    for (let e of sks) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML = str2;

    let file = document.getElementById("image").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);
    
    reader.onloadend = function(){
        document.getElementById("imgT").src=reader.result;
    };
    
}