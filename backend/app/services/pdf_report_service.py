from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import os

def generate_pdf(data):

    os.makedirs("reports", exist_ok=True)

    file_path = "reports/analysis_report.pdf"

    doc = SimpleDocTemplate(file_path)

    styles = getSampleStyleSheet()

    story = []

    story.append(Paragraph("<b>AI NEWS INTELLIGENCE REPORT</b>", styles["Title"]))

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(Paragraph(f"<b>Summary:</b> {data['summary']}", styles["BodyText"]))

    story.append(Paragraph(f"<b>Sentiment:</b> {data['sentiment']}", styles["BodyText"]))

    story.append(Paragraph(f"<b>Category:</b> {data['category']}", styles["BodyText"]))

    story.append(Paragraph(f"<b>Keywords:</b> {', '.join(data['keywords'])}", styles["BodyText"]))

    story.append(Paragraph(f"<b>Word Count:</b> {data['word_count']}", styles["BodyText"]))

    story.append(Paragraph(f"<b>Character Count:</b> {data['character_count']}", styles["BodyText"]))

    doc.build(story)

    return file_path