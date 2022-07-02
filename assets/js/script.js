var presentHour = moment().hour();
var inputForms = document.getElementsByTagName("input");
var saveBtn = $('button');
var forms = $('input');

window.setInterval(function () {
    $('#currentDay').html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    // presentHour = moment().hour();
    // renderBackgrounds();
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

function saveContent(event) {
    var formID = $(event.target).prev().attr('id');
    var formContent = $(this).siblings('input').val(); 
    localStorage.setItem(formID, formContent);
}

function renderContent() {
    for (var i = 0; i < forms.length; i++){
    $(forms[i]).val(localStorage.getItem(i+9))
    }
}

saveBtn.on('click', saveContent);

renderBackgrounds();
renderContent();
