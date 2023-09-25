import json
from flask import Flask, request, make_response
from db.models.tasksModel import TasksModel

app = Flask(__name__)

class TaskController:
    def __init__(self):
        self.tasks_model = TasksModel()

    @app.get('/tasks')
    def get_tasks(self):
        tasks = self.tasks_model.get_tasks()
        return json.dumps(tasks)

    @app.get('/tasks/<int:task_id>')
    def get_task(self, task_id):
        task = self.tasks_model.get_task(task_id)
        return json.dumps(task)

    @app.post('/tasks')
    def create_task(self):
        tasks_obj = request.json
        task_response = self.tasks_model.add_task(tasks_obj)
        if task_response is None:
            make_response('Invalid task object', 400)
            return 'Invalid task object'
        return 'Create task ' + str(task_response)


    @app.put('/tasks/<int:task_id>')
    def update_task(self, task_id):
        tasks_obj = request.json
        task_response = self.tasks_model.update_task(task_id, tasks_obj)
        return 'Update task ' + str(task_response)



    @app.delete('/tasks/<int:task_id>')
    def delete_task(self, task_id):
        task_response = self.tasks_model.delete_task(task_id)
        return 'Delete task ' + task_response
