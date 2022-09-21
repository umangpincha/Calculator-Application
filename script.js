let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    // console.log(button);
    //when any button is clicked on calculator
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=")
            string = eval(string);
        else if (e.target.innerHTML == 'C')
            string = ""
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
        }
        document.querySelector("input").value = string;
    });
}); 