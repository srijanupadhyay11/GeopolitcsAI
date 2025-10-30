import React, { useState } from 'react';
import { AlertTriangle, MapPin, Users, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { ConflictCard } from '../components/ConflictCard';

export const ConflictTracker: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  const conflicts = [
    {
      id: 1,
      name: "Russia-Ukraine War",
      region: "Eastern Europe",
      severity: "Critical",
      status: "Active",
      startDate: "2022-02-24",
      casualties: "500,000+",
      displacement: "6.2M refugees",
      keyDevelopments: [
        "Winter offensive operations ongoing",
        "Western military aid packages approved",
        "Energy infrastructure targeted",
        "Diplomatic efforts stalled"
      ],
      trend: "escalating",
      lastUpdate: "2025-01-15"
    },
    {
      id: 2,
      name: "Israel-Palestine Conflict",
      region: "Middle East",
      severity: "High",
      status: "Active",
      startDate: "2023-10-07",
      casualties: "50,000+",
      displacement: "2.1M displaced",
      keyDevelopments: [
        "Ceasefire negotiations ongoing",
        "Humanitarian aid corridors established",
        "Regional tensions remain high",
        "International mediation efforts"
      ],
      trend: "stable",
      lastUpdate: "2025-01-14"
    },
    {
      id: 3,
      name: "Sudan Civil War",
      region: "Africa",
      severity: "Critical",
      status: "Active",
      startDate: "2023-04-15",
      casualties: "15,000+",
      displacement: "7.1M displaced",
      keyDevelopments: [
        "RSF controls western regions",
        "SAF maintains capital control",
        "Humanitarian crisis deepening",
        "Regional powers involved"
      ],
      trend: "escalating",
      lastUpdate: "2025-01-13"
    },
    {
      id: 4,
      name: "Myanmar Civil Conflict",
      region: "Southeast Asia",
      severity: "High",
      status: "Active",
      startDate: "2021-02-01",
      casualties: "4,500+",
      displacement: "1.8M displaced",
      keyDevelopments: [
        "Opposition forces gaining ground",
        "Military junta losing control",
        "ASEAN mediation attempts",
        "Economic collapse accelerating"
      ],
      trend: "escalating",
      lastUpdate: "2025-01-12"
    }
  ];

  const severityLevels = ['all', 'Critical', 'High', 'Medium', 'Low'];

  const filteredConflicts = conflicts.filter(conflict => 
    selectedSeverity === 'all' || conflict.severity === selectedSeverity
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'escalating':
        return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'de-escalating':
        return <TrendingDown className="w-4 h-4 text-green-400" />;
      default:
        return <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10 text-red-400" />
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-400 via-orange-300 to-red-500 bg-clip-text">
              Global Conflict Tracker
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real-time monitoring of active conflicts and crisis situations worldwide
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Active Conflicts</h3>
            </div>
            <p className="text-3xl font-bold text-red-400">{conflicts.length}</p>
            <p className="text-sm text-gray-400">Ongoing situations</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-orange-400" />
              <h3 className="text-lg font-semibold text-white">Displaced</h3>
            </div>
            <p className="text-3xl font-bold text-orange-400">17.2M</p>
            <p className="text-sm text-gray-400">People affected</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Regions</h3>
            </div>
            <p className="text-3xl font-bold text-yellow-400">4</p>
            <p className="text-sm text-gray-400">Affected areas</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Avg Duration</h3>
            </div>
            <p className="text-3xl font-bold text-blue-400">2.1</p>
            <p className="text-sm text-gray-400">Years active</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Filter by severity:</span>
            <div className="flex gap-2">
              {severityLevels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedSeverity(level)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedSeverity === level
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {level === 'all' ? 'All' : level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Conflict Cards */}
        <div className="space-y-6">
          {filteredConflicts.map(conflict => (
            <ConflictCard key={conflict.id} conflict={conflict} />
          ))}
        </div>
      </div>
    </div>
  );
};