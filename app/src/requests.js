const server = 'http://127.0.0.1:5000';

function getUserTokenAndId(username, password) {
    fetch(`${server}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
        .then((response) => {
            if (response.status > 300 && (response.status < 400 || response.status > 410)) {
                throw Error(response.statusText);
            } else if (!response.ok) {
                response.json().then((data) => {
                    console.log('ERROR');
                });
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then((data) => {
            if (Object.prototype.hasOwnProperty.call(data, 'token')) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                window.location.replace('./index.html');
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('id');
            }
        })
        .catch((error) => {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            console.log('ERROOORRR');
        });
}