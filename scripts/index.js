let objectHolder = document.querySelector(".objectholder");
const server = "http://127.0.0.1:5000";

loadPlaylistForUser();

function loadPlaylistForUser() {
    fetch(`${server}/service/users/${localStorage.getItem('id')}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }})
        .then((response) => {
            if (!response.ok) {
                throw Error(response.status);
            } else {
                return(response.json());
            }
        })
        .then((data) => {
            if (data.length > 0 && data[0].hasOwnProperty('id')){
                console.log(data);
                console.log(data[0]);
                console.log(data[0].title);
                let playlists = "";
                for (let i = 0; i < data.length; i++){
                    playlists += `<div class="object">
                                        <div class="squarediv"></div>
                                        <div class="text">
                                            <a href="#play"><span class="name"> ${data[i].title} </span></a>
                                            <span class="artist"> ${data[i].user_id} </span>
                                        </div>
                                    </div>`;
                }
                document.querySelector(".objectholder").innerHTML = playlists;
            } else {
                console.log("no playlists");
            }
        })
        .catch(error => {
            // const mute = error; 
            console.log(`Fetch error: ${error}`);
        });
}
