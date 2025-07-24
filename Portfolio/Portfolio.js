document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});


const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_mc5lazm', 'template_q4obd6u', this)
    .then(() => {
      messageDiv.textContent = "Mensaje enviado correctamente. ¡Gracias por contactarme!";
      messageDiv.style.color = "lightgreen";
      form.reset();
    }, (error) => {
      messageDiv.textContent = "Error al enviar el mensaje, por favor inténtalo de nuevo.";
      messageDiv.style.color = "tomato";
      console.error('EmailJS error:', error);
    });
});
