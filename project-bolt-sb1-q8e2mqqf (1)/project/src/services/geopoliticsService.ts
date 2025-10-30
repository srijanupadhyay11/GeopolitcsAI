// Mock service for geopolitical data
// In production, this would connect to real intelligence APIs and databases

export const getGlobalThreatLevel = async (): Promise<number> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return 3; // Elevated threat level
};

export const getLatestAnalyses = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    {
      id: 1,
      title: "China-Taiwan Military Exercises Escalate",
      region: "East Asia",
      severity: "High",
      date: "2025-01-15",
      summary: "Increased PLA naval presence in Taiwan Strait with largest military exercises in 6 months."
    },
    {
      id: 2,
      title: "European Energy Security Assessment",
      region: "Europe",
      severity: "Medium",
      date: "2025-01-14",
      summary: "Winter energy supplies stable but vulnerability to supply disruptions remains elevated."
    },
    {
      id: 3,
      title: "Middle East Diplomatic Developments",
      region: "Middle East",
      severity: "Medium",
      date: "2025-01-13",
      summary: "Regional powers engaging in back-channel negotiations amid ongoing tensions."
    }
  ];
};

export const getActiveConflicts = async () => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return [
    {
      id: 1,
      name: "Russia-Ukraine War",
      region: "Eastern Europe",
      severity: "Critical",
      lastUpdate: "2025-01-15",
      keyDevelopments: ["Winter offensive operations continue", "Western aid packages approved"]
    },
    {
      id: 2,
      name: "Israel-Palestine Conflict",
      region: "Middle East",
      severity: "High",
      lastUpdate: "2025-01-14",
      keyDevelopments: ["Ceasefire negotiations ongoing", "Humanitarian corridors established"]
    },
    {
      id: 3,
      name: "Sudan Civil War",
      region: "Africa",
      severity: "Critical",
      lastUpdate: "2025-01-13",
      keyDevelopments: ["RSF advances in western regions", "Humanitarian crisis deepening"]
    }
  ];
};