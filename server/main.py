from flask import request, jsonify
from config import app, database
from models import Friend


@app.route("/friends", methods = ["GET"])
def get_friends():
    friends = Friend.query.all()
    friends_json = list(map(lambda friend: friend.to_json(), friends))

    return jsonify({"friends": friends_json})


@app.route("/add_friend", methods=["POST"])
def add_friend():
    full_name = request.json.get("fullName")
    email = request.json.get("email")
    workplace = request.json.get("workplace")

    if not full_name or not email or not workplace:
        return (
            jsonify({"message": "incomplete data"}), 
            400
        )
    
    added_friend = Friend(full_name = full_name, email = email, workplace = workplace)

    try:
        database.session.add(added_friend)
        database.session.commit()
    except Exception as e:
        return (
            jsonify({"message": str(e)}), 
            400
        )
    
    return (
        jsonify({"message": "friend added!"}), 
        201
    )


if __name__ == "__main__":
    with app.app_context():
        database.create_all()

    app.run(debug = True)