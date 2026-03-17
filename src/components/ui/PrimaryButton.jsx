function PrimaryButton({ children, onClick, href }) {
  const classes =
    "inline-block bg-neutral-900 text-white text-md font-medium px-5 py-3 leading-tight rounded-full hover:opacity-80 transition-opacity duration-200";
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default PrimaryButton;
