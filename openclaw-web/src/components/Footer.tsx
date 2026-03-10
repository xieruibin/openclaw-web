import Container from './ui/Container';

const footerLinks = [
  { label: '首页', href: '#home' },
  { label: '能力矩阵', href: '#services' },
  { label: '交付方式', href: '#about' },
  { label: '联系咨询', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <Container>
        <div className="rounded-[32px] border border-slate-200/80 bg-white/80 px-6 py-8 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.4)] backdrop-blur-sm sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-base font-bold text-white shadow-lg shadow-primary-900/15">
                  G
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-950">光未科技</div>
                  <div className="text-sm text-slate-500">为成长型企业构建可持续的数字体验与系统能力</div>
                </div>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                我们相信真正好的官网和数字产品，不只是视觉更现代，而是能帮助团队讲清价值、提升效率，并持续支撑业务增长。
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">导航</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition hover:text-primary-600">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">联系</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>contact@guangwei.tech</li>
                <li>北京市 · 支持远程协作</li>
                <li>周一至周五 09:30 - 18:30</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 光未科技. All rights reserved.</p>
            <p>React + TypeScript + Vite + TailwindCSS</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
