import { useState } from 'react';
import Button from './ui/Button';
import Container from './ui/Container';

const navItems = [
  { label: '贪吃蛇', href: '/snake', isGame: true },
  { label: '能力矩阵', href: '#services' },
  { label: '交付方式', href: '#about' },
  { label: '联系咨询', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#home" onClick={() => window.location.hash = '#home'} className="flex items-center gap-3 text-slate-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-base font-bold text-white shadow-lg shadow-primary-900/20">
              G
            </div>
            <div>
              <div className="text-base font-semibold">光未科技</div>
              <div className="text-xs text-slate-500">Growth with intelligent systems</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  item.isGame
                    ? 'text-purple-600 hover:text-purple-700'
                    : 'text-slate-600 hover:text-primary-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="#contact">预约方案沟通</Button>
          </div>

          <button
            type="button"
            aria-label="切换导航菜单"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-primary-200 hover:text-primary-600 md:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-slate-200/80 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    item.isGame
                      ? 'text-purple-600 hover:bg-purple-50 hover:text-purple-700'
                      : 'text-slate-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                预约方案沟通
              </Button>
            </div>
          </div>
        ) : null}
      </Container>
    </nav>
  );
}
