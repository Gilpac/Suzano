import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Luanda-Angola",
      link: null
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+244 928 499 244",
      link: "tel:+244928499244"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@suzanoconecta.com",
      link: "mailto:contato@suzanoconecta.com"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg à Sex: 8h às 18h",
      link: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato conosco para dúvidas, sugestões ou suporte
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Envie uma mensagem
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 min-h-[120px]"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <p className="text-muted-foreground mb-8">
                Você também pode entrar em contato diretamente através dos nossos canais.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-hero p-3 rounded-lg flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="border-t border-border pt-8">
                <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
                <p className="text-muted-foreground mb-4">
                  Siga-nos nas redes sociais para ficar por dentro das novidades.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-lg transition-colors duration-200 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-lg transition-colors duration-200 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-lg transition-colors duration-200 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Como funciona o processo de solicitação?
              </h3>
              <p className="text-muted-foreground">
                É muito simples: você preenche o formulário de solicitação, nossa equipe 
                analisa sua necessidade e conecta você com o profissional mais adequado para seu serviço.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Os profissionais são verificados?
              </h3>
              <p className="text-muted-foreground">
                Sim! Todos os profissionais em nossa plataforma passam por um processo 
                rigoroso de verificação e qualificação antes de serem aprovados.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Qual é o custo para usar a plataforma?
              </h3>
              <p className="text-muted-foreground">
                A conexão através da nossa plataforma é gratuita. Você paga apenas 
                pelo serviço contratado diretamente ao profissional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;