import { 
  Check, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3,
  Users,
  Edit3,
  Layers,
  DollarSign,
  ArrowRight,
  Building2,
  Gauge,
  Lock
} from 'lucide-react'

export default function PlatformLanding() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4">
              🚀 Launch Special: 50% off setup fees
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Business Website Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Manage unlimited client websites from one dashboard. 
              Built for agencies, freelancers, and developers who want to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#demo"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#how-it-works"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Watch Demo (2 min)
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-400">$50+</div>
              <div className="text-sm text-gray-400">MRR per client</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">10 min</div>
              <div className="text-sm text-gray-400">Setup time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-400">White label</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">∞</div>
              <div className="text-sm text-gray-400">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stop Trading Time for Money
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building one-off websites isn't scalable. This platform lets you manage 
              dozens of clients with recurring revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">The Old Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="ml-3 text-gray-600">Build custom site from scratch = 40+ hours</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="ml-3 text-gray-600">Client wants changes = more unbilled work</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="ml-3 text-gray-600">One-time payment = constantly finding new clients</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <span className="ml-3 text-gray-600">Multiple hosting accounts to manage</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">The Platform Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-600">Deploy new site in 10 minutes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-600">Client self-service portal for updates</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-600">Recurring revenue = predictable income</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-600">One dashboard for all clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three steps to recurring revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Choose Template</h3>
                <p className="text-gray-600 mb-4">
                  Pick from restaurant, salon, contractor, medical, or other business templates. 
                  All mobile-responsive and SEO-ready.
                </p>
                <img src="/api/placeholder/300/200" alt="Template selection" className="rounded-lg" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Customize Content</h3>
                <p className="text-gray-600 mb-4">
                  Use the visual editor to add client's content. No coding required. 
                  Changes appear instantly.
                </p>
                <img src="/api/placeholder/300/200" alt="Content editor" className="rounded-lg" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Deploy & Bill</h3>
                <p className="text-gray-600 mb-4">
                  Connect domain, go live instantly. Client gets login for minor updates. 
                  You bill monthly.
                </p>
                <img src="/api/placeholder/300/200" alt="Billing dashboard" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Scale
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Multi-Tenant Architecture</h3>
              <p className="text-gray-600">Each client gets their own isolated instance with custom domain</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Edit3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visual Content Editor</h3>
              <p className="text-gray-600">No-code editing for text, images, and layouts</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Client Portal</h3>
              <p className="text-gray-600">Give clients limited access to update their own content</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">Show clients their traffic, leads, and conversions</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Automatic Backups</h3>
              <p className="text-gray-600">Daily backups with one-click restore</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Gauge className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Performance Optimized</h3>
              <p className="text-gray-600">Fast loading, SEO-ready, mobile-first</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Profitable Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One platform fee. Unlimited clients. Keep 100% of what you charge.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Platform Access</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">$297</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Unlimited client websites</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>All templates included</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Visual content editor</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Client portal access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Analytics & reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>White label branding</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Training & support</span>
                    </li>
                  </ul>

                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Start 14-Day Free Trial
                  </button>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    No credit card required
                  </p>
                </div>

                <div className="md:w-1/2 bg-blue-50 p-8 md:p-12">
                  <h4 className="font-semibold text-lg mb-4">Your Revenue Potential</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">10 clients × $97/mo</span>
                        <span className="font-semibold">$970/mo</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">20 clients × $97/mo</span>
                        <span className="font-semibold">$1,940/mo</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-blue-500">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">50 clients × $97/mo</span>
                        <span className="font-semibold text-blue-600">$4,850/mo</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-600 text-white rounded-lg p-4">
                    <p className="text-sm mb-2">Profit at 50 clients:</p>
                    <p className="text-3xl font-bold">$4,553/month</p>
                    <p className="text-sm opacity-90 mt-1">($4,850 - $297 platform fee)</p>
                  </div>

                  <p className="text-sm text-gray-600 mt-6">
                    Most agencies charge $97-297/mo per client. You keep 100% of what you charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Your Options
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="font-semibold">Our Platform</div>
                    <div className="text-sm text-gray-500">$297/mo</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-semibold">GoHighLevel</div>
                    <div className="text-sm text-gray-500">$497/mo</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-semibold">WordPress</div>
                    <div className="text-sm text-gray-500">$0 + hosting</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">Unlimited clients</td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-gray-400">—</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Visual editor</td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-gray-400">Plugin required</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Client owns code</td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Single dashboard</td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-red-500">✕</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Setup time</td>
                  <td className="text-center py-4 px-4 text-green-600 font-semibold">
                    10 minutes
                  </td>
                  <td className="text-center py-4 px-4">
                    1-2 hours
                  </td>
                  <td className="text-center py-4 px-4">
                    2-4 hours
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Maintenance required</td>
                  <td className="text-center py-4 px-4 text-green-600 font-semibold">
                    None
                  </td>
                  <td className="text-center py-4 px-4">
                    Minimal
                  </td>
                  <td className="text-center py-4 px-4">
                    Constant updates
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Building Recurring Revenue Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join agencies making $5k-50k/month with our platform. 
            14-day free trial, no credit card required.
          </p>
          
          <form className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Access
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>500+ agencies</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">© 2024 Business Website Platform. All rights reserved.</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Documentation</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}