from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder='template')


@app.route('/')
@app.route('/home')
def home():
    return render_template('calc.html', title='Bread Calc')


@app.route('/about')
def about():
    return render_template('about.html', title='About')


@app.route('/test')
def test_calc():
    return render_template('test_calc.html', title='Test calc')


if __name__ == '__main__':
    app.run(debug=True)
