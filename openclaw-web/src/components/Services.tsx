interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

function ServiceCard({ icon, title, description, bgColor, iconColor }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
      <div className={`w-14 h-14 ${bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:${iconColor} transition`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      title: '智能软件开发',
      description: '定制化企业级应用开发，从需求分析到部署上线，全程专业支持',
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600 group-hover:text-white',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      ),
      title: '云计算服务',
      description: '弹性可扩展的云端解决方案，帮助企业降本增效，快速部署',
      bgColor: 'bg-accent-100',
      iconColor: 'text-accent-500 group-hover:text-white',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: '数据安全服务',
      description: '全方位数据保护方案，确保企业信息安全，合规运营',
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600 group-hover:text-white',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">核心服务</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">为企业提供全方位的数字化解决方案</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
