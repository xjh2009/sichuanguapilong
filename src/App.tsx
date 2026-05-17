import { motion } from 'motion/react';
import { Trophy, Star, Crown, ThumbsUp, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
  const [showFinale, setShowFinale] = useState(false);

  const awards = [
    "最不画大饼",
    "最不会吹牛逼",
    "最豪爽不装清纯白莲花",
    "最不玻璃心",
    "最不私下嚼舌根",
    "最不把用户不当人",
    "最不会把用户的服务器提交给无证经营的网站去做流量中转",
    "最不收费"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFinale(true);
    }, awards.length * 800 + 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-900 selection:text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black -z-10"></div>
      
      <main className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 space-y-6"
        >
          <div className="flex justify-center mb-4">
            <Crown className="w-20 h-20 text-yellow-500/80" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 pb-2">
            2026 年度最高尚启动器大赏
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            检测到您正在使用<strong className="text-red-500 mx-1 border-b border-red-500 border-dashed pb-1">某位伟大的</strong>启动器运行游戏
            <br className="hidden md:block"/>
            为表达我对该启动器抵制我本人的感激之情，特颁发以下殊荣：
          </p>
        </motion.div>

        <div className="w-full max-w-3xl space-y-4 mb-20 relative z-10">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.8 }}
              className="flex items-center gap-4 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-5 rounded-xl shadow-2xl hover:border-yellow-500/30 hover:bg-neutral-800/50 transition-all group"
            >
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 text-yellow-500 shadow-inner group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold tracking-wide text-neutral-200">
                  <span className="text-yellow-600 mr-2 opacity-50 group-hover:opacity-100 transition-opacity">【</span>
                  {award}
                  <span className="text-yellow-600 ml-2 opacity-50 group-hover:opacity-100 transition-opacity">】</span>
                  <span className="text-neutral-500 text-lg ml-2 font-normal">之启动器</span>
                </h2>
              </div>
              <div className="shrink-0 text-neutral-700 hidden sm:block">
                <Star className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

        {showFinale && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }}
            className="text-center px-6 py-12 w-full max-w-3xl bg-red-950/20 border border-red-900/50 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertTriangle className="w-32 h-32 text-red-500" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 opacity-10 scale-x-[-1]">
              <AlertTriangle className="w-32 h-32 text-red-500" />
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-neutral-300 relative z-10">
              以上全部殊荣，统统颁发给伟大的
            </h3>
            <div className="mt-8 relative z-10">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                成都瓜皮龙科技有限公司法人
              </span>
            </div>
            <p className="mt-8 text-neutral-400 text-lg">
              （愿您的圈钱事业生意兴隆，与无证经营合作也能长长久久）
            </p>
          </motion.div>
        )}
      </main>
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
         <div className="absolute top-[10%] left-[5%] text-6xl font-black rotate-[-15deg]">不收费</div>
         <div className="absolute top-[40%] right-[10%] text-8xl font-black rotate-[10deg]">不玻璃心</div>
         <div className="absolute bottom-[20%] left-[15%] text-7xl font-black rotate-[-5deg]">没画大饼</div>
         <div className="absolute top-[20%] right-[25%] text-5xl font-black rotate-[20deg]">白莲花</div>
      </div>
    </div>
  );
}
