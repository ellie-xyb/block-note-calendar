export default class APIService {
    
    static UpdateTask(task_id, body) {

        // need rewrite this fetch to different endpoint later 
        return fetch(`http://127.0.0.1:8000/api/tasks/${task_id}/`, {
            'method': 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                // need change this token and fetch to hide it later
                'Authorization': 'Token 58b70ca287628f1e09d5eddb873c09a3323a78af'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json());
    }

    static InsertTask(body) {
        return  fetch('http://127.0.0.1:8000/api/user/tasks/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                // need change this token and fetch to hide it later
                'Authorization': 'Token 58b70ca287628f1e09d5eddb873c09a3323a78af'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}