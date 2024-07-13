from flask import Flask, request, send_file, jsonify
import fitz  # PyMuPDF
import pandas as pd
import os

app = Flask(__name__)

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text_data = []

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text("text")
        text_data.append(text)
    
    return text_data

def process_text_to_table(text_data):
    table_data = []
    for page in text_data:
        lines = page.split("\n")
        for line in lines:
            row = line.split()
            table_data.append(row)
    
    return table_data

def save_table_to_excel(table_data, excel_path):
    df = pd.DataFrame(table_data)
    df.to_excel(excel_path, index=False)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)
        
        text_data = extract_text_from_pdf(file_path)
        table_data = process_text_to_table(text_data)
        excel_path = file_path.replace('.pdf', '.xlsx')
        save_table_to_excel(table_data, excel_path)

        return send_file(excel_path, as_attachment=True)

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
