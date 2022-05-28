
const createPlaylist = (title, user, privatePlaylist, token, setError, setResultMessage, navigate) => {
    const requestLink ='http://127.0.0.1:5000//playlist';
    fetch(requestLink, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            user_id: user,
            private: privatePlaylist,
        }),
    })
      .then(res => {
            if (res.status !== 200) {
                setError(true);
            }
            return res.json();
    })
      .then(
        (result) => {
            if ('message' in result || 'msg' in result){
                setResultMessage(result);
            } else if('id' in result) {
                navigate(`/playlist/${result.id}`);
            }
        },
        (error) => {
            setError(true);
            setResultMessage(error);
        }
        )
}

export default createPlaylist;
