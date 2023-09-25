import json
from flask import Flask, request, make_response
from db.models.usersModel import UsersModel

app = Flask(__name__)

class UsersController:
    def __init__(self):
        self.users_model = UsersModel()

    @app.route('/users', methods=['GET'])
    def get_users(self):
        users = self.users_model.get_users()
        if users:
            return make_response(json.dumps(users), 200)
        else:
            return make_response(json.dumps({'error': 'Erro ao buscar usuário'}), 500)

    @app.route('/users/<int:user_id>', methods=['GET'])
    def get_user(self, user_id):
        user = self.users_model.get_user(user_id)
        if user:
            return make_response(json.dumps(user), 200)
        else:
            return make_response(json.dumps({'error': 'Erro ao buscar usuário'}), 500)

    @app.route('/users', methods=['POST'])
    def create_user(self):
        user_obj = request.get_json()
        user_id = self.users_model.add_user(user_obj)
        if user_id:
            return make_response(json.dumps({'message': 'User created successfully', 'user_id': user_id}), 200)
        else:
            return make_response(json.dumps({'error': 'Error creating user'}), 500)

    @app.route('/users/<int:user_id>', methods=['PUT'])
    def update_user(self, user_id):
        user_obj = request.get_json()
        updated_rows = self.users_model.update_user(user_id, user_obj)
        if updated_rows:
            return make_response(json.dumps({'message': 'User updated successfully', 'updated_rows': updated_rows}), 200)
        else:
            return make_response(json.dumps({'error': 'Error updating user'}), 500)

    @app.route('/users/<int:user_id>', methods=['DELETE'])
    def delete_user(self, user_id):
        deleted_rows = self.users_model.delete_user(user_id)
        if deleted_rows:
            return make_response(json.dumps({'message': 'User deleted successfully', 'deleted_rows': deleted_rows}), 200)
        else:
            return make_response(json.dumps({'error': 'Error deleting user'}), 500)

    @app.route('/users/login', methods=['POST'])
    def validate_user(self, user_obj):
        user = self.users_model.validate_user(user_obj)
        if user:
            return make_response(json.dumps(user), 200)
        else:
            return make_response(json.dumps({'error': 'Error validating user'}), 500)