import { BookOpen, Sparkles, BarChart3 } from 'lucide-react';

const recommendations = [
  {
    icon: BookOpen,
    category: 'Learning Design',
    title: 'Scenario-based professional development',
    description: 'Design learning experiences that simulate high-risk communication patterns in realistic work contexts. Focus on delegation, timeline negotiation, and cross-functional handoffs where ambiguity is most likely to occur.',
    actions: [
      'Develop role-play scenarios targeting top 3 risk patterns',
      'Create decision-tree exercises for ambiguous situations',
      'Implement peer review of communications in training contexts'
    ],
    color: 'border-blue-500',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Sparkles,
    category: 'Tooling & AI Support',
    title: 'AI-assisted clarity feedback',
    description: 'Deploy AI-powered tools that provide real-time clarity checks and rewriting suggestions at moments of use. Target high-risk communication contexts such as task delegation and requirement documentation.',
    actions: [
      'Integrate clarity-checking tools in collaboration platforms',
      'Provide AI rewriting assistance for critical communications',
      'Flag high-risk patterns before messages are sent'
    ],
    color: 'border-purple-500',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: BarChart3,
    category: 'Measurement & Evaluation',
    title: 'Track pattern reduction over time',
    description: 'Establish metrics to assess the impact of learning and tooling interventions. Monitor reduction in high-risk patterns and improvement in communication clarity across the global workforce.',
    actions: [
      'Define baseline metrics for top risk patterns',
      'Implement quarterly pattern analysis and reporting',
      'Correlate training participation with risk reduction'
    ],
    color: 'border-amber-500',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600'
  }
];

export function StrategicRecommendations() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-slate-900 mb-2">Strategic Recommendations</h2>
        <p className="text-sm text-slate-600">
          Enable decision-making through actionable next steps
        </p>
      </div>

      <div className="space-y-6">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          return (
            <div key={index} className={`bg-white border-l-4 ${rec.color} border-t border-r border-b border-slate-200 rounded-lg p-6`}>
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 p-3 rounded-lg ${rec.iconBg}`}>
                  <Icon className={`size-6 ${rec.iconColor}`} />
                </div>
                
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">
                      {rec.category}
                    </span>
                  </div>
                  <h3 className="text-slate-900 mb-2">{rec.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {rec.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                      Recommended Actions
                    </div>
                    <ul className="space-y-2">
                      {rec.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-slate-400 mt-0.5">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
