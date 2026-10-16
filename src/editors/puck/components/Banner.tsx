function Button({
  text,
  ctaButton1: { text: ctaBtn1Text, url: ctaBtn1url },
  ctaButton2: { text: ctaBtn2Text, url: ctaBtn2url },
  imageUrl,
}: {
  imageUrl: string;
  text: string;
  ctaButton1: { text: string; url: string };
  ctaButton2: { text: string; url: string };
}) {
  return (
    <div
      style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      ref={(element) => {
        if (!element) return;
        const elementWidth = element.getBoundingClientRect().width;
        const calculatedElementHeight = elementWidth / 3.56;
        element.style.height = `${calculatedElementHeight}px`;
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingInline: "32px",
          paddingBlock: "24px",
          background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))`,
          width: "fit-content",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            color: "white",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          {text}
        </p>
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "16px" }}
        >
          <a href={ctaBtn1url}>
            <button style={{ padding: "4px 8px", borderRadius: "8px" }}>
              {ctaBtn1Text}
            </button>
          </a>
          <a href={ctaBtn2url}>
            <button style={{ padding: "4px 8px", borderRadius: "8px" }}>
              {ctaBtn2Text}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Button;
