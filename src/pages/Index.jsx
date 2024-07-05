import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Check } from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Amazing App</h1>
        <p className="text-xl text-gray-600 mb-8">Discover the power of simplicity and efficiency</p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Easy to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Intuitive interface designed for seamless user experience</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Powerful Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Gain valuable insights with our advanced analytics tools</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Secure & Reliable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Your data is safe with our top-notch security measures</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <ul className="space-y-2">
                  <li><Check className="inline-block mr-2" />Feature 1</li>
                  <li><Check className="inline-block mr-2" />Feature 2</li>
                  <li><Check className="inline-block mr-2" />Feature 3</li>
                </ul>
              </CardDescription>
              <Button variant="secondary" size="lg" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <ul className="space-y-2">
                  <li><Check className="inline-block mr-2" />Feature 1</li>
                  <li><Check className="inline-block mr-2" />Feature 2</li>
                  <li><Check className="inline-block mr-2" />Feature 3</li>
                  <li><Check className="inline-block mr-2" />Feature 4</li>
                </ul>
              </CardDescription>
              <Button variant="secondary" size="lg" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <ul className="space-y-2">
                  <li><Check className="inline-block mr-2" />Feature 1</li>
                  <li><Check className="inline-block mr-2" />Feature 2</li>
                  <li><Check className="inline-block mr-2" />Feature 3</li>
                  <li><Check className="inline-block mr-2" />Feature 4</li>
                  <li><Check className="inline-block mr-2" />Feature 5</li>
                </ul>
              </CardDescription>
              <Button variant="secondary" size="lg" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-primary-foreground text-center py-20 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied users and transform your workflow today</p>
        <Button variant="secondary" size="lg">Sign Up Now</Button>
      </section>

      {/* Footer Section */}
      <footer className="mt-20 pb-8">
        <Separator className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">About Our App</h3>
            <p className="text-muted-foreground">Empowering users with innovative solutions for enhanced productivity and seamless workflow management.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Our Amazing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;