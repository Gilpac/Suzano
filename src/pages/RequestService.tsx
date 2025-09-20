import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const RequestService = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    location: "",
    description: "",
    urgency: "baixa",
    name: "",
    phone: "",
    email: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve para conectar você com o profissional ideal.",
    });
    setFormData({
      serviceType: "",
      location: "",
      description: "",
      urgency: "baixa",
      name: "",
      phone: "",
      email: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const serviceTypes = [
    { value: "domestico", label: "Serviços Domésticos" },
    { value: "tecnico", label: "Serviços Técnicos" },
    { value: "profissional", label: "Serviços Profissionais" },
    { value: "outro", label: "Outro" }
  ];

  const urgencyOptions = [
    {
      value: "baixa",
      label: "Baixa",
      description: "Não há pressa, pode ser agendado",
      icon: Clock,
      color: "text-accent"
    },
    {
      value: "media",
      label: "Média",
      description: "Gostaria de resolver nos próximos dias",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      value: "alta",
      label: "Alta",
      description: "Preciso resolver o mais rápido possível",
      icon: CheckCircle,
      color: "text-destructive"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Solicitar um Serviço
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Preencha o formulário abaixo e conectaremos você com o profissional ideal para sua necessidade
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-lg shadow-card border border-border p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Tipo de Serviço */}
              <div>
                <Label htmlFor="serviceType" className="text-base font-semibold">
                  Qual tipo de serviço você precisa? *
                </Label>
                <Select onValueChange={(value) => handleSelectChange(value, "serviceType")} required>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    {serviceTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Localização */}
              <div>
                <Label htmlFor="location" className="text-base font-semibold">
                  Onde o serviço será realizado? *
                </Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Ex: Rua das Flores, 123 - Centro, Suzano"
                />
              </div>

              {/* Descrição */}
              <div>
                <Label htmlFor="description" className="text-base font-semibold">
                  Descreva o que você precisa *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-2 min-h-[120px]"
                  placeholder="Descreva detalhadamente o serviço que você precisa, incluindo qualquer informação relevante..."
                />
              </div>

              {/* Urgência */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Qual a urgência do serviço? *
                </Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => handleSelectChange(value, "urgency")}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {urgencyOptions.map((option) => (
                    <div key={option.value} className="relative">
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={option.value}
                        className="flex flex-col items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-200"
                      >
                        <option.icon className={`h-8 w-8 mb-2 ${option.color}`} />
                        <span className="font-medium text-foreground">{option.label}</span>
                        <span className="text-sm text-muted-foreground text-center mt-1">
                          {option.description}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Informações de Contato */}
              <div className="border-t border-border pt-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Suas informações de contato
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome completo *</Label>
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
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Label htmlFor="email">E-mail *</Label>
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
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12 py-4 text-lg">
                  Enviar Solicitação
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Ao enviar, você concorda com nossos termos de uso e política de privacidade
                </p>
              </div>
            </form>
          </div>

          {/* Processo */}
          <div className="mt-16 bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              O que acontece agora?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-hero w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Análise</h3>
                <p className="text-muted-foreground text-sm">
                  Nossa equipe analisa sua solicitação e identifica o profissional ideal
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Conexão</h3>
                <p className="text-muted-foreground text-sm">
                  Entramos em contato e conectamos você com o profissional
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-hero w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Execução</h3>
                <p className="text-muted-foreground text-sm">
                  O profissional entra em contato e realiza o serviço
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RequestService;