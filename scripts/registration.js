let registerForm = document.getElementById("register-form");
document.querySelector(".enter").addEventListener("click", registerIntoPlayer);
const server = "http://127.0.0.1:5000";

clearTokenAndId();

function registerIntoPlayer() {
    fetch(`${server}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: registerForm.username.value, password: registerForm.passwordOne.value, 
                                email: registerForm.email.value})
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
                localStorage.setItem('id', data.id);
                window.location.replace("./index.html");
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('id');
            }
        })
        .catch(error => {
            // const mute = error; 
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            console.log(`Fetch error: ${error}`);
        });
}


function clearTokenAndId() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
}
