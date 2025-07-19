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