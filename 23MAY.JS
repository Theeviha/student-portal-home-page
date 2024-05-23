  document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var users = {
            'vignesh@12345.com': '1234@vignesh',
            'annafausthinaamalathas@gmail.com': 'anna@2002',
            'anne0444:gmail.com': 'anna@2002',
            'perumaltheeviharajiny@gmail.com': 'theebi@11',
          
        };

        if(users[username] === password) {
            alert('Login successful!');
            window.location.href = 'u.html'; // replace with your URL
        } else {
            alert('Invalid username or password.');
        }
    });
