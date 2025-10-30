import React, { useState } from 'react';
import { TrendingUp, DollarSign, BarChart3, Globe, AlertCircle } from 'lucide-react';
import { EconomicCard } from '../components/EconomicCard';

export const EconomicAnalysis: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('global');

  const economicData = [
    {
      id: 1,
      title: "Global Trade War Implications",
      region: "Global",
      type: "Trade Analysis",
      impact: "High",
      trend: "negative",
      summary: "Escalating trade tensions between major economies affecting global supply chains and commodity prices.",
      keyMetrics: {
        "Global GDP Impact": "-0.8%",
        "Trade Volume Change": "-12%",
        "Commodity Price Volatility": "+35%",
        "Supply Chain Disruption": "High"
      },
      implications: [
        "Increased inflation in consumer goods",
        "Supply chain diversification accelerating",
        "Emerging markets facing capital outflows",
        "Technology sector most affected"
      ],
      lastUpdate: "2025-01-15"
    },
    {
      id: 2,
      title: "Energy Crisis in Europe",
      region: "Europe",
      type: "Energy Analysis",
      impact: "Critical",
      trend: "negative",
      summary: "Ongoing energy supply disruptions affecting industrial production and household costs across Europe.",
      keyMetrics: {
        "Energy Price Increase": "+180%",
        "Industrial Production": "-15%",
        "Household Energy Costs": "+220%",
        "Energy Security Index": "Low"
      },
      implications: [
        "Manufacturing sector relocating",
        "Accelerated renewable energy transition",
        "Social unrest risk increasing",
        "Economic recession probability high"
      ],
      lastUpdate: "2025-01-14"
    },
    {
      id: 3,
      title: "China's Economic Slowdown",
      region: "Asia",
      type: "Economic Outlook",
      impact: "High",
      trend: "negative",
      summary: "China's growth deceleration impacting global demand and emerging market economies.",
      keyMetrics: {
        "GDP Growth": "3.2%",
        "Manufacturing PMI": "47.8",
        "Export Growth": "-8.5%",
        "Property Sector Decline": "-25%"
      },
      implications: [
        "Reduced global commodity demand",
        "Supply chain adjustments needed",
        "Emerging market currencies under pressure",
        "Technology transfer restrictions impact"
      ],
      lastUpdate: "2025-01-13"
    }
  ];

  const regions = ['global', 'Europe', 'Asia', 'Americas', 'Africa', 'Middle East'];

  const filteredData = economicData.filter(data => 
    selectedRegion === 'global' || data.region.toLowerCase() === selectedRegion.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-green-400" />
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-300 to-green-500 bg-clip-text">
              Economic Analysis
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive economic intelligence and market impact analysis
          </p>
        </div>

        {/* Key Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Global GDP</h3>
            </div>
            <p className="text-3xl font-bold text-blue-400">2.8%</p>
            <p className="text-sm text-gray-400">Growth forecast</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Trade Volume</h3>
            </div>
            <p className="text-3xl font-bold text-red-400">-5.2%</p>
            <p className="text-sm text-gray-400">YoY change</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Inflation</h3>
            </div>
            <p className="text-3xl font-bold text-yellow-400">6.8%</p>
            <p className="text-sm text-gray-400">Global average</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Risk Level</h3>
            </div>
            <p className="text-3xl font-bold text-red-400">High</p>
            <p className="text-sm text-gray-400">Economic stability</p>
          </div>
        </div>

        {/* Region Filter */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Filter by region:</span>
            <div className="flex gap-2 flex-wrap">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize ${
                    selectedRegion === region
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Economic Analysis Cards */}
        <div className="space-y-6">
          {filteredData.map(data => (
            <EconomicCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};