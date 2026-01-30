exports.getAlerts = (req, res) => {
    const alerts = [
        {
            id: 1,
            title: "Flood Warning",
            severity: "high",
            type: "Flood",
            location: "Kerala, India",
            latitude: 10.8505,
            longitude: 76.2711,
            description: "Severe flooding reported in low-lying areas.",
            timestamp: new Date()
        },
        {
            id: 2,
            title: "Wildfire Alert",
            severity: "medium",
            type: "Fire",
            location: "California, USA", // Just for variety or stick to India if preferred
            latitude: 11.0,
            longitude: 77.0, // Keeping it near Kerala for map view
            description: "Forest fire detected near national park.",
            timestamp: new Date()
        },
        {
            id: 3,
            title: "Heavy Rainfall",
            severity: "low",
            type: "Weather",
            location: "Mumbai, India",
            latitude: 19.0760,
            longitude: 72.8777,
            description: "Continuous heavy rain expected for next 24 hours.",
            timestamp: new Date()
        }
    ];

    res.json(alerts);
};
