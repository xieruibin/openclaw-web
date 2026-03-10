export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">光未科技</div>
            <p className="text-sm">照亮未来 科技无限</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition">首页</a></li>
              <li><a href="#services" className="hover:text-white transition">服务</a></li>
              <li><a href="#about" className="hover:text-white transition">关于</a></li>
              <li><a href="#contact" className="hover:text-white transition">联系</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 contact@guangwei.tech</li>
              <li>📱 400-888-8888</li>
              <li>📍 北京市朝阳区科技园</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition">微</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition">博</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition">知</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 光未科技。All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
