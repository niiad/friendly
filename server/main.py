from flask import request, jsonify
from config import app, database
from models import Friend


@app.route("/friends", methods = ["GET"])
def get_friends():
    friends = Friend.query.all()
    friends_json = list(map(lambda friend: friend.to_json(), friends))

    return jsonify({"friends": friends_json})


if __name__ == "__main__":
    with app.app_context():
        database.create_all()

    app.run(debug = True)