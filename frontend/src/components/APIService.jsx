export default class APIService {
    
    static UpdateTask(task_id, body, token) {

        // need rewrite this fetch to different endpoint later 
        return fetch(`http://127.0.0.1:8000/api/user/tasks/${task_id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json());
    }

    static InsertTask(body, token) {
        return  fetch('http://127.0.0.1:8000/api/user/tasks/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteTask(task_id, token) {
        return  fetch(`http://127.0.0.1:8000/api/user/tasks/${task_id}/`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
    }

    static SignInUser(body) {
        // need rewrite this fetch to different endpoint later 
        // return fetch(`http://127.0.0.1:8000/auth/signin`, {
        return fetch(`http://127.0.0.1:8000/auth/`, {    
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json());
    }

    static SignUpUser(body) {
        // need rewrite this fetch to different endpoint later 
        // return fetch(`http://127.0.0.1:8000/auth/signin`, {
        return fetch(`http://127.0.0.1:8000/auth/`, {    
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json());
    }
}