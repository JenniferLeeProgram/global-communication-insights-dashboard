import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const experienceData = [
  { experience: '0-1 year', ambiguousRole: 38, meaningDistortion: 31, incompleteMapping: 19 },
  { experience: '1-2 years', ambiguousRole: 35, meaningDistortion: 29, incompleteMapping: 21 },
  { experience: '2-3 years', ambiguousRole: 34, meaningDistortion: 28, incompleteMapping: 22 },
  { experience: '3-5 years', ambiguousRole: 32, meaningDistortion: 26, incompleteMapping: 24 },
  { experience: '5+ years', ambiguousRole: 30, meaningDistortion: 25, incompleteMapping: 23 },
];

export function ExperienceVsRisk() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-slate-900 mb-2">Experience vs Risk Persistence</h2>
        <p className="text-sm text-slate-600">
          Challenge assumption that experience alone resolves issues
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-1">Breakdown Frequency Across Experience Levels</h3>
        <p className="text-sm text-slate-600 mb-6">
          Percentage of communications with identified patterns by professional experience
        </p>

        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={experienceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="experience" 
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <YAxis 
                tick={{ fill: '#64748b', fontSize: 12 }}
                label={{ value: 'Frequency (%)', angle: -90, position: 'insideLeft', style: { fill: '#64748b', fontSize: 12 } }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '13px'
                }}
                formatter={(value) => [`${value}%`, '']}
              />
              <Legend 
                wrapperStyle={{ fontSize: '13px', paddingTop: '20px' }}
                formatter={(value) => {
                  const labels = {
                    ambiguousRole: 'Ambiguous role assignment',
                    meaningDistortion: 'Meaning distortion under complexity',
                    incompleteMapping: 'Incomplete relational mapping'
                  };
                  return labels[value] || value;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="ambiguousRole" 
                stroke="#dc2626" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="meaningDistortion" 
                stroke="#ea580c" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="incompleteMapping" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded">
          <p className="text-sm text-slate-700">
            <span className="font-medium">Key insight:</span> Certain communication risks persist even as experience increases, indicating the need for ongoing support.
          </p>
        </div>
      </div>
    </section>
  );
}
