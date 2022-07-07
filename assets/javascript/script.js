var presentHour = moment().hour();
var saveBtn = $('button');
var forms = $('input');
var clearBtn = $('#clear');

// time display and updates colors if time shifts during active use
window.setInterval(function () {
    $('#currentDay').html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    renderBackgrounds();
}, 1000);

// applies color coding to forms
function renderBackgrounds() {
    for (var i = 0; i < forms.length; i++) {
        if (parseInt(forms[i].id) < presentHour) {
            forms[i].classList.add('past');
        } else if (parseInt(forms[i].id) === presentHour) {
            forms[i].classList.add('present');
        } else {
            forms[i].classList.add('future');
        }
    }
}

// loads content from local storage
function renderContent() {
    for (var i = 0; i < forms.length; i++){
    $(forms[i]).val(localStorage.getItem(i+9))
    }
}

// saves content in sibling form to local storage
function saveContent(event) {
    var formID = $(event.target).prev().attr('id');
    var formContent = $(this).siblings('input').val(); 
    localStorage.setItem(formID, formContent);
}

saveBtn.on('click', saveContent);
clearBtn.on('click', function() {
    localStorage.clear();
    renderContent();
})

renderBackgrounds();
renderContent();
