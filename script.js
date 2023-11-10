const textToType = "I seek a dynamic role utilizing my frontend, backend, and Android dev skills as a Computer Science enthusiast. I thrive on tech challenges, crave innovation in a diverse, collaborative environment. Work-life balance matters, open to leadership and remote options.";

const typingElement = document.getElementById("typed-output");
const cursorElement = document.getElementById("cursor");

let index = 0;

function randomSpeed() {
    return Math.floor(Math.random() * (100 - 50)) + 50;
}

function typeCharacter() {
    if (index < textToType.length) {
        const delay = Math.random() < 0.2 ? randomSpeed() * 2 : randomSpeed();
        setTimeout(function () {
            typingElement.textContent += textToType[index];
            index++;
            cursorElement.style.visibility = "visible"; // Show cursor
            typeCharacter();
        }, delay);
    } else {
        cursorElement.style.visibility = "visible"; // Show cursor
        setTimeout(eraseText, 1500); // Pause after typing
    }
}

function eraseText() {
    if (index > 0) {
        const delay = randomSpeed();
        setTimeout(function () {
            typingElement.textContent = textToType.substring(0, index - 1);
            index--;
            cursorElement.style.visibility = "visible"; // Show cursor
            eraseText();
        }, delay);
    } else {
        cursorElement.style.visibility = "visible"; // Show cursor
        setTimeout(typeCharacter, 1500); // Pause after erasing
    }
}

// Start typing
typeCharacter();



let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = ()=>
{
    sections.forEach(sec => 
        {
            let top = window.scrollY;
            let offset = sec.offsetTop-100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')
            
            if(top>=offset && top<offset+height)
            {
                navLinks.forEach(links =>
                    {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href* ' + id + ']').classList.add('active');
                    })
            }
        })
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
}