const server = 'http://127.0.0.1:5000';

function checkIfLogin() {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (!token || !id) {
        window.location.replace('./login.html');
    }
}

function loadPlaylistForUser() {
    fetch(`${server}/service/users/${localStorage.getItem('id')}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then((data) => {
            if (data.length > 0 && Object.prototype.hasOwnProperty.call(data[0], 'id')) {
                let playlists = '';
                for (let i = 0; i < data.length; i += 1) {
                    playlists += `<div class="object">
                                        <div class="squarediv"></div>
                                        <div class="text">
                                            <a href="#play"><span class="name"> ${data[i].title} </span></a>
                                            <span class="artist"> ${data[i].user.username} </span>
                                        </div>
                                    </div>`;
                }
                document.querySelector('.objectholder').innerHTML = playlists;
            } else {
                // error message
                console.log('no playlists');
            }
        })
        .catch((error) => {
            // error message
            console.log(`Fetch error: ${error}`);
        });
}

checkIfLogin();
loadPlaylistForUser();
