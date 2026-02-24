import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function App() {
  const [showModal, setShowModal] = useState(true);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <div className="relative bg-background rounded-lg shadow-2xl max-w-md w-full mx-4 p-8 border border-border">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="mt-2">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Oops! Your plan has expired.
              </h2>
              <p className="text-muted-foreground text-lg">
                Try again later.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary" />
                <span className="text-xl font-semibold text-foreground">
                  Echo
                </span>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <a
                  href="#features"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#products"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Products
                </a>
                <a
                  href="#support"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </a>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                  Sign In
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main>
          <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                  Meet the new Echo
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  The smartest speaker yet. Experience crystal-clear sound,
                  intelligent voice control, and seamless home integration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
                    Shop Now
                  </button>
                  <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full text-base font-medium hover:bg-secondary/80 transition-all hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
                Designed for your life
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <div className="h-6 w-6 rounded-full bg-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    Premium Sound
                  </h3>
                  <p className="text-muted-foreground">
                    Immersive 360° audio with adaptive acoustics that fills any
                    room with rich, detailed sound.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <div className="h-6 w-6 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    Smart Home Hub
                  </h3>
                  <p className="text-muted-foreground">
                    Control your entire home with simple voice commands.
                    Compatible with thousands of devices.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <div className="h-6 w-6 rounded-full bg-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    Always Learning
                  </h3>
                  <p className="text-muted-foreground">
                    Powered by advanced AI that adapts to your preferences and
                    gets smarter over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="py-24">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
                Choose your Echo
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Echo Dot",
                    price: "$49.99",
                    description: "Compact smart speaker with big sound",
                  },
                  {
                    name: "Echo",
                    price: "$99.99",
                    description: "Premium sound and smart home hub",
                  },
                  {
                    name: "Echo Studio",
                    price: "$199.99",
                    description: "High-fidelity audio with spatial processing",
                  },
                ].map((product) => (
                  <div
                    key={product.name}
                    className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-3xl font-bold text-primary mb-3">
                        {product.price}
                      </p>
                      <p className="text-muted-foreground mb-6">
                        {product.description}
                      </p>
                      <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  We're here to help
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Get support, find answers, and connect with our team. We're
                  available 24/7 to assist you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-colors">
                    Contact Support
                  </button>
                  <button className="px-8 py-4 bg-card text-card-foreground border border-border rounded-full text-base font-medium hover:bg-secondary transition-colors">
                    Visit Help Center
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Spacer to ensure footer is at the bottom */}
          <section className="py-32" />
        </main>

        {/* Footer - Prank Reveal */}
        <footer className="border-t border-border bg-card py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-4xl font-bold text-destructive mb-4 animate-pulse">
                🎉 This is fake and just a prank! 🎉
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Hope we got you! This is not a real product website.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2026. Built with love using{" "}
                <a
                  href="https://caffeine.ai"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
