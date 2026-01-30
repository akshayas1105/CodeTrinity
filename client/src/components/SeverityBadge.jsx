const SeverityBadge = ({ level }) => {
  const colors = {
    low: "green",
    medium: "orange",
    high: "red",
  };

  return (
    <span style={{ color: colors[level] || "gray" }}>
      Severity: {level}
    </span>
  );
};

export default SeverityBadge;