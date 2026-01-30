const MapView = ({ alerts }) => {
  return (
    <div style={{ height: 300, background: "#eee", marginTop: 20 }}>
      <p>🗺️ Map View (alerts plotted here)</p>
      <p>Active alerts: {alerts.length}</p>
    </div>
  );
};

export default MapView;