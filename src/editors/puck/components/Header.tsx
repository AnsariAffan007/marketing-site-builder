function Header({ headers }: { headers: { text: string; url: string }[] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "16px",
        paddingInline: "10%",
        justifyContent: "flex-end",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {headers.map((header, index) => (
        <p key={index}>{header.text}</p>
      ))}
    </div>
  );
}

export default Header;
