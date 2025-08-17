import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorInterface from "@/components/EditorInterface";

const Index = () => {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {!showEditor ? (
        <div onClick={() => setShowEditor(true)} className="cursor-pointer">
          <Hero />
        </div>
      ) : (
        <EditorInterface />
      )}
    </div>
  );
};

export default Index;
