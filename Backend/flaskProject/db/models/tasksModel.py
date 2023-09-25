from db.initdb import CreateTables
from utils import Utils
class TasksModel:
    def __init__(self):
        self.conn = CreateTables().return_conn()
        self.c = self.conn.cursor()
        self.utils = Utils()

    def get_tasks(self):
        self.c.execute('''SELECT * FROM tasks''')
        tasks = self.c.fetchall()
        columns = [description[0] for description in self.c.description]
        return self.utils.convertListAndTupleToDict(tasks, columns, list=True)

    def get_task(self, task_id):
        self.c.execute('''SELECT * FROM tasks WHERE id=?''', (task_id,))
        task = self.c.fetchone()
        columns = [description[0] for description in self.c.description]
        return self.utils.convertListAndTupleToDict(task, columns)

    def add_task(self, task_obj: dict):
        try:
            valid_keys = ['title', 'description', 'user_id', 'status']
            if not all(key in task_obj for key in valid_keys):
                return None
            values = [task_obj[key] for key in valid_keys]
            placeholders = ','.join(['?' for _ in valid_keys])
            query = f'INSERT INTO tasks ({",".join(valid_keys)}) VALUES ({placeholders})'
            self.c.execute(query, values)
            self.conn.commit()
            task = self.c.fetchone()
            columns = [description[0] for description in self.c.description]
            return self.utils.convertListAndTupleToDict(task, columns)
        except Exception as e:
            print(e)
            return None

    def update_task(self, task_id, task_obj):
        for key in task_obj:
            self.c.execute('''UPDATE tasks SET {}=? WHERE id=?'''.format(key), (task_obj[key], task_id))
        self.conn.commit()
        task = self.c.fetchone()
        columns = [description[0] for description in self.c.description]
        return self.utils.convertListAndTupleToDict(task, columns)

    def delete_task(self, task_id):
        try:
            self.c.execute('''DELETE FROM tasks WHERE id=?''', (task_id,))
            self.conn.commit()
            if self.c.arraysize == 0:
                return None
            self.c.execute('''SELECT * FROM tasks WHERE id=?''', (task_id,))
            task = self.c.fetchone()
            columns = [description[0] for description in self.c.description]
            return self.utils.convertListAndTupleToDict(task, columns)
        except Exception as e:
            print(e)
            return None

