document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init({
        publicKey: 'QGls0Jha4EXq-D09c',
    });

    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const serviceID = 'service_ebru6ds';
        const templateID = 'template_2ir2vyd';

        emailjs.sendForm(serviceID, templateID, contactForm).then(
            () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                contactForm.reset();
            },
            (error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send your message. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('EmailJS Error:', error);
            }
        );
    });
});
