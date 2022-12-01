function sendMail(params) {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        //  subject : document.getElementById("subject");
    }
    console.log(params);

    const serviceID = "service_2nbj39i";
    const templateID = "template_w06ksnn";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log(res);

            alert("Your message sent successfully.");
        }
    ).catch((err) => console.log(err))
}