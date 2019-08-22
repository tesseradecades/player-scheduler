import flask

app = flask.Flask('__main__')

@app.route("/")
def my_index():
    return flask.render_template("index.html",token="Hello Flask+React")

@app.route("/hello")
def hello():
    return flask.jsonify({"hello":"world"})

app.run(debug=True)