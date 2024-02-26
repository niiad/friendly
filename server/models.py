from config import database

class Friend(database.Model):
    id = database.Column(database.Integer, primary_key = True)
    full_name = database.Column(database.String(100), unique = False, nullable = False)
    email = database.Column(database.String(120), unique = True, nullable = False)
    workplace = database.Column(database.String(150), unique = False, nullable = False)
    

    def to_json(self):
        return {
            "id": self.id,
            "fullName": self.full_name,
            "email": self.email,
            "workplace": self.workplace
        }