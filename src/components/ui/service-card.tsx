import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon?: LucideIcon;
  index?: number;
}

export const ServiceCard = ({ title, description, image, alt, icon: Icon, index = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="bg-gradient-card border border-border/20 rounded-3xl p-10 shadow-card hover:shadow-glow transition-all duration-700 hover:-translate-y-3 group relative overflow-hidden backdrop-blur-sm"
      style={{animationDelay: `${index * 200}ms`}}
    >
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      
      {/* Elegant floating decorations */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-button rounded-full opacity-5 group-hover:opacity-15 transition-all duration-700 blur-sm"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full opacity-5 group-hover:opacity-10 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="mb-8 overflow-hidden rounded-2xl relative group/image">
          <img 
            src={image} 
            alt={alt}
            className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-105 group/image:brightness-110"
          />
          {/* Professional overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          {/* Premium icon overlay */}
          {Icon && (
            <div className="absolute top-6 right-6 w-14 h-14 bg-background/95 backdrop-blur-md rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0 shadow-lg">
              <Icon className="h-7 w-7 text-primary" />
            </div>
          )}
          
          {/* Professional badge */}
          <div className="absolute bottom-4 left-4 px-4 py-2 bg-background/90 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700">
            <span className="text-sm font-semibold text-primary">Profissional</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg font-medium">
            {description}
          </p>
          
          {/* Premium CTA button */}
          <div className="pt-4">
            <Button 
              asChild 
              className="w-full bg-gradient-button border-0 text-lg py-7 hover:shadow-glow transition-all duration-700 group-hover:scale-[1.02] font-semibold rounded-xl"
            >
              <Link to="/request-service">
                <span className="flex items-center justify-center gap-2">
                  Solicitar Agora
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">→</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};