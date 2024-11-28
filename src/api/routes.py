"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])  #¿ aca va /singup o /demo ceci ?
def register():

    data= request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    exist_user = User.query.filter_by(email=email).first()
    if exist_user:
        return jsonify({"msg":"El usuario ya existe"}),400
    
    new_user = User(
        name = name,
        email = email , 
        password = password 
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"User created successfully"}),200


        #ceci tengo una pregunta en el post de arriba 
@api.route('/login', methods=['POST'])
def registered():

    data= request.json
    name = data.get("name")
    password = data.get("password")

    pass
