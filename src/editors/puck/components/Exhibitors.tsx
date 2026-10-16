function Exhibitors() {
  return (
    <div style={{ paddingInline: "32px", paddingBlock: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Exhibitors</p>
        <a href="https://google.com">See all</a>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "1fr",
          gap: "32px",
        }}
      >
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "12px",
              }}
            >
              <img
                src="home-setup-exhibitor-placeholder.png"
                alt="Exhibitor logo"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <p style={{ paddingBottom: "8px" }}>Mosaic Apps</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Exhibitors;
