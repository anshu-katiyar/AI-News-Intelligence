function AnalysisCard({ result }) {

    if (!result) return null;


    return (

        <div
            style={{
                border:"1px solid gray",
                padding:"20px",
                borderRadius:"10px",
                marginTop:"20px"
            }}
        >

            <h2>📰 Summary</h2>

            <p>{result.summary}</p>

            <hr/>

            <h2>😊 Sentiment</h2>

            <p>{result.sentiment}</p>

            <hr/>

            <h2>📂 Category</h2>

            <p>{result.category}</p>

        </div>

    );

}

export default AnalysisCard;