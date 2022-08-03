let title = document.querySelector("#title_input");
let noun = document.querySelector("#noun");
let verb = document.querySelector("#verb");
let adjective = document.querySelector("#adjective");
let result = document.querySelector("#story_result")
let form = document.querySelector(".form_container")

let submit = document.querySelector("#submit_button");
let mainTitle = document.querySelector("#main_title");

        
title.onkeyup = function() {
    let userInput = title.value;
    mainTitle.innerHTML = userInput;
}

submit.onclick = function (event) {
    console.log(event);
    event.preventDefault();

    if(title.value == "" || noun.value == "" || verb.value == "" || adjective.value == "") {
        alert("Fill in all fields!");
    }
    else {
        result.innerHTML = (`Last night I ate a ${noun.value}, and today I just had to ${verb.value}. What a ${adjective.value} day!`);
        form.style.display = "none";
    }
}   





