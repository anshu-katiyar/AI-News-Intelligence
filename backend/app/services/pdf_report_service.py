from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak
)

from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.lib.enums import TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

from xml.sax.saxutils import escape

import os


# --------------------------------------------------
# FONT SETUP
# --------------------------------------------------

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(
            os.path.abspath(__file__)
        )
    )
)

FONT_PATH = os.path.join(
    BASE_DIR,
    "fonts",
    "NotoSansDevanagari-Regular.ttf"
)


if not os.path.exists(FONT_PATH):

    raise FileNotFoundError(
        f"Font not found: {FONT_PATH}"
    )


pdfmetrics.registerFont(
    TTFont(
        "NotoDevanagari",
        FONT_PATH
    )
)


# --------------------------------------------------
# PDF GENERATOR
# --------------------------------------------------

def generate_pdf(data):

    os.makedirs(
        "reports",
        exist_ok=True
    )

    file_path = os.path.join(
        "reports",
        "analysis_report.pdf"
    )


    # --------------------------------------------------
    # DOCUMENT
    # --------------------------------------------------

    doc = SimpleDocTemplate(

        file_path,

        pagesize=A4,

        rightMargin=45,

        leftMargin=45,

        topMargin=45,

        bottomMargin=45
    )


    # --------------------------------------------------
    # STYLES
    # --------------------------------------------------

    styles = getSampleStyleSheet()


    title_style = ParagraphStyle(

        "CustomTitle",

        parent=styles["Title"],

        fontName="NotoDevanagari",

        fontSize=20,

        leading=26,

        alignment=TA_CENTER,

        spaceAfter=20
    )


    heading_style = ParagraphStyle(

        "Heading",

        parent=styles["Heading2"],

        fontName="NotoDevanagari",

        fontSize=12,

        leading=18,

        spaceBefore=10,

        spaceAfter=5
    )


    body_style = ParagraphStyle(

        "Body",

        parent=styles["BodyText"],

        fontName="NotoDevanagari",

        fontSize=10,

        leading=17,

        spaceAfter=10
    )


    small_style = ParagraphStyle(

        "Small",

        parent=styles["BodyText"],

        fontName="NotoDevanagari",

        fontSize=9,

        leading=15
    )


    story = []


    # --------------------------------------------------
    # TITLE
    # --------------------------------------------------

    story.append(
        Paragraph(
            "AI NEWS INTELLIGENCE REPORT",
            title_style
        )
    )


    story.append(
        Spacer(1, 10)
    )


    # --------------------------------------------------
    # SUMMARY
    # --------------------------------------------------

    summary = escape(
        str(
            data.get(
                "summary",
                ""
            )
        )
    )

    story.append(
        Paragraph(
            "Summary",
            heading_style
        )
    )

    story.append(
        Paragraph(
            summary.replace(
                "\n",
                "<br/>"
            ),
            body_style
        )
    )


    # --------------------------------------------------
    # SENTIMENT
    # --------------------------------------------------

    sentiment = escape(
        str(
            data.get(
                "sentiment",
                "Unknown"
            )
        )
    )

    story.append(
        Paragraph(
            "Sentiment",
            heading_style
        )
    )

    story.append(
        Paragraph(
            sentiment,
            body_style
        )
    )


    # --------------------------------------------------
    # CATEGORY
    # --------------------------------------------------

    category = escape(
        str(
            data.get(
                "category",
                "Unknown"
            )
        )
    )

    story.append(
        Paragraph(
            "Category",
            heading_style
        )
    )

    story.append(
        Paragraph(
            category,
            body_style
        )
    )


    # --------------------------------------------------
    # KEYWORDS
    # --------------------------------------------------

    keywords = data.get(
        "keywords",
        []
    )


    if isinstance(
        keywords,
        list
    ):

        keywords_text = ", ".join(
            str(keyword)
            for keyword in keywords
        )

    else:

        keywords_text = str(
            keywords
        )


    keywords_text = escape(
        keywords_text
    )


    story.append(
        Paragraph(
            "Keywords",
            heading_style
        )
    )

    story.append(
        Paragraph(
            keywords_text,
            body_style
        )
    )


    # --------------------------------------------------
    # ENTITIES
    # --------------------------------------------------

    entities = data.get(
        "entities",
        {}
    )


    story.append(
        Paragraph(
            "Entities",
            heading_style
        )
    )


    if isinstance(
        entities,
        dict
    ):

        for entity_type, values in entities.items():

            if isinstance(
                values,
                list
            ):

                values_text = ", ".join(
                    str(value)
                    for value in values
                )

            else:

                values_text = str(
                    values
                )


            if not values_text:

                values_text = "None"


            text = (
                f"{escape(str(entity_type).title())}: "
                f"{escape(values_text)}"
            )


            story.append(
                Paragraph(
                    text,
                    small_style
                )
            )


    # --------------------------------------------------
    # STATISTICS
    # --------------------------------------------------

    word_count = escape(
        str(
            data.get(
                "word_count",
                0
            )
        )
    )


    character_count = escape(
        str(
            data.get(
                "character_count",
                0
            )
        )
    )


    story.append(
        Spacer(1, 10)
    )


    story.append(
        Paragraph(
            "Word Count",
            heading_style
        )
    )

    story.append(
        Paragraph(
            word_count,
            body_style
        )
    )


    story.append(
        Paragraph(
            "Character Count",
            heading_style
        )
    )

    story.append(
        Paragraph(
            character_count,
            body_style
        )
    )


    # --------------------------------------------------
    # BUILD PDF
    # --------------------------------------------------

    doc.build(
        story
    )


    return file_path