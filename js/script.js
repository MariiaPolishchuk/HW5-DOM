document.querySelector('.login-btn').addEventListener('click', () => {
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;
    document.querySelector('.login-result').innerHTML = 'name: ' + username + ' | pass: ' + password;

    localStorage.setItem('user', JSON.stringify({name: username, pass: password}));
});