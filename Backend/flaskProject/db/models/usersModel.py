from db.initdb import CreateTables

UserType = {
    'id': int,
    'name': str,
    'email': str,
    'password': str
}


class UsersModel:
    def __init__(self):
        self.create_tables = CreateTables()
        self.conn = self.create_tables.return_conn()
        self.c = self.conn.cursor()

    def get_users(self):
        try:
            self.c.execute('''SELECT * FROM users''')
            users = self.c.fetchall()
            print(users)
            return users
        except Exception as e:
            print(e)
            return None

    def get_user(self, user_id):
        try:
            self.c.execute('''SELECT * FROM users WHERE id=?''', (user_id,))
            user = self.c.fetchone()
            return user
        except Exception as e:
            print(e)
            return None

    def add_user(self, user_obj: dict):
        try:
            valid_keys = ['name', 'email', 'password']
            if not all(key in user_obj for key in valid_keys):
                return None
            values = [user_obj[key] for key in valid_keys]
            placeholders = ','.join(['?' for _ in valid_keys])

            query = f'INSERT INTO users ({",".join(valid_keys)}) VALUES ({placeholders})'
            self.c.execute(query, values)
            self.conn.commit()
            return self.c.fetchone()

        except Exception as e:
            print(e)
            return None

    def update_user(self, user_id, user_obj):
        try:
            for key in user_obj:
                self.c.execute('''UPDATE users SET {}=? WHERE id=?'''.format(key), (user_obj[key], user_id))
            self.conn.commit()
            return self.c.arraysize
        except Exception as e:
            print(e)
            return None

    def delete_user(self, user_id):
        try:
            self.c.execute('''DELETE FROM users WHERE id=?''', (user_id,))
            self.conn.commit()
            return self.c.arraysize
        except Exception as e:
            print(e)
            return None

    def validate_user(self, user_obj):
        try:
            valid_keys = ['email', 'password']
            if not all(key in user_obj for key in valid_keys):
                return None
            values = [user_obj[key] for key in valid_keys]
            placeholders = ','.join(['?' for _ in valid_keys])
            query = f'SELECT * FROM users WHERE email=? AND password=?'
            self.c.execute(query, values)
            user = self.c.arraysize
            return user if user else None
        except Exception as e:
            print(e)
            return None
