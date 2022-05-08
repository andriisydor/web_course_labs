let loginForm = document.getElementById("login-form");
document.querySelector(".enter").addEventListener("click", loginIntoPlayer);
const server = "http://127.0.0.1:5000";

clearTokenAndId();

function loginIntoPlayer() {
    fetch(`${server}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: loginForm.username.value, password: loginForm.password.value})
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
            // const mute = error; 
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            // console.log(`Fetch error: ${error}`);
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
