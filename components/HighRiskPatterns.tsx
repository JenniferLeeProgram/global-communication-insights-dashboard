import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Filter } from 'lucide-react';

const allPatternsData = [
  { pattern: 'Ambiguous role assignment', frequency: 34, experienceLevel: 'all', context: 'all' },
  { pattern: 'Ambiguous role assignment', frequency: 38, experienceLevel: 'junior', context: 'all' },
  { pattern: 'Ambiguous role assignment', frequency: 32, experienceLevel: 'senior', context: 'all' },
  { pattern: 'Meaning distortion under complexity', frequency: 28, experienceLevel: 'all', context: 'all' },
  { pattern: 'Meaning distortion under complexity', frequency: 31, experienceLevel: 'junior', context: 'all' },
  { pattern: 'Meaning distortion under complexity', frequency: 26, experienceLevel: 'senior', context: 'all' },
  { pattern: 'Incomplete relational mapping', frequency: 22, experienceLevel: 'all', context: 'all' },
  { pattern: 'Incomplete relational mapping', frequency: 19, experienceLevel: 'junior', context: 'all' },
  { pattern: 'Incomplete relational mapping', frequency: 24, experienceLevel: 'senior', context: 'all' },
  { pattern: 'Implicit expectation misalignment', frequency: 16, experienceLevel: 'all', context: 'all' },
  { pattern: 'Implicit expectation misalignment', frequency: 12, experienceLevel: 'junior', context: 'all' },
  { pattern: 'Implicit expectation misalignment', frequency: 18, experienceLevel: 'senior', context: 'all' },
];

export function HighRiskPatterns() {
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [contextFilter, setContextFilter] = useState('all');

  const filteredData = allPatternsData.filter(
    item => item.experienceLevel === experienceFilter && item.context === contextFilter
  );

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-slate-900 mb-2">High-Risk Communication Patterns</h2>
        <p className="text-sm text-slate-600">
          Identify where meaning is most likely to degrade
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6">
        {/* Filters */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
          <Filter className="size-4 text-slate-400" />
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Experience level:</label>
            <select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="px-3 py-1.5 border border-slate-300 rounded text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All levels</option>
              <option value="junior">Junior (0-3 years)</option>
              <option value="senior">Senior (3+ years)</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Communication context:</label>
            <select
              value={contextFilter}
              onChange={(e) => setContextFilter(e.target.value)}
              className="px-3 py-1.5 border border-slate-300 rounded text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All contexts</option>
              <option value="routine">Routine tasks</option>
              <option value="complex">Complex tasks</option>
            </select>
          </div>
        </div>

        {/* Chart */}
        <h3 className="text-slate-900 mb-1">Most Frequent Ambiguity Patterns</h3>
        <p className="text-sm text-slate-600 mb-6">
          Ranked by occurrence rate across analyzed communications
        </p>

        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} layout="vertical" margin={{ top: 5, right: 30, left: 220, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis 
                type="category" 
                dataKey="pattern" 
                tick={{ fill: '#475569', fontSize: 13 }} 
                width={210}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '13px'
                }}
                formatter={(value) => [`${value}%`, 'Frequency']}
              />
              <Bar dataKey="frequency" fill="#3b82f6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
