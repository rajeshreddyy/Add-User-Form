let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let statusEl = document.getElementById("status");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

let addUserFormEl = document.getElementById("addUserForm");

let formData = {
    name : "",
    email : "",
    status : "Active",
    gender : ""
};

statusEl.addEventListener("change", function(event){
    formData.status = event.target.value;
});
genderMaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
});
genderFemaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
});


function sendTheRequest(){
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method : "POST",
        headers : {
            "Content-Type":"application/json",
            Accept: "application/json",
            Authorization: "Bearer cac876a104b9b3fdf42b9e2f071e8f655a60e0ac18623de7a0f5f1c786393c7f"
        },
        body : JSON.stringify(formData)
    };
    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
    nameEl.value = "";
    emailEl.value = "";

}

addUserFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    formData.name = nameEl.value;
    formData.email = emailEl.value;
    if(formData.name === ""){
        nameErrMsg.textContent = "Required*";
    }
    else{
        nameErrMsg.textContent = "";
    }
    if(formData.email === ""){
        emailErrMsg.textContent = "Required*";
    }
    else{
        emailErrMsg.textContent = "";
    }
    sendTheRequest();
});

console.log(formData);
