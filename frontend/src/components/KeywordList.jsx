function KeywordList({ keywords }) {
  if (!keywords || keywords.length === 0) {
    return (
      <>
        <h2>🏷 Keywords</h2>
        <p>No keywords found.</p>
      </>
    );
  }

  return (
    <>
      <h2>🏷 Keywords</h2>

      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </>
  );
}

export default KeywordList;