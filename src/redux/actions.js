export const loadUsers = () => {
    return dispatch => {
        dispatch({
            type: 'users/load/start'
        })

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: 'users/load/success',
                payload: json
            })
        })
    }
}