import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Database, AlertCircle, TrendingUp, Clock } from 'lucide-react';

const breakdownData = [
  { category: 'Ambiguous role assignment', value: 34, color: '#dc2626' },
  { category: 'Meaning distortion under complexity', value: 28, color: '#ea580c' },
  { category: 'Incomplete relational mapping', value: 22, color: '#f59e0b' },
  { category: 'Implicit expectation misalignment', value: 16, color: '#eab308' },
];

export function ExecutiveOverview() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-slate-900 mb-2">Executive Overview</h2>
        <p className="text-sm text-slate-600">
          Immediate understanding of scope and priority
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* KPI Cards */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <Database className="size-5 text-slate-400" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">47,200</div>
          <div className="text-sm text-slate-600">Communications analyzed</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <AlertCircle className="size-5 text-red-500" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">1,842</div>
          <div className="text-sm text-slate-600">High-risk patterns identified</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <TrendingUp className="size-5 text-amber-500" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">34%</div>
          <div className="text-sm text-slate-600">Ambiguous role assignment</div>
          <div className="text-xs text-slate-500 mt-1">Most frequent category</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <Clock className="size-5 text-slate-400" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">73%</div>
          <div className="text-sm text-slate-600">Patterns persist beyond 3 years</div>
          <div className="text-xs text-slate-500 mt-1">Estimated persistence rate</div>
        </div>
      </div>

      {/* Primary Visualization */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-1">Distribution of Communication Breakdown Categories</h3>
        <p className="text-sm text-slate-600 mb-6">
          Percentage of total high-risk patterns by category
        </p>
        
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={breakdownData} layout="vertical" margin={{ top: 5, right: 30, left: 200, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis 
                type="category" 
                dataKey="category" 
                tick={{ fill: '#475569', fontSize: 13 }} 
                width={190}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '13px'
                }}
                formatter={(value) => [`${value}%`, 'Percentage']}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {breakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded">
          <p className="text-sm text-slate-700">
            <span className="font-medium">Key insight:</span> Communication breakdowns in global teams follow predictable patterns rather than isolated mistakes.
          </p>
        </div>
      </div>
    </section>
  );
}
