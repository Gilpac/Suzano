import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { Link } from "react-router-dom";
import { Search, Users, CheckCircle, Home as HomeIcon, Wrench, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-professionals-diverse.jpg";
import domesticImage from "@/assets/services-domestic-dark.jpg";
import technicalImage from "@/assets/services-technical-dark.jpg";
import professionalImage from "@/assets/services-professional-dark.jpg";
const Home = () => {
  const steps = [{
    icon: Search,
    title: "Escolha o serviço",
    description: "Escolha o serviço que você precisa"
  }, {
    icon: Users,
    title: "Conectamos você",
    description: "Nós conectamos você ao profissional ideal"
  }, {
    icon: CheckCircle,
    title: "Serviço entregue",
    description: "Serviço entregue com qualidade e confiança"
  }];
  const services = [{
    title: "Serviços Domésticos",
    description: "Limpeza, organização, jardinagem e manutenção residencial",
    image: domesticImage,
    alt: "Serviços domésticos - limpeza e manutenção residencial",
    icon: HomeIcon
  }, {
    title: "Serviços Técnicos",
    description: "Elétrica, hidráulica, tecnologia e reparos especializados",
    image: technicalImage,
    alt: "Serviços técnicos - elétrica, hidráulica e tecnologia",
    icon: Wrench
  }, {
    title: "Serviços Profissionais",
    description: "Consultoria, assessoria e serviços especializados",
    image: professionalImage,
    alt: "Serviços profissionais - consultoria e assessoria especializada",
    icon: Briefcase
  }];
  return <Layout>
      <div className="animate-page-enter">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${heroImage})`
        }}>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          {/* Floating elements for decoration */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 right-20 w-20 h-20 bg-accent/30 rounded-full blur-2xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-glow-pulse">
                Suzano Conecta
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 mb-8 animate-slide-in-left">
                A ponte entre você e os melhores profissionais
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button asChild className="text-base px-6 py-3 bg-gradient-button shadow-button hover:shadow-glow transition-all duration-500 hover:scale-105 border-0">
                  <Link to="/request-service">Solicitar um Serviço</Link>
                </Button>
                <Button asChild variant="outline" className="text-base px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm bg-white/10 transition-all duration-500 hover:scale-105">
                  <Link to="/services">Ver Serviços</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-24 bg-gradient-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Como Funciona
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Processo simples e direto para conectar você aos melhores profissionais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => <div key={index} className="text-center group animate-fade-in" style={{
              animationDelay: `${index * 200}ms`
            }}>
                  <div className="relative">
                    <div className="bg-gradient-button w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-button group-hover:shadow-glow">
                      <step.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-hero rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Nossos Serviços
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Profissionais qualificados para todas as suas necessidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} image={service.image} alt={service.alt} icon={service.icon} index={index} />)}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{
          animationDelay: '1.5s'
        }}></div>
          
          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Solicite seu serviço agora e conecte-se com os melhores profissionais de Suzano
            </p>
            <Button asChild size="lg" className="text-xl px-12 py-8 bg-white text-primary hover:bg-white/90 shadow-button hover:shadow-glow transition-all duration-500 hover:scale-105">
              <Link to="/request-service">Solicitar Serviço Agora</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Home;