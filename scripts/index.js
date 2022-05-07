let loginForm = document.getElementById("login-form");
document.querySelector(".enter").addEventListener("click", loginIntoPlayer);


function loginIntoPlayer() {
    fetch('http://127.0.0.1:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: loginForm.username.value, password: loginForm.password.value})
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.status);
            } else {
                return(response.json());
            }
        })
        .then((data) => {
            if (data.hasOwnProperty('token')){
                localStorage.setItem('token', data.token);
            } else {
                localStorage.removeItem('token');
            }
        })
        .catch(error => {
            // const mute = error; 
            localStorage.removeItem('token');
            console.log(`Fetch error: ${error}`);
        });
}
