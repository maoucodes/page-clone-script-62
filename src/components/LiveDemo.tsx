import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const LiveDemo = () => {
  const { toast } = useToast();
  const [query, setQuery] = useState('Upcoming anime and manga in July');
  const [schema, setSchema] = useState(`{
  "name": "name of the product",
  "description": "description of the product", 
  "release_date": "release date"
}`);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [streamOutput, setStreamOutput] = useState('');

  const handleGenerate = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key to use the demo",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      setResults([]);
      setStreamOutput('');

      const parsedSchema = JSON.parse(schema);
      
      const response = await fetch('https://schemely.onrender.com/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey,
        },
        body: JSON.stringify({
          query,
          schema: parsedSchema,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let buffer = '';
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';
          
          for (const line of lines) {
            if (line.trim() && line.startsWith('data: ')) {
              const data = line.substring(6);
              setStreamOutput(prev => prev + line + '\n');
              
              if (data === 'DONE') {
                continue;
              }
              
              try {
                const parsed = JSON.parse(data);
                setResults(prev => [...prev, parsed]);
              } catch (e) {
                console.error('Failed to parse JSON:', data);
              }
            }
          }
        }
      }

      toast({
        title: "Success",
        description: "Data extraction completed!",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-schemely-text mb-4">
            Live Demo
          </h2>
          <p className="text-lg text-schemely-light max-w-2xl mx-auto">
            Try the /api/generate endpoint with real-time streaming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <h3 className="text-xl font-medium text-schemely-text mb-4">Configuration</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-schemely-text mb-2">
                    API Key
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-black/20 border-schemely-accent/30 text-schemely-text placeholder:text-schemely-light/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-schemely-text mb-2">
                    Query
                  </label>
                  <Input
                    placeholder="Enter your search query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-black/20 border-schemely-accent/30 text-schemely-text placeholder:text-schemely-light/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-schemely-text mb-2">
                    Schema (JSON)
                  </label>
                  <Textarea
                    placeholder="Define your data schema"
                    value={schema}
                    onChange={(e) => setSchema(e.target.value)}
                    rows={6}
                    className="bg-black/20 border-schemely-accent/30 text-schemely-text placeholder:text-schemely-light/50 font-mono text-sm"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="w-full bg-schemely-accent hover:bg-schemely-accent-light text-white hover:shadow-lg hover:shadow-schemely-accent/30 hover:scale-105 transition-all duration-300 font-semibold"
                >
                  {isLoading ? 'Generating...' : 'Generate Data'}
                </Button>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {/* Stream Output */}
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <h3 className="text-xl font-medium text-schemely-text mb-4">Stream Output</h3>
              <div className="bg-black/30 rounded-lg p-4 h-32 overflow-y-auto font-mono text-xs text-schemely-light">
                {streamOutput || 'Stream output will appear here...'}
              </div>
            </div>

            {/* Structured Results */}
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <h3 className="text-xl font-medium text-schemely-text mb-4">
                Structured Results ({results.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-schemely-light text-sm">Structured results will appear here...</p>
                ) : (
                  results.map((result, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-black/20 border border-schemely-accent/20"
                    >
                      <pre className="text-sm text-schemely-light whitespace-pre-wrap">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;