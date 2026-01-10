
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  CreditCard, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Users, 
  Layout, 
  Mail, 
  PieChart, 
  Globe, 
  Copy, 
  Play, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Instagram,
  Youtube
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};

const useSmoothScroll = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return scrollTo;
};

const Navbar = ({ onScroll }: { onScroll: (id: string) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="logo.png" 
              alt="NexFy Logo" 
              className="max-w-full max-h-full object-contain" 
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">NexFy</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button onClick={() => onScroll('funcionalidades')} className="hover:text-[#ffde59] transition-colors">Funcionalidades</button>
          <button onClick={() => onScroll('dashboard')} className="hover:text-[#ffde59] transition-colors">Dashboard</button>
          <button onClick={() => onScroll('integracoes')} className="hover:text-[#ffde59] transition-colors">Integrações</button>
          <button onClick={() => onScroll('faq')} className="hover:text-[#ffde59] transition-colors">Dúvidas</button>
        </div>
        <button 
          onClick={() => onScroll('checkout')} 
          className="bg-gradient-primary px-6 py-2.5 rounded-full font-semibold text-black hover:opacity-90 transition-all shadow-lg shadow-[#ffde59]/20 hidden sm:block"
        >
          Começar Agora
        </button>
      </div>
    </div>
  </nav>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold group-hover:text-[#ffde59] transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-[#ffde59]" /> : <ChevronDown className="text-slate-500" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const scrollTo = useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#030712] overflow-x-hidden">
      <Navbar onScroll={scrollTo} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#ffde59]/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffde59]/10 border border-[#ffde59]/20 text-[#ffde59] text-sm font-bold mb-8">
              <Zap size={16} /> NOVIDADE: UPDATE 2.0 LANÇADO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Seja <span className="text-gradient">dono da sua própria</span> <br /> 
              plataforma de vendas
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed px-2">
              O checkout inteligente que mais converte. <span className="highlight">Receba direto na sua conta</span>, sem intermediários e sem taxas abusivas que corroem seu lucro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
              <button 
                onClick={() => scrollTo('checkout')} 
                className="btn-pulse w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-primary text-black font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-2xl shadow-[#ffde59]/40 flex items-center justify-center gap-2"
              >
                Garantir minha plataforma agora <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollTo('funcionalidades')} 
                className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-base sm:text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Ver funcionalidades
              </button>
            </div>
          </FadeIn>

          {/* Video Section */}
          <FadeIn delay={200}>
            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black group">
              <div className="aspect-video relative overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/yu4L4sK5YUY"
                  title="Vídeo de Vendas NexFy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-base sm:text-xl"><CreditCard size={20} className="text-[#ffde59]" /> Checkout Seguro</div>
            <div className="flex items-center gap-2 font-bold text-base sm:text-xl"><ShieldCheck size={20} className="text-[#ffde59]" /> Antifraude Ativo</div>
            <div className="flex items-center gap-2 font-bold text-base sm:text-xl"><Globe size={20} className="text-[#ffde59]" /> Multi-domínios</div>
            <div className="flex items-center gap-2 font-bold text-base sm:text-xl"><Zap size={20} className="text-[#ffde59]" /> Entrega Instantânea</div>
          </div>
        </div>
      </section>

      {/* Mockup / Dashboard Section */}
      <section id="dashboard" className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Controle Total do Seu <span className="text-gradient">Império</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto px-2">Um painel intuitivo e profissional para gerenciar vendas, taxas e múltiplos infoprodutores.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 order-2 lg:order-1">
              {[
                { id: 'dashboard', icon: <PieChart size={20} />, title: 'Métricas em Tempo Real', desc: 'Acompanhe cada centavo que entra na sua conta.' },
                { id: 'checkout', icon: <Layout size={20} />, title: 'Editor de Checkout', desc: 'Personalize tudo de forma visual e intuitiva.' },
                { id: 'saas', icon: <Users size={20} />, title: 'Modo SaaS Premium', desc: 'Cobre mensalidade de outros vendedores na sua plataforma.' }
              ].map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all border ${activeTab === item.id ? 'bg-[#ffde59]/10 border-[#ffde59]/30' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-4 flex items-center justify-center ${activeTab === item.id ? 'bg-[#ffde59] text-black' : 'bg-white/10 text-slate-400'}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-white/10 shadow-3xl">
                <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="flex border-b border-white/5 p-3 items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded text-[10px] text-white/40 font-mono overflow-hidden whitespace-nowrap">dashboard.nexfy.com.br</div>
                  </div>
                  <div className="p-4 sm:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                      <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] sm:text-xs text-slate-400 uppercase">Vendas Hoje</span>
                        <div className="text-sm sm:text-xl font-bold text-[#ffde59]">R$ 12.450,00</div>
                      </div>
                      <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] sm:text-xs text-slate-400 uppercase">Checkout Conv.</span>
                        <div className="text-sm sm:text-xl font-bold text-[#ffde59]">42.5%</div>
                      </div>
                      <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] sm:text-xs text-slate-400 uppercase">SaaS Ativos</span>
                        <div className="text-sm sm:text-xl font-bold text-[#ffde59]">24</div>
                      </div>
                      <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] sm:text-xs text-slate-400 uppercase">Recuperado</span>
                        <div className="text-sm sm:text-xl font-bold text-[#ffde59]">R$ 2.340</div>
                      </div>
                    </div>
                    <div className="h-40 sm:h-64 flex items-end gap-1.5 sm:gap-4 overflow-hidden pt-10">
                      {[30, 45, 25, 60, 40, 75, 50, 90, 65, 80, 55, 100].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-primary rounded-t-lg transition-all duration-1000" 
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-[#ffde59]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Maximize Lucros com <span className="text-gradient">Suas Taxas</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Pare de sustentar plataformas terceiras. O dinheiro cai <span className="highlight">direto na sua conta</span>, sem intermediários.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ffde59]/50 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ffde59]/10 text-[#ffde59] rounded-full flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">PIX</h3>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-4">0%</div>
              <p className="text-slate-400 text-sm sm:text-base mb-6">Recebimento instantâneo D+0</p>
              <div className="mt-auto w-full pt-6 border-t border-white/5">
                <span className="inline-block px-4 py-1 rounded-full bg-[#ffde59]/20 text-[#ffde59] text-xs font-bold">Taxa Zero</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-primary border border-white/20 shadow-2xl md:transform md:scale-105 flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black/20 text-black rounded-full flex items-center justify-center mb-6">
                <CreditCard size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">Cartão de Crédito</h3>
              <div className="text-2xl sm:text-3xl font-extrabold text-black mb-4">Você Define</div>
              <p className="text-black/80 text-sm sm:text-base mb-6">Sua plataforma, suas regras. Parcele em até 12x</p>
              <div className="mt-auto w-full pt-6 border-t border-black/10">
                <span className="inline-block px-4 py-1 rounded-full bg-black/20 text-black text-xs font-bold">Totalmente Flexível</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ffde59]/50 transition-all flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ffde59]/10 text-[#ffde59] rounded-full flex items-center justify-center mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Boleto</h3>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Suas Taxas</div>
              <p className="text-slate-400 text-sm sm:text-base mb-6">Compensação em até 3 dias úteis</p>
              <div className="mt-auto w-full pt-6 border-t border-white/5">
                <span className="inline-block px-4 py-1 rounded-full bg-[#ffde59]/20 text-[#ffde59] text-xs font-bold">Sem Intermediários</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PWA Section */}
      <section className="py-16 sm:py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#ffde59] font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 block">Nova Funcionalidade v2.0</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Aplicativo PWA com <br /> 
              <span className="text-gradient">Notificações Push</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed px-1">
              Transforme sua plataforma em um aplicativo nativo. Seus clientes e produtores recebem notificações em tempo real sobre pedidos, pagamentos e mais.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {[
                "Notificações push em tempo real (Pix Gerado, Pedido Aprovado)",
                "Disparos automáticos por evento",
                "Instalação no celular como app nativo",
                "Maior retenção e confiança do cliente"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-[#ffde59]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-[#ffde59]" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-[500px] sm:h-[500px] bg-[#ffde59]/10 blur-[100px] rounded-full" />
            <div className="relative mx-auto w-64 h-[500px] sm:w-72 sm:h-[580px] bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] border-8 border-slate-800 shadow-3xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 sm:w-32 sm:h-6 bg-slate-800 rounded-b-2xl z-10" />
              <div className="p-4 sm:p-6 pt-10 sm:pt-12">
                <div className="flex justify-between mb-8">
                  <div className="w-10 h-10 sm:w-12 h-12 bg-[#ffde59] rounded-xl" />
                  <div className="w-10 h-10 sm:w-12 h-12 bg-white/5 rounded-xl" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/5 p-3 sm:p-4 rounded-2xl border border-white/5 animate-pulse">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <Zap size={14} className="text-[#ffde59]" />
                      <span className="text-[8px] sm:text-xs font-bold uppercase tracking-widest text-white/60">Notificação</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold">Novo PIX gerado!</p>
                    <p className="text-[8px] sm:text-[10px] text-slate-400">R$ 47,00 - Cliente: João Silva</p>
                  </div>
                  <div className="bg-white/5 p-3 sm:p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <CheckCircle2 size={14} className="text-[#ffde59]" />
                      <span className="text-[8px] sm:text-xs font-bold uppercase tracking-widest text-white/60">Alerta</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold">Pedido Aprovado</p>
                    <p className="text-[8px] sm:text-[10px] text-slate-400">Pedido #1234 foi confirmado</p>
                  </div>
                  <div className="bg-white/10 p-3 sm:p-4 rounded-2xl border border-white/10 shadow-lg border-l-4 border-l-[#ffde59]">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <Mail size={14} className="text-[#ffde59]" />
                      <span className="text-[8px] sm:text-xs font-bold uppercase tracking-widest text-white/60">Automação</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold">Disparo automático</p>
                    <p className="text-[8px] sm:text-[10px] text-slate-400">Email enviado para cliente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section id="funcionalidades" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tudo o que você precisa para <span className="text-gradient">Lucrar como Dono</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto px-2">Recursos profissionais que as maiores plataformas do mercado usam, agora nas suas mãos.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Layout size={20} />, title: "Editor de Checkout", text: "Personalize cada detalhe do seu checkout para maximizar conversões." },
              { icon: <Zap size={20} />, title: "Recuperação de Carrinho", text: "Recupere vendas perdidas com emails automáticos e estratégias inteligentes." },
              { icon: <Layers size={20} />, title: "Marca 100% White Label", text: "Personalize cores, logos e identidade direto pelo painel admin, sem programar." },
              { icon: <Users size={20} />, title: "Gerencie Infoprodutores", text: "Gerencie múltiplos infoprodutores. Cobre taxas ou mensalidade deles." },
              { icon: <Mail size={20} />, title: "Email Marketing Integrado", text: "Sistema completo de disparos automáticos integrado à jornada do cliente." },
              { icon: <CreditCard size={20} />, title: "Order Bump & Upsell", text: "Aumente o ticket médio com ofertas irresistíveis no momento da compra." },
              { icon: <Globe size={20} />, title: "Multi-domínios", text: "Use em quantos domínios quiser, sem limites ou custos extras." },
              { icon: <Copy size={20} />, title: "Clonagem de Páginas", text: "Clone qualquer página de vendas em segundos para testar novas ofertas." },
              { icon: <ShieldCheck size={20} />, title: "Antifraude Integrado", text: "Proteção contra chargebacks e fraudes usando algoritmos avançados." }
            ].map((feature, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ffde59]/30 transition-all hover:bg-white/[0.07] group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ffde59]/10 text-[#ffde59] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Marquee */}
      <section id="integracoes" className="py-16 sm:py-20 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Integrações <span className="text-gradient">Poderosas</span></h2>
        </div>
        <div className="animate-marquee whitespace-nowrap flex gap-10 sm:gap-16 py-4">
          {[
            'Webhook', 'UTMfy', 'Mercado Pago', 'PushinPay', 'Efí', 'Hypecash', 
            'Meta Ads', 'Google Ads', 'Safe2Pay', 'Pagar.me', 'ActiveCampaign'
          ].map((item, i) => (
            <span key={i} className="text-xl sm:text-3xl font-bold text-white/20 hover:text-[#ffde59]/80 transition-colors cursor-default select-none">
              {item}
            </span>
          ))}
          {[
            'Webhook', 'UTMfy', 'Mercado Pago', 'PushinPay', 'Efí', 'Hypecash', 
            'Meta Ads', 'Google Ads', 'Safe2Pay', 'Pagar.me', 'ActiveCampaign'
          ].map((item, i) => (
            <span key={i + 100} className="text-xl sm:text-3xl font-bold text-white/20 hover:text-[#ffde59]/80 transition-colors cursor-default select-none">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Area for Members section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#ffde59]/10 to-black p-6 sm:p-16 rounded-[2rem] sm:rounded-[3rem] border border-[#ffde59]/20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="bg-[#ffde59] text-black text-[8px] sm:text-[10px] font-bold px-2 py-1 rounded mb-4 inline-block uppercase tracking-widest">Experiência Premium</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Área de Membros <span className="text-[#ffde59]">Estilo Netflix</span></h2>
                <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed px-1">Entregue seu conteúdo de forma profissional. Seus alunos terão uma experiência fluida, responsiva e de altíssimo valor percebido.</p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex gap-3">
                    <Play className="text-[#ffde59]" size={18} />
                    <span className="font-semibold text-xs sm:text-sm">Player HD</span>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="text-[#ffde59]" size={18} />
                    <span className="font-semibold text-xs sm:text-sm">Módulos</span>
                  </div>
                  <div className="flex gap-3">
                    <Smartphone className="text-[#ffde59]" size={18} />
                    <span className="font-semibold text-xs sm:text-sm">App Mobile</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-[#ffde59]" size={18} />
                    <span className="font-semibold text-xs sm:text-sm">Progresso</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Membros" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ffde59] rounded-full flex items-center justify-center shadow-xl shadow-[#ffde59]/20 cursor-pointer">
                            <Play fill="black" size={24} className="ml-1" />
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-slate-800 p-3 sm:p-4 rounded-xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3">
                        <Users className="text-[#ffde59]" size={20} />
                        <div>
                            <p className="text-[10px] text-slate-400">Alunos Ativos</p>
                            <p className="font-bold text-sm sm:text-base">12.843</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="checkout" className="py-16 sm:py-24 relative overflow-hidden px-4">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-[#ffde59]/10 border border-[#ffde59]/20 text-[#ffde59] text-[10px] sm:text-xs font-bold mb-4 inline-block uppercase tracking-widest">Oferta de Lançamento</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">Tudo isso por um valor <br /> <span className="text-gradient">que cabe no seu bolso</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-2">Não perca a chance de adquirir o <span className="highlight">código fonte completo</span> com mais de 90% de desconto no lançamento da v2.0.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-16 relative shadow-3xl">
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-gradient-primary text-black font-bold py-2 px-6 sm:px-8 rounded-full shadow-lg text-[10px] sm:text-base whitespace-nowrap uppercase">ECONOMIZE R$ 950,00</div>
            
            <div className="text-center mb-10">
                <p className="text-slate-500 line-through text-base sm:text-xl mb-2">De R$ 997,00</p>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <span className="text-lg sm:text-2xl font-bold">Por apenas R$</span>
                    <span className="text-6xl sm:text-8xl font-black text-gradient">47</span>
                    <span className="text-lg sm:text-2xl font-bold self-end mb-4">,00</span>
                </div>
                <p className="text-[#ffde59] font-bold mt-4 flex items-center justify-center gap-2 text-xs sm:text-base">
                    <Zap size={18} /> PAGAMENTO ÚNICO - ACESSO VITALÍCIO
                </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-12">
              {[
                "Código fonte completo (PHP/JS/MySQL)",
                "Área de membros estilo Netflix",
                "Checkout de alta conversão",
                "Modo SaaS com gestão de infoprodutores",
                "Personalização total pelo painel admin",
                "Treinamento completo em vídeo",
                "Instalação ilimitada em quantos domínios quiser",
                "Atualizações vitalícias e sem mensalidades",
                "Suporte individual via WhatsApp"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#ffde59]/20 text-[#ffde59] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-slate-300 font-medium text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollTo('checkout')}
              className="btn-pulse w-full bg-gradient-primary py-4 sm:py-6 rounded-2xl text-black font-extrabold text-base sm:text-2xl active:scale-[0.98] transition-all shadow-2xl shadow-[#ffde59]/40 flex items-center justify-center gap-3 sm:gap-4 group uppercase"
            >
              ADQUIRIR AGORA <ChevronRight className="group-hover:translate-x-2 transition-transform w-5 sm:w-6" />
            </button>
            <p className="text-center text-slate-500 mt-6 text-[10px] sm:text-sm flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> Compra 100% Segura e Garantida
            </p>
          </div>
        </div>
      </section>

      {/* Community Section -> Suporte Individual Section */}
      <section className="py-16 sm:py-24 bg-[#ffde59]/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#ffde59]/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[#ffde59]/30">
                <Users size={32} className="text-[#ffde59]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#ffde59]">Suporte Individual</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 px-2">
                Ao entrar para a família NexFy, você ganha suporte Vip Individual. Tire suas dúvidas, tenha meu acompanhamento.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="font-bold text-base sm:text-lg mb-2 text-[#ffde59]">Acompanhamento VIP</p>
                    <p className="text-xs sm:text-sm text-slate-400">Atendimento individual para garantir que sua jornada com o NexFy seja um sucesso absoluto.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="font-bold text-base sm:text-lg mb-2">Estratégias de Venda</p>
                    <p className="text-xs sm:text-sm text-slate-400">Aprenda a escalar sua plataforma com quem já faz isso e domina o mercado.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="font-bold text-base sm:text-lg mb-2">Atualizações 1ª Mão</p>
                    <p className="text-xs sm:text-sm text-slate-400">Receba novos recursos e melhorias antes de qualquer outra pessoa no mercado.</p>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Perguntas <span className="text-gradient">Frequentes</span></h2>
          <div className="space-y-1">
            <FAQItem question="O código fonte é realmente meu?" answer="Sim! Ao adquirir, você recebe o repositório completo do sistema para baixar, modificar e instalar onde quiser. A licença é vitalícia e 100% sua." />
            <FAQItem question="Posso instalar em quantos domínios quiser?" answer="Exatamente. Diferente de outras soluções, não limitamos sua instalação. Você pode usar o NexFy em quantos projetos e domínios desejar." />
            <FAQItem question="Quais tecnologias são utilizadas?" answer="O NexFy é desenvolvido em PHP moderno, JavaScript e utiliza banco de dados MySQL, garantindo performance e facilidade de manutenção na maioria das hospedagens." />
            <FAQItem question="O treinamento está incluso?" answer="Sim! Incluímos um treinamento completo em vídeo que ensina desde a instalação básica até as configurações mais avançadas de gateway e webhooks." />
            <FAQItem question="Como funciona o suporte?" answer="Oferecemos suporte individualizado via WhatsApp para garantir que você consiga configurar e rodar sua plataforma sem dores de cabeça." />
            <FAQItem question="Quais gateways de pagamento têm integração?" answer="Temos integração nativa com Mercado Pago, PushinPay, Efí (antiga Gerencianet), Hypecash e suporte a Webhooks universais." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-primary px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 leading-tight text-black">Pare de pagar taxas absurdas.<br />Seja o dono.</h2>
          <p className="text-black/80 text-base sm:text-xl mb-12 max-w-2xl mx-auto">Enquanto outros perdem até 10% em taxas, você vai receber direto na sua conta. D+0 no PIX e cartão. É hora de lucrar de verdade.</p>
          <button 
            onClick={() => scrollTo('checkout')}
            className="btn-pulse inline-flex items-center gap-3 sm:gap-4 bg-black text-[#ffde59] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-2xl shadow-2xl active:scale-95 transition-transform uppercase"
          >
            ADQUIRIR AGORA <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                <img 
                  src="logo.png" 
                  alt="NexFy Logo" 
                  className="max-w-full max-h-full object-contain" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xl font-bold tracking-tight">NexFy</span>
            </div>
            <div className="flex gap-6 text-slate-500">
              <a href="https://www.instagram.com/nilsom.alvess" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffde59] transition-colors"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@nilson-rodrigues" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffde59] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          <div className="text-center md:text-left text-slate-500 text-xs sm:text-sm">
            <p>&copy; 2026 NexFy. Todos os direitos reservados.</p>
            <div className="mt-2 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#" className="hover:underline hover:text-[#ffde59]">Políticas de Privacidade</a>
              <a href="#" className="hover:underline hover:text-[#ffde59]">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
