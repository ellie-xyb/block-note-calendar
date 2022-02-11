export default class APIService {
    
    static UpdateTask(task_id, body) {

        return fetch(`http://127.0.0.1:8000/api/tasks/${task_id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token e9eab7e0ce3b07946e73e1b434f2d229774b9a4b'
            },
            body: JSON.stringify(body)

        }).then(resp => resp.json());
    }
}