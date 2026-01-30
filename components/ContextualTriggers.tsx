import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const triggerData = [
  { trigger: 'Delegation of responsibility', risk: 42, type: 'action' },
  { trigger: 'Timeline negotiation', risk: 38, type: 'action' },
  { trigger: 'Resource allocation decisions', risk: 35, type: 'action' },
  { trigger: 'Cross-functional handoffs', risk: 31, type: 'action' },
  { trigger: 'Priority clarification', risk: 28, type: 'concept' },
  { trigger: 'Quality expectations', risk: 26, type: 'concept' },
  { trigger: 'Scope boundary definition', risk: 24, type: 'concept' },
  { trigger: 'Success criteria articulation', risk: 21, type: 'concept' },
];

const COLORS = {
  action: '#3b82f6',
  concept: '#8b5cf6'
};

export function ContextualTriggers() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-slate-900 mb-2">Contextual Triggers</h2>
        <p className="text-sm text-slate-600">
          Show when communication risk increases
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-1">Actions and Concepts Most Associated with Breakdowns</h3>
        <p className="text-sm text-slate-600 mb-6">
          Risk percentage by communication context
        </p>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded" style={{ backgroundColor: COLORS.action }}></div>
            <span className="text-sm text-slate-600">High-risk actions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded" style={{ backgroundColor: COLORS.concept }}></div>
            <span className="text-sm text-slate-600">High-risk concepts</span>
          </div>
        </div>

        <div className="h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={triggerData} layout="vertical" margin={{ top: 5, right: 30, left: 220, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis 
                type="category" 
                dataKey="trigger" 
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
                formatter={(value) => [`${value}%`, 'Risk Level']}
              />
              <Bar dataKey="risk" radius={[0, 4, 4, 0]}>
                {triggerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.type]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded">
          <p className="text-sm text-slate-700">
            <span className="font-medium">Key insight:</span> Breakdowns cluster around specific contexts rather than individual ability.
          </p>
        </div>
      </div>
    </section>
  );
}
