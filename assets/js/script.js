var presentHour = moment().hour();
var inputForms = document.getElementsByTagName("input");

window.setInterval(function () {
    if (presentHour !== moment().hour()) {
        renderBackgrounds();
    }
    $('#currentDay').html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    presentHour = moment().hour();
}, 1000);




function renderBackgrounds() {
    for (var i = 0; i < inputForms.length; i++) {
        if (parseInt(inputForms[i].id) < presentHour) {
            inputForms[i].classList.add('past');
        } else if (parseInt(inputForms[i].id) === presentHour) {
            inputForms[i].classList.add('present');
        } else {
            inputForms[i].classList.add('future');
        }
    }
}

//     }
//         console.log(this.id);
//         if (this.id < presentHour) {
//             this.classList.add("past");
//             console.log ("step 1");
//         } else if (this.id === presentHour) {
//             this.classList.add("present");
//             console.log ("step 2");
//         } else {
//             this.classList.add("future");
//             console.log ("step 3");
//         }


renderBackgrounds();
