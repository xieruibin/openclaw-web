import { useState } from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import SurfaceCard from './ui/SurfaceCard';

const contactPoints = [
  { title: '方案咨询', detail: '适合官网改版、产品规划、业务系统升级' },
  { title: '项目评估', detail: '梳理目标、功能范围、排期与技术选型建议' },
  { title: '合作方式', detail: '支持阶段制、专项制和长期迭代协作模式' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <SurfaceCard className="overflow-hidden border-slate-900/10 bg-slate-950 p-0 text-white shadow-[0_40px_140px_-56px_rgba(15,23,42,0.95)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.28),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_32%)]" />
              <div className="relative">
                <SectionHeading
                  eyebrow="Let’s build"
                  title="告诉我们你的目标，我们来整理成一套可执行方案"
                  description="无论是重新设计官网、搭建业务平台，还是把 AI 和自动化接入现有流程，我们都可以先从一次短会开始。"
                />

                <div className="mt-8 space-y-4">
                  {contactPoints.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="text-lg font-semibold text-white">{item.title}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                  <div>
                    <div className="text-slate-400">邮箱</div>
                    <div className="mt-1 font-medium text-white">contact@guangwei.tech</div>
                  </div>
                  <div>
                    <div className="text-slate-400">工作时段</div>
                    <div className="mt-1 font-medium text-white">周一至周五 09:30 - 18:30</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 text-slate-900 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-semibold tracking-tight">预约项目沟通</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                留下你的基本信息和当前需求，我们会在 1 个工作日内与你联系。
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    姓名
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="怎么称呼您"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-500 focus:bg-white"
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700">
                    邮箱
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-500 focus:bg-white"
                      required
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-slate-700">
                  项目类型
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="例如：品牌官网升级 / 系统后台重构 / AI 工作流"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-500 focus:bg-white"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  你的目标与现状
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="可以简单描述现有问题、期望上线时间、参考网站或系统背景。"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-500 focus:bg-white"
                    required
                  />
                </label>

                <Button type="submit" className="w-full justify-center">
                  提交需求并预约沟通
                </Button>
              </form>
            </div>
          </div>
        </SurfaceCard>
      </Container>
    </section>
  );
}
