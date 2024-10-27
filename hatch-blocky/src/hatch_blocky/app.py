from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/')
# def hello():
#     return "Hello, World!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)