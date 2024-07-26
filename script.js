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