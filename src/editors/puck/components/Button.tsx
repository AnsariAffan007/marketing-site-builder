function Button({
  text,
  url,
  openInNewTab,
}: {
  text: string;
  url: string;
  openInNewTab: boolean;
}) {
  return (
    <a href={url} {...(openInNewTab ? { target: "_blank" } : {})}>
      <button>{text}</button>
    </a>
  );
}

export default Button;
