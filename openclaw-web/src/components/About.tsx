export default function About() {
  const stats = [
    { value: '500+', label: '服务客户' },
    { value: '1000+', label: '完成项目' },
    { value: '50+', label: '团队成员' },
    { value: '24/7', label: '技术支持' },
  ];

  const advantages = [
    '创新驱动，持续迭代',
    '专业团队，品质保证',
    '客户至上，服务第一',
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">关于光未科技</h2>
            <p className="text-gray-600 mb-6">
              光未科技成立于 2016 年，是一家专注于企业数字化转型的科技公司。
              我们拥有一支经验丰富的技术团队，致力于为客户提供高质量的技术解决方案。
            </p>
            <div className="space-y-4">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-primary-200 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
