import { Lightbulb, Target, TrendingUp } from 'lucide-react';

const implications = [
  {
    icon: Target,
    title: 'Targeted clarity support required',
    description: 'Global teams require targeted clarity support, not generic training. Development programs must address specific high-risk patterns identified in organizational communication.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Lightbulb,
    title: 'Context-based practice is essential',
    description: 'Practice in realistic contexts is more effective than rule-based instruction. Professional development should simulate high-risk communication scenarios relevant to actual work.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: TrendingUp,
    title: 'Risk patterns inform prioritization',
    description: 'Communication risk should inform learning prioritization. Development resources should be allocated based on frequency and persistence of identified patterns across the workforce.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

export function PDImplications() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-slate-900 mb-2">Implications for Professional Development</h2>
        <p className="text-sm text-slate-600">
          Translate insight into learning needs
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {implications.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
              <div className={`inline-flex p-3 rounded-lg ${item.bgColor} mb-4`}>
                <Icon className={`size-6 ${item.color}`} />
              </div>
              <h3 className="text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
