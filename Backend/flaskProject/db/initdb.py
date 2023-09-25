import sqlite3
class CreateTables:
    def __init__(self):
        self.conn = sqlite3.connect('../database.db',check_same_thread=False)
        self.c = self.conn.cursor()

    def return_conn(self):
        return self.conn

    def create_tables(self):
        self.c.execute('''CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )''')
        self.c.execute('''CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            user_id INTEGER NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            status TEXT NOT NULL,            
            FOREIGN KEY (user_id) REFERENCES users (id)
        )''')
        self.conn.commit()

    def drop_tables(self, option=None):
        if option == 'tasks':
            self.c.execute('''DROP TABLE IF EXISTS tasks''')
        elif option == 'users':
            self.c.execute('''DROP TABLE IF EXISTS users''')
        else:
            self.c.execute('''DROP TABLE IF EXISTS tasks''')
            self.c.execute('''DROP TABLE IF EXISTS users''')
        self.conn.commit()



