function Menu() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: "2%",
        paddingBlock: "16px",
        borderBottom: "1px solid #0000001f",
      }}
    >
      <div style={{ width: "240px" }}>
        <img
          src="/poweround-logo-light.png"
          alt="poweround-logo-light"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", columnGap: "32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "24px",
            justifyContent: "flex-end",
          }}
        >
          <p>Expo</p>
          <p>Events</p>
          <p>Community</p>
          <p>Resources</p>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#1677ff",
              color: "white",
              padding: "12px 16px",
              border: "none",
            }}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
