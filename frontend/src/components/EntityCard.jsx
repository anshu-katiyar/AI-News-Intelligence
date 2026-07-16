function EntityCard({ entities }) {
  return (
    <>
      <h2>👤 Named Entities</h2>

      <p>
        <b>Person:</b>{" "}
        {entities?.person?.join(", ") || "None"}
      </p>

      <p>
        <b>Organization:</b>{" "}
        {entities?.organization?.join(", ") || "None"}
      </p>

      <p>
        <b>Location:</b>{" "}
        {entities?.location?.join(", ") || "None"}
      </p>

      <p>
        <b>Date:</b>{" "}
        {entities?.date?.join(", ") || "None"}
      </p>
    </>
  );
}

export default EntityCard;