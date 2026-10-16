function Event({
  imageUrl,
  title,
  dateTime,
  buttonText,
}: {
  imageUrl: string;
  title: string;
  dateTime: string;
  buttonText: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "24px",
        paddingInline: "6%",
        paddingBlock: "2%",
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        <img
          src={imageUrl}
          alt="Event image"
          style={{
            width: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          {title}
        </p>
        <p style={{ fontWeight: "lighter", marginBottom: "16px" }}>
          {dateTime}
        </p>
        <button
          style={{
            padding: "6px 10px",
            borderRadius: "8px",
            width: "fit-content",
            fontSize: '0.7rem'
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Event;
