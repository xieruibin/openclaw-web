import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import SurfaceCard from './ui/SurfaceCard';

const services = [
	{
		title: '品牌官网与营销着陆页',
		description: '围绕企业定位、产品卖点与转化路径，搭建更有说服力的官网与专题页面。',
		points: ['信息架构梳理', '视觉与动效设计', '高性能前端实现'],
		accent: 'from-primary-500 to-accent-500',
	},
	{
		title: '业务系统与运营平台',
		description: '帮助团队把内部流程、数据管理与协作工具产品化，减少重复沟通与人工操作。',
		points: ['CRM / ERP / OMS', '角色权限与流程设计', '仪表盘与报表'],
		accent: 'from-accent-500 to-primary-500',
	},
	{
		title: 'AI 自动化与数据工作流',
		description: '把内容生成、客服分发、线索处理和知识沉淀接入 AI，提高日常业务效率。',
		points: ['AI 工作流编排', '知识库与搜索', '自动化集成'],
		accent: 'from-primary-600 to-primary-400',
	},
];

export default function Services() {
	return (
		<section id="services" className="py-24">
			<Container>
				<SectionHeading
					eyebrow="Capabilities"
					title="围绕增长、运营与交付，搭建真正能落地的数字能力"
					description="不是只做页面，而是从定位、体验、系统到持续迭代一起考虑，让官网和业务平台真正成为增长工具。"
					align="center"
				/>

				<div className="mt-14 grid gap-6 lg:grid-cols-3">
					{services.map((service) => (
						<SurfaceCard
							key={service.title}
							className="h-full border-white/70 bg-white/80 p-8 backdrop-blur-sm"
						>
							<div
								className={`mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r ${service.accent}`}
							/>
							<h3 className="text-2xl font-semibold text-slate-950">
								{service.title}
							</h3>
							<p className="mt-4 text-base leading-7 text-slate-600">
								{service.description}
							</p>
							<ul className="mt-8 space-y-3 text-sm text-slate-600">
								{service.points.map((point) => (
									<li
										key={point}
										className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3"
									>
										<span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
											✓
										</span>
										<span>{point}</span>
									</li>
								))}
							</ul>
						</SurfaceCard>
					))}
				</div>
			</Container>
		</section>
	);
}
