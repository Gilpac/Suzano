import Layout from "@/components/layout/Layout";
import { ServiceCard } from "@/components/ui/service-card";
import domesticImage from "@/assets/services-domestic-dark.jpg";
import technicalImage from "@/assets/services-technical-dark.jpg";
import professionalImage from "@/assets/services-professional-dark.jpg";

const Services = () => {
  const domesticServices = [
    "Limpeza residencial e comercial",
    "Organização de ambientes",
    "Jardinagem e paisagismo",
    "Manutenção predial",
    "Serviços de pintura",
    "Dedetização e controle de pragas"
  ];

  const technicalServices = [
    "Instalação elétrica",
    "Reparos hidráulicos",
    "Manutenção de ar condicionado",
    "Assistência técnica em eletrônicos",
    "Instalação de sistemas de segurança",
    "Automação residencial"
  ];

  const professionalServices = [
    "Consultoria empresarial",
    "Assessoria jurídica",
    "Contabilidade e finanças",
    "Marketing digital",
    "Fotografia e filmagem",
    "Aulas particulares"
  ];

  const services = [
    {
      title: "Serviços Domésticos",
      description: "Limpeza, organização, jardinagem e manutenção residencial",
      image: domesticImage,
      alt: "Serviços domésticos - limpeza e manutenção residencial",
      list: domesticServices
    },
    {
      title: "Serviços Técnicos",
      description: "Elétrica, hidráulica, tecnologia e reparos especializados",
      image: technicalImage,
      alt: "Serviços técnicos - elétrica, hidráulica e tecnologia",
      list: technicalServices
    },
    {
      title: "Serviços Profissionais",
      description: "Consultoria, assessoria e serviços especializados",
      image: professionalImage,
      alt: "Serviços profissionais - consultoria e assessoria especializada",
      list: professionalServices
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Conectamos você aos melhores profissionais qualificados de Suzano para todos os tipos de serviços
          </p>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  alt={service.alt}
                />
                
                <div className="mt-6 bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    Exemplos de serviços:
                  </h4>
                  <ul className="space-y-2">
                    {service.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato conosco e encontraremos o profissional ideal para sua necessidade específica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-service"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Solicitar Serviço
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted/50 transition-colors duration-300"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;