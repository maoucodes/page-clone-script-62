import React from 'react';
import Header from '@/components/Header';
import DataFlowFigures from '@/components/DataFlowFigures';
import Enhanced3DButton from '@/components/Enhanced3DButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background glass-texture">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-8xl font-light text-schemely-text mb-8 tracking-wide">
            Schemely
          </h1>
          
          <p className="text-xl text-schemely-text mb-6 max-w-2xl mx-auto">
            Turn any natural language query or URL into structured JSON data using AI-powered schema extraction.
          </p>
          
          <p className="text-lg text-schemely-light mb-12 max-w-3xl mx-auto">
            Just define what data you want — Schemely handles search, scraping, and structuring for you.
          </p>
          
          <Enhanced3DButton className="mb-6">
            Start Extracting Data
          </Enhanced3DButton>
          
          <p className="text-sm text-schemely-light">
            Real-time streaming • AI-powered • JSON output
          </p>
        </div>
        
        <DataFlowFigures />
      </main>

      {/* Features Section */}
      <section className="px-8 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-schemely-text mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-schemely-light max-w-2xl mx-auto">
              Everything you need to extract structured data from any source
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-schemely-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-schemely-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-schemely-text mb-4">Lightning Fast</h3>
              <p className="text-schemely-light">
                Real-time streaming output with sub-second response times powered by advanced AI models
              </p>
            </div>

            <div className="text-center p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-schemely-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-schemely-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-schemely-text mb-4">Smart Schema</h3>
              <p className="text-schemely-light">
                Define any data structure you want - our AI understands and extracts exactly what you need
              </p>
            </div>

            <div className="text-center p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-schemely-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-schemely-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-schemely-text mb-4">Universal Input</h3>
              <p className="text-schemely-light">
                Works with URLs, search queries, or any natural language description of data you need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-schemely-text mb-4">
              Loved by Developers
            </h2>
            <p className="text-lg text-schemely-light max-w-2xl mx-auto">
              See what developers are saying about Schemely
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="flex items-center mb-4">
                <div className="flex text-schemely-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-schemely-light mb-6">
                "Schemely transformed our data pipeline. What used to take hours of manual parsing now happens in seconds."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-schemely-accent/20 flex items-center justify-center mr-3">
                  <span className="text-schemely-accent font-medium">SA</span>
                </div>
                <div>
                  <p className="text-schemely-text font-medium">Sarah Anderson</p>
                  <p className="text-schemely-light text-sm">Lead Developer, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="flex items-center mb-4">
                <div className="flex text-schemely-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-schemely-light mb-6">
                "The schema extraction is incredibly accurate. It understands complex data structures better than any tool I've used."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-schemely-accent/20 flex items-center justify-center mr-3">
                  <span className="text-schemely-accent font-medium">MC</span>
                </div>
                <div>
                  <p className="text-schemely-text font-medium">Marcus Chen</p>
                  <p className="text-schemely-light text-sm">Data Engineer, StartupXYZ</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="flex items-center mb-4">
                <div className="flex text-schemely-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-schemely-light mb-6">
                "Schemely's API is a game-changer. Clean, fast, and exactly what we needed for our ML pipeline."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-schemely-accent/20 flex items-center justify-center mr-3">
                  <span className="text-schemely-accent font-medium">EJ</span>
                </div>
                <div>
                  <p className="text-schemely-text font-medium">Emily Johnson</p>
                  <p className="text-schemely-light text-sm">ML Engineer, DataFlow Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-8 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-schemely-text mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-schemely-light max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-schemely-text mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-light text-schemely-accent">$9</span>
                  <span className="text-schemely-light">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    1,000 extractions/month
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic schema templates
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Email support
                  </li>
                </ul>
                <button className="w-full py-3 px-6 rounded-full border border-schemely-accent text-schemely-accent hover:bg-schemely-accent hover:text-white transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            <div className="p-8 rounded-lg backdrop-blur-sm bg-schemely-accent/10 border-2 border-schemely-accent relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-schemely-accent text-white px-4 py-1 rounded-full text-sm">Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-medium text-schemely-text mb-2">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-light text-schemely-accent">$29</span>
                  <span className="text-schemely-light">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    10,000 extractions/month
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom schema creation
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API access
                  </li>
                </ul>
                <button className="w-full py-3 px-6 rounded-full bg-schemely-accent text-white hover:bg-schemely-accent-light transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            <div className="p-8 rounded-lg backdrop-blur-sm bg-white/10 border border-schemely-accent/20">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-schemely-text mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-light text-schemely-accent">$99</span>
                  <span className="text-schemely-light">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited extractions
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced AI models
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-schemely-light">
                    <svg className="w-5 h-5 text-schemely-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom integrations
                  </li>
                </ul>
                <button className="w-full py-3 px-6 rounded-full border border-schemely-accent text-schemely-accent hover:bg-schemely-accent hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 bg-white/10 backdrop-blur-sm border-t border-schemely-accent/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-schemely-accent">
                    <path fill="currentColor" d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 3h8v2H8V8zm0 4h6v2H8v-2z"/>
                  </svg>
                </div>
                <span className="text-schemely-accent font-medium">Schemely</span>
              </div>
              <p className="text-schemely-light text-sm mb-4">
                AI-powered schema extraction for developers who need structured data fast.
              </p>
            </div>

            <div>
              <h4 className="text-schemely-text font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">API Docs</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Examples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-schemely-text font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-schemely-text font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Community</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Status</a></li>
                <li><a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors text-sm">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-schemely-accent/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-schemely-light text-sm mb-4 md:mb-0">
              © 2024 Schemely. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-schemely-light hover:text-schemely-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
