import SeverityBadge from "./SeverityBadge";

const AlertBanner = ({ alert }) => {
  return (
    <div style={{ border: "1px solid red", padding: 10, marginBottom: 10 }}>
      <h3>{alert.title}</h3>
      <SeverityBadge level={alert.severity} />
      <p>{alert.description}</p>
    </div>
  );
};

export default AlertBanner;