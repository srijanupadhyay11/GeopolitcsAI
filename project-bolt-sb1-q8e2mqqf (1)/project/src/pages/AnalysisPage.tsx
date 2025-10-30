import React, { useState } from 'react';
import { Brain, Search, Filter, Calendar, Globe, TrendingUp, AlertCircle } from 'lucide-react';
import { AnalysisCard } from '../components/AnalysisCard';
import { ChatBot } from '../components/ChatBot';

export const AnalysisPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showChatBot, setShowChatBot] = useState(false);

  const analyses = [
    {
      id: 1,
      title: "China-Taiwan Tensions: Military Buildup Analysis",
      region: "East Asia",
      type: "Military Analysis",
      severity: "High",
      date: "2025-01-15",
      summary: "Increased military exercises and naval presence in the Taiwan Strait indicate escalating tensions. Analysis of satellite imagery shows significant PLA deployment patterns.",
      keyPoints: [
        "40% increase in military exercises near Taiwan",
        "Naval blockade simulation exercises detected",
        "Diplomatic channels remain partially open",
        "Economic interdependence still acts as deterrent"
      ],
      implications: "Potential for miscalculation remains high. Regional allies increasing defensive postures.",
      confidence: 85
    },
    {
      id: 2,
      title: "Russia-Ukraine Conflict: Winter Strategy Assessment",
      region: "Eastern Europe",
      type: "Conflict Analysis",
      severity: "Critical",
      date: "2025-01-14",
      summary: "Analysis of Russian winter campaign strategy focusing on infrastructure targeting and energy warfare tactics.",
      keyPoints: [
        "Systematic targeting of energy infrastructure",
        "Mobilization of additional 200,000 troops",
        "Western military aid packages accelerating",
        "Civilian impact reaching critical levels"
      ],
      implications: "Prolonged conflict likely. Humanitarian crisis deepening. NATO involvement risk increasing.",
      confidence: 92
    },
    {
      id: 3,
      title: "Middle East Power Dynamics: Iran Nuclear Program",
      region: "Middle East",
      type: "Nuclear Analysis",
      severity: "High",
      date: "2025-01-13",
      summary: "Intelligence assessment of Iran's nuclear capabilities and regional proxy network expansion.",
      keyPoints: [
        "Uranium enrichment at 60% purity confirmed",
        "Proxy forces strengthening in Yemen, Syria",
        "Israel conducting preemptive operations",
        "JCPOA revival negotiations stalled"
      ],
      implications: "Regional arms race accelerating. Risk of Israeli preemptive strike increasing.",
      confidence: 78
    }
  ];

  const regions = ['all', 'East Asia', 'Eastern Europe', 'Middle East', 'Africa', 'Americas'];
  const types = ['all', 'Military Analysis', 'Conflict Analysis', 'Nuclear Analysis', 'Economic Analysis'];

  const filteredAnalyses = analyses.filter(analysis => {
    const matchesSearch = analysis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         analysis.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || analysis.region === selectedRegion;
    const matchesType = selectedType === 'all' || analysis.type === selectedType;
    
    return matchesSearch && matchesRegion && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text">
              Deep Analysis Center
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive geopolitical analysis powered by advanced AI algorithms and real-time intelligence
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search analyses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            <div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Analysis Cards */}
        <div className="space-y-6 mb-8">
          {filteredAnalyses.map(analysis => (
            <AnalysisCard key={analysis.id} analysis={analysis} />
          ))}
        </div>

        {/* AI Chat Bot Button */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setShowChatBot(!showChatBot)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110"
          >
            <Brain className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Bot */}
        {showChatBot && (
          <ChatBot onClose={() => setShowChatBot(false)} />
        )}
      </div>
    </div>
  );
};