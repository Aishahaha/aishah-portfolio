function SecondaryButton({ children, onClick, href }) {
  const classes =
    "inline-block border border-neutral-900 text-md font-medium px-6 py-3 leading-tight rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-200";
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

export default SecondaryButton;
