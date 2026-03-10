import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import SurfaceCard from './ui/SurfaceCard';

const principles = [
  {
    title: '先对齐目标，再开始设计',
    description: '每个项目都会先明确品牌认知、业务目标与关键转化动作，避免只做表面视觉升级。',
  },
  {
    title: '用原型和里程碑推进协作',
    description: '把需求拆成可以讨论、可以验收的节点，让业务方始终知道项目进度和下一步。',
  },
  {
    title: '兼顾品牌表达与工程质量',
    description: '设计与开发同频推进，页面体验、加载性能、可维护性和后续扩展一起考虑。',
  },
];

const stats = [
  { value: '8 年+', label: '企业数字化服务经验' },
  { value: '30+', label: '覆盖零售、制造、教育等行业' },
  { value: '1 对 1', label: '策略与项目负责人同步机制' },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why Guangwei"
              title="我们把“设计好看”升级成“业务更有结果”"
              description="光未科技服务成长型企业和传统行业升级团队，擅长把模糊需求梳理成明确的信息结构、产品体验和工程交付方案。"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-200/80 bg-white/75 px-6 py-5 shadow-sm backdrop-blur-sm">
                  <div className="text-3xl font-semibold text-slate-950">{stat.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {principles.map((principle, index) => (
              <SurfaceCard key={principle.title} className="border-white/70 bg-white/80 p-7 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-sm font-bold text-white shadow-lg shadow-primary-900/15">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{principle.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{principle.description}</p>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
