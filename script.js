//Background scroll
$(function () {
    'use strict';
    var view = $(window).height();
    $('.part').height(view).scrollie({
        scrolloffset: -50,
        scrollingInView: function (elem) {
            var bgColor = elem.data('background')
            $('body').css('background-color', bgColor);
        }
    });
});

//Text scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Emailing function for contact section
function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_w51cvda", "template_1nbr7qq", params).then(function (res) {
        alert("Success! Your message was sent.");
    })

}