from flask import Flask, request
from Controllers.tasksController import TaskController
from Controllers.usersController import UsersController
from db.initdb import CreateTables
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
try:
    create_tables = CreateTables()
except Exception as e:
    print(e)
    exit(1)

task_controller = TaskController()
user_controller = UsersController()

app.add_url_rule('/tasks', view_func=task_controller.get_tasks, methods=['GET'])
app.add_url_rule('/tasks/<int:task_id>', view_func=task_controller.get_task, methods=['GET'])
app.add_url_rule('/tasks', view_func=task_controller.create_task, methods=['POST'])
app.add_url_rule('/tasks/<int:task_id>', view_func=task_controller.update_task, methods=['PUT'])
app.add_url_rule('/tasks/<int:task_id>', view_func=task_controller.delete_task, methods=['DELETE'])
app.add_url_rule('/users', view_func=user_controller.get_users, methods=['GET'])
app.add_url_rule('/users/<int:user_id>', view_func=user_controller.get_user, methods=['GET'])
app.add_url_rule('/users', view_func=user_controller.create_user, methods=['POST'])
app.add_url_rule('/users/<int:user_id>', view_func=user_controller.update_user, methods=['PUT'])
app.add_url_rule('/users/<int:user_id>', view_func=user_controller.delete_user, methods=['DELETE'])
app.add_url_rule('/users/login', view_func=user_controller.validate_user, methods=['POST'])

create_tables.create_tables()


if __name__ == '__main__':
    app.run()
