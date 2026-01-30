const PanicButton = () => {
  const handleClick = () => {
    alert("🚨 Panic alert sent to authorities!");
  };

  return (
    <button
      onClick={handleClick}
      style={{ padding: 15, background: "red", color: "white" }}
    >
      PANIC
    </button>
  );
};

export default PanicButton;