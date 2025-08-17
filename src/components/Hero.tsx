import { Button } from "@/components/ui/button";
import { Code, Sparkles, Zap, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-primary p-4 rounded-2xl shadow-glow animate-pulse-glow">
            <Code className="w-12 h-12 text-white" />
          </div>
        </div>
        
        {/* Hero Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-secondary bg-clip-text text-transparent">
          Root Dev
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          AI-Powered Development Platform
        </p>
        
        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Create full-featured React applications with Vite, powered by Gemini AI. 
          Built by <span className="text-primary-glow font-semibold">Amit Jaiswal</span> - 
          The ultimate development companion that writes code, fixes bugs, and brings your ideas to life.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="group">
            <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Start Building
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
            View Examples
          </Button>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-surface-elevated/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group">
            <Zap className="w-8 h-8 text-primary mb-4 group-hover:animate-pulse" />
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Generate complete React apps in seconds with Vite and optimized builds</p>
          </div>
          
          <div className="bg-surface-elevated/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors group">
            <Sparkles className="w-8 h-8 text-secondary mb-4 group-hover:animate-spin" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-muted-foreground">Powered by Gemini AI with intelligent code generation and bug fixing</p>
          </div>
          
          <div className="bg-surface-elevated/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-colors group">
            <Code className="w-8 h-8 text-accent mb-4 group-hover:animate-bounce" />
            <h3 className="text-lg font-semibold mb-2">Full-Stack Ready</h3>
            <p className="text-muted-foreground">Complete development environment with live preview and deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;