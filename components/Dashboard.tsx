import { BarChart3, TrendingUp, AlertTriangle } from 'lucide-react';
import { ExecutiveOverview } from './ExecutiveOverview';
import { HighRiskPatterns } from './HighRiskPatterns';
import { ContextualTriggers } from './ContextualTriggers';
import { ExperienceVsRisk } from './ExperienceVsRisk';
import { PDImplications } from './PDImplications';
import { StrategicRecommendations } from './StrategicRecommendations';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-slate-900 mb-1">Global Communication Insights</h1>
              <p className="text-sm text-slate-600">
                Decision-support dashboard for professional development strategy
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-500">Analysis Period</div>
                <div className="text-sm text-slate-700">Q4 2025 – Q1 2026</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="space-y-8">
          <ExecutiveOverview />
          <HighRiskPatterns />
          <ContextualTriggers />
          <ExperienceVsRisk />
          <PDImplications />
          <StrategicRecommendations />
        </div>
      </main>
    </div>
  );
}
