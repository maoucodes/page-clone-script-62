import React from 'react';
import Header from '@/components/Header';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background glass-texture">
      <Header />
      
      <main className="flex-1 px-8 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light text-schemely-text mb-8 tracking-wide">
              API Documentation
            </h1>
            <p className="text-xl text-schemely-light max-w-2xl mx-auto">
              Complete reference for the Schemely API endpoints
            </p>
          </div>

          {/* Overview Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-schemely-text mb-6">What It Does</h2>
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <ul className="space-y-3 text-schemely-light">
                <li className="flex items-start">
                  <span className="text-schemely-accent mr-3">•</span>
                  Accepts search queries + desired schema → returns structured JSON
                </li>
                <li className="flex items-start">
                  <span className="text-schemely-accent mr-3">•</span>
                  Accepts a direct URL + schema → extracts structured data from the page
                </li>
                <li className="flex items-start">
                  <span className="text-schemely-accent mr-3">•</span>
                  Supports real-time <strong>streaming</strong> output (like ChatGPT's stream mode)
                </li>
                <li className="flex items-start">
                  <span className="text-schemely-accent mr-3">•</span>
                  Powered by AI + web scraping + smart schema inference
                </li>
              </ul>
            </div>
          </section>

          {/* Authentication Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-schemely-text mb-6">Authentication</h2>
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <p className="text-schemely-light mb-4">
                All endpoints require an API key. Pass your key in the X-API-Key header:
              </p>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-accent">
                X-API-Key: your-api-key-here
              </div>
            </div>
          </section>

          {/* Generate Endpoint */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-schemely-text mb-6">POST /api/generate</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <p className="text-schemely-light mb-4">
                  Turn a <strong>query</strong> into structured data based on a custom schema.
                  Uses search engines, scraping, and AI to generate results.
                </p>
                
                <h4 className="text-lg font-medium text-schemely-text mb-3">Request Body</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`{
  "query": "Upcoming anime and manga in July",
  "schema": {
    "name": "name of the product",
    "description": "description of the product",
    "release_date": "release date"
  },
  "stream": false
}`}</pre>
                </div>
              </div>

              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <h4 className="text-lg font-medium text-schemely-text mb-3">Non-Streaming Response ("stream": false)</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`[
  {
    "name": "One Piece",
    "description": "A pirate adventure",
    "release_date": "July 1, 2023"
  },
  {
    "name": "Attack on Titan",
    "description": "Final season wrap-up",
    "release_date": "July 10, 2023"
  }
]`}</pre>
                </div>
              </div>

              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <h4 className="text-lg font-medium text-schemely-text mb-3">Streaming Response ("stream": true)</h4>
                <p className="text-schemely-light mb-3">Returns a streamed response via chunked HTTP or SSE:</p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`data: {"name": "Splatoon, Vol. 1", "description": "Manga (Series Debut)", "release_date": "July 22, 2025"}
data: {"name": "Splatoon, Vol. 2", "description": "Manga (Now Digital)", "release_date": "July 22, 2025"}
data: DONE`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Extract Endpoint */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-schemely-text mb-6">POST /api/extract</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <p className="text-schemely-light mb-4">
                  Extract structured data from a specific URL using a schema.
                  Has an <strong>advanced mode</strong> for advanced schema extraction.
                </p>
                
                <h4 className="text-lg font-medium text-schemely-text mb-3">Request Body</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`{
  "url": "https://www.example.com/product-page",
  "schema": {
    "title": "Title of the product",
    "price": "Product price",
    "rating": "Customer rating"
  },
  "stream": false
}`}</pre>
                </div>
              </div>

              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <h4 className="text-lg font-medium text-schemely-text mb-3">Response</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`{
  "title": "Awesome Anime Figure",
  "price": "$29.99",
  "rating": "4.8 out of 5"
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-schemely-text mb-6">Code Examples</h2>
            
            <div className="space-y-8">
              {/* JavaScript Example */}
              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <h4 className="text-lg font-medium text-schemely-text mb-3">JavaScript/Node.js</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`// Install fetch for Node.js: npm install node-fetch
const fetch = require('node-fetch'); // For Node.js

const response = await fetch('https://schemely.onrender.com/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your-api-key-here',
  },
  body: JSON.stringify({
    query: "Latest tech gadgets 2024",
    schema: {
      name: "product name",
      price: "product price", 
      description: "product description"
    },
    stream: false
  }),
});

const data = await response.json();
console.log(data);`}</pre>
                </div>
              </div>

              {/* Python Example */}
              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <h4 className="text-lg font-medium text-schemely-text mb-3">Python</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`import requests
import json

url = "https://schemely.onrender.com/api/generate"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": "your-api-key-here"
}

payload = {
    "query": "Best restaurants in Tokyo",
    "schema": {
        "name": "restaurant name",
        "cuisine": "type of cuisine",
        "rating": "customer rating"
    },
    "stream": False
}

response = requests.post(url, headers=headers, data=json.dumps(payload))
data = response.json()
print(data)`}</pre>
                </div>
              </div>

              {/* Streaming Example */}
              <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
                <h4 className="text-lg font-medium text-schemely-text mb-3">JavaScript (Streaming)</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-schemely-light overflow-x-auto">
                  <pre>{`const response = await fetch('https://schemely.onrender.com/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your-api-key-here',
  },
  body: JSON.stringify({
    query: "Top AI tools for developers",
    schema: {
      name: "tool name",
      description: "tool description",
      pricing: "pricing model"
    },
    stream: true
  }),
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  const lines = chunk.split('\\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.substring(6);
      if (data === 'DONE') {
        console.log('Stream completed');
        break;
      }
      
      try {
        const parsed = JSON.parse(data);
        console.log('New result:', parsed);
      } catch (e) {
        console.error('Parse error:', e);
      }
    }
  }
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Base URL */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-schemely-text mb-6">Base URL</h2>
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="bg-black/30 rounded-lg p-4 font-mono text-lg text-schemely-accent text-center">
                https://schemely.onrender.com
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Documentation;