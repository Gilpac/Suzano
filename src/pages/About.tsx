import Layout from "@/components/layout/Layout";
import { Shield, Users, Star, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Todos os profissionais são verificados e qualificados"
    },
    {
      icon: Users,
      title: "Conexão",
      description: "Facilitamos o encontro entre pessoas e serviços de qualidade"
    },
    {
      icon: Star,
      title: "Qualidade",
      description: "Comprometidos com a excelência em todos os serviços"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Processo rápido e eficiente para sua comodidade"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Sobre o Suzano Conecta
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Transformando a forma como as pessoas se conectam com serviços de qualidade em Suzano
          </p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O Suzano Conecta nasceu com o propósito de facilitar a vida das pessoas, 
                criando uma ponte confiável entre quem precisa de serviços e profissionais 
                qualificados em nossa cidade.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Acreditamos que todos merecem acesso fácil e seguro aos melhores serviços, 
                desde manutenção doméstica até consultoria especializada. Nossa plataforma 
                foi desenvolvida pensando na praticidade, segurança e qualidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso compromisso é com a excelência, conectando pessoas de forma rápida, 
                segura e confiável, contribuindo para o crescimento e desenvolvimento 
                da comunidade de Suzano.
              </p>
            </div>
            
            <div className="bg-gradient-card rounded-lg p-8 shadow-card animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Por que escolher o Suzano Conecta?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Profissionais verificados e qualificados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Processo simples e transparente</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Atendimento personalizado</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Garantia de qualidade nos serviços</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Suporte completo durante todo o processo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e compromisso com a comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in group">
                <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nosso Compromisso
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Estamos comprometidos em facilitar a vida da comunidade de Suzano, 
            proporcionando acesso rápido e seguro aos melhores profissionais da região. 
            Trabalhamos constantemente para melhorar nossa plataforma e garantir 
            a melhor experiência para todos os usuários.
          </p>
          <div className="bg-gradient-hero rounded-lg p-8 text-primary-foreground">
            <p className="text-xl font-medium">
              "Conectar pessoas, construir confiança, transformar a comunidade."
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;