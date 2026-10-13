from flask import Flask, request, jsonify

app = Flask(__name__)

# Simple fake news detection logic (demo purpose)
def detect_fake_news(text):
    text_lower = text.lower()

    fake_keywords = [
        "breaking", "shocking", "click here",
        "subscribe now", "fake", "rumor"
    ]

    for word in fake_keywords:
        if word in text_lower:
            return "Fake News"

    return "Real News"


# Home route
@app.route('/')
def home():
    return "Fake News Detection API is Running 🚀"


# Prediction route
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Check if text is provided
    if not data or 'text' not in data:
        return jsonify({"error": "Please provide text"}), 400

    text = data['text']

    result = detect_fake_news(text)

    return jsonify({
        "input_text": text,
        "prediction": result
    })


# Run app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)