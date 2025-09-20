import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-subtle border-t border-border/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 animate-slide-in-left">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="bg-gradient-button p-3 rounded-xl shadow-button group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-lg">SC</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Suzano Conecta
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md text-lg leading-relaxed">
              A ponte entre você e os melhores profissionais de Suzano. 
              Conectamos pessoas a serviços de qualidade com confiança e segurança.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-primary/10" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-primary/10" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-primary/10" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="animate-slide-up">
            <h3 className="font-bold text-foreground mb-6 text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Links Úteis</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-1 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-1 block">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-1 block">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-1 block">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="animate-slide-in-right">
            <h3 className="font-bold text-foreground mb-6 text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contato</h3>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-lg">Suzano, Luanda-Angola</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <a href="tel:+5511999999999" className="text-muted-foreground text-lg hover:text-primary transition-colors duration-300">+244 928 499 244</a>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <a href="mailto:contato@suzanoconecta.com.br" className="text-muted-foreground text-lg hover:text-primary transition-colors duration-300">contato@suzanoconecta.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-lg">
              © 2024 Suzano Conecta. Todos os direitos reservados.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-lg transition-all duration-300 hover:scale-105">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-lg transition-all duration-300 hover:scale-105">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;