from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder='template')


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', title='Bread Calc')


@app.route('/about')
def about():
    return render_template('about.html', title='About')


if __name__ == '__main__':
    app.run(debug=True)
