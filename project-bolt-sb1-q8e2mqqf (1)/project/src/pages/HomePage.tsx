import React, { useState, useEffect } from 'react';
import { Globe, TrendingUp, AlertTriangle, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WorldMap } from '../components/WorldMap';
import { ThreatLevel } from '../components/ThreatLevel';
import { NewsCard } from '../components/NewsCard';
import { getGlobalThreatLevel, getLatestAnalyses, getActiveConflicts } from '../services/geopoliticsService';

export const HomePage: React.FC = () => {
  const [threatLevel, setThreatLevel] = useState(3);
  const [analyses, setAnalyses] = useState<any[]>([]);
  const [conflicts, setConflicts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [threat, latestAnalyses, activeConflicts] = await Promise.all([
          getGlobalThreatLevel(),
          getLatestAnalyses(),
          getActiveConflicts()
        ]);
        
        setThreatLevel(threat);
        setAnalyses(latestAnalyses);
        setConflicts(activeConflicts);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Globe className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Analyzing global situation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text mb-4">
            Global Situation Dashboard
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time geopolitical analysis powered by advanced AI algorithms
          </p>
        </div>

        {/* Threat Level & Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-2">
            <ThreatLevel level={threatLevel} />
          </div>
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
              <Users className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Regions Monitored</h3>
            </div>
            <p className="text-3xl font-bold text-blue-400">195</p>
            <p className="text-sm text-gray-400">Countries tracked</p>
          </div>
        </div>

        {/* World Map */}
        <div className="mb-8">
          <WorldMap conflicts={conflicts} />
        </div>

        {/* Latest Analyses & Active Conflicts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest Analyses */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Latest Analyses</h3>
              </div>
              <Link 
                to="/analysis"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                View All <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              {analyses.slice(0, 3).map((analysis) => (
                <NewsCard key={analysis.id} item={analysis} type="analysis" />
              ))}
            </div>
          </div>

          {/* Active Conflicts */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-white">Active Conflicts</h3>
              </div>
              <Link 
                to="/conflicts"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                View All <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              {conflicts.slice(0, 3).map((conflict) => (
                <NewsCard key={conflict.id} item={conflict} type="conflict" />
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Updates */}
        <div className="mt-8 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock size={16} />
            <span>Last updated: {new Date().toLocaleString()}</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2"></div>
            <span className="text-green-400">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
};