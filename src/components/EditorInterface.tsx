import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send, Play, Settings, Download, Eye, Code, Terminal } from "lucide-react";

const EditorInterface = () => {
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState("gemini-1.5-flash");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!apiKey || !prompt) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          
          {/* Left Panel - Configuration & Chat */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* API Configuration */}
            <Card className="bg-surface border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-primary" />
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Gemini API Key</label>
                  <Input
                    type="password"
                    placeholder="Enter your Gemini API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-surface-elevated border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Model</label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger className="bg-surface-elevated border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gemini-2.0-flash">Gemini 2.0 Flash (Latest)</SelectItem>
                      <SelectItem value="gemini-1.5-flash">Gemini 1.5 Flash</SelectItem>
                      <SelectItem value="gemini-1.5-flash-8b">Gemini 1.5 Flash-8B</SelectItem>
                      <SelectItem value="gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
                      <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                      <SelectItem value="gemini-pro-vision">Gemini Pro Vision</SelectItem>
                      <SelectItem value="gemini-ultra">Gemini Ultra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            
            {/* Project Generator */}
            <Card className="bg-surface border-border shadow-card flex-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-secondary" />
                  Generate Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Description</label>
                  <Textarea
                    placeholder="Describe the application you want to build..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-surface-elevated border-border min-h-[120px] resize-none"
                  />
                </div>
                
                <Button 
                  onClick={handleGenerate}
                  disabled={!apiKey || !prompt || isGenerating}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 mr-2 animate-spin border-2 border-white/30 border-t-white rounded-full" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Generate App
                    </>
                  )}
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Run
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Panel - Preview & Code */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-surface border-border shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-accent" />
                    Live Preview
                  </CardTitle>
                  <Tabs defaultValue="preview" className="w-auto">
                    <TabsList className="bg-surface-elevated">
                      <TabsTrigger value="preview" className="data-[state=active]:bg-primary">
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </TabsTrigger>
                      <TabsTrigger value="code" className="data-[state=active]:bg-primary">
                        <Code className="w-4 h-4 mr-1" />
                        Code
                      </TabsTrigger>
                      <TabsTrigger value="console" className="data-[state=active]:bg-primary">
                        <Terminal className="w-4 h-4 mr-1" />
                        Console
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="h-[calc(100%-5rem)] p-0">
                <Tabs defaultValue="preview" className="h-full">
                  <TabsContent value="preview" className="h-full m-0 p-6">
                    <div className="h-full bg-surface-elevated rounded-lg border border-border flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Preview Area</h3>
                        <p className="text-muted-foreground">Your generated app will appear here</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="code" className="h-full m-0 p-6">
                    <div className="h-full bg-surface-elevated rounded-lg border border-border flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Code Editor</h3>
                        <p className="text-muted-foreground">Generated code will be displayed here</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="console" className="h-full m-0 p-6">
                    <div className="h-full bg-surface-elevated rounded-lg border border-border flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                          <Terminal className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Console Output</h3>
                        <p className="text-muted-foreground">Build logs and errors will appear here</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorInterface;