import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SeverityBadge from "../components/SeverityBadge";
import "../styles/global.css";

const AuthorityDashboard = () => {
  const [alerts, setAlerts] = useState([]);

  // Fetch alerts from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 Authority Dashboard</h2>
      <p>Real-time disaster alerts and monitoring panel</p>

      {/* ALERT LIST */}
      <div style={{ marginTop: "20px" }}>
        <h3>Active Alerts</h3>

        {alerts.length === 0 ? (
          <p>No active alerts</p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              <h4>{alert.title}</h4>
              <SeverityBadge severity={alert.severity} />
              <p><b>Type:</b> {alert.type}</p>
              <p><b>Location:</b> {alert.location}</p>
              <p><b>Description:</b> {alert.description}</p>
            </div>
          ))
        )}
      </div>

      {/* MAP VIEW */}
      <div style={{ marginTop: "30px" }}>
        <h3>📍 Disaster Map</h3>

        <MapContainer
          center={[20.5937, 78.9629]} // India
          zoom={5}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {alerts.map((alert) => (
            <Marker
              key={alert.id}
              position={[alert.latitude, alert.longitude]}
            >
              <Popup>
                <b>{alert.title}</b>
                <br />
                Severity: {alert.severity}
                <br />
                {alert.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default AuthorityDashboard;