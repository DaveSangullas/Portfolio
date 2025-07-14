//typing animation
var typed = new Typed(".typing", {
    strings: ["","Web Developer.", "Programmer.", "Data Analyst.", "Graphic Designer." , "Video Editor."  , "Troubleshooter."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
 //change navigation bar color on scroll
let section = document.querySelectorAll('.main-container .main-content section');
let navLinks = document.querySelectorAll('.main-container .aside .nav li a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.main-container .aside .nav li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
function sendMail() {
    
    let parms = {     
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
     }
    emailjs.send("service_ct8c03n", "template_xdz8t27", parms)
                    .then(function (response) {
                        alert("Email Sent!");
                        console.log("SUCCESS!", response.status, response.text);
                    }, function (error) {
                        alert("FAILED to send email.");
                        console.error("FAILED...", error);
                    });
}