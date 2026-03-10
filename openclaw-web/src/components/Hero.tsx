import Button from './ui/Button';
import Container from './ui/Container';
import SurfaceCard from './ui/SurfaceCard';

const metrics = [
  { value: '120+', label: '完成数字化项目' },
  { value: '96%', label: '客户续约率' },
  { value: '4 周', label: 'MVP 平均交付周期' },
];

const highlights = ['AI 工作流设计', '企业系统重构', '云原生交付'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.22),_transparent_32%),radial-gradient(circle_at_top_left,_rgba(124,58,237,0.24),_transparent_34%)]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm shadow-primary-100/50 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              为成长型企业打造更快落地的数字产品与智能系统
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
              把复杂需求整理成
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent"> 更清晰的产品方案</span>
              与可交付的系统能力。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              光未科技专注于企业官网、业务平台、数据中台和 AI 自动化场景建设，帮助团队用更短时间完成从策略、设计到开发上线的闭环。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">预约 30 分钟方案沟通</Button>
              <Button href="#services" variant="ghost">
                查看能力矩阵
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-500">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <SurfaceCard className="relative overflow-hidden border-white/70 bg-slate-950 p-8 text-white shadow-[0_40px_140px_-56px_rgba(15,23,42,0.9)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.24),_transparent_34%)]" />
            <div className="relative">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <span>交付看板</span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">运行稳定</span>
              </div>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">本周推进</p>
                    <p className="mt-2 text-2xl font-semibold">品牌官网改版 + CRM 自动化</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-3 py-2 text-xs text-slate-200">Sprint 03</div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {metrics.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <div className="text-3xl font-semibold">{item.value}</div>
                      <div className="mt-2 text-sm text-slate-300">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/8 to-white/0 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>方案诊断完成度</span>
                    <span>84%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    从品牌策略、交互原型到工程落地，我们把每个项目拆成明确里程碑，确保业务方能持续看到进展和结果。
                  </p>
                </div>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
