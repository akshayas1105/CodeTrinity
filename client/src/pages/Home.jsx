import React, { useContext, useEffect } from "react";
import AlertBanner from "../components/AlertBanner";
import MapView from "../components/MapView";
import PanicButton from "../components/PanicButton";
import Loader from "../components/Loader";
import { AlertContext } from "../context/AlertContext";

const Home = () => {
  const { alerts, fetchAlerts, loading } = useContext(AlertContext);

  useEffect(() => {
    fetchAlerts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚨 DisasterLink Alerts</h1>

      {alerts.length === 0 ? (
        <p>No active alerts at the moment.</p>
      ) : (
        alerts.map((alert) => (
          <AlertBanner key={alert.id} alert={alert} />
        ))
      )}

      <MapView alerts={alerts} />

      <div style={{ marginTop: "30px" }}>
        <PanicButton />
      </div>
    </div>
  );
};

export default Home;