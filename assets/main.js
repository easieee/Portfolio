const text = document.querySelector(".animate_text");

const textload = () => {
    setTimeout(() => {
        text.textContent = "Electronics Technician";
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 3500);
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    }, 11000);
}
textload();
setInterval(textload, 14455);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        number : document.getElementById("number").value
    }
    emailjs.send("service_portfoliocontact", "template_qbnphmd", parms).then(alert("Email Sent!!"))
}

