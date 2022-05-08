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
                throw Error(response.statusText);
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
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            showErrorMessage(error);
        });
};


function clearTokenAndId() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
};


function closeErrorMessage() {
    document.querySelector(".alert").style.display="none";
    document.querySelector(".objectholder").style.display="block";
};


function showErrorMessage(error) {
    let errorMessage = document.querySelector(".alert");
    errorMessage.innerHTML = `<span class="closebtn">&times;</span> 
                            <strong>Error!</strong> ${error}`;
    errorMessage.style.display='block';
    document.querySelector(".objectholder").style.display="none";
    document.querySelector(".closebtn").addEventListener("click", closeErrorMessage);
};