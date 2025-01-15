document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (validateEmail(email) && message.trim() !== '') {
      alert('Message submitted successfully!');
      // You can add more code here to handle the form submission
      this.submit();
    } else {
      alert('Please fill out all fields correctly.');
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  