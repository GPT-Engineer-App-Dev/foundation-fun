import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

      {/* Call-to-Action Section */}
      <section className="bg-primary text-primary-foreground text-center py-20 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied users and transform your workflow today</p>
        <Button variant="secondary" size="lg">Sign Up Now</Button>
      </section>
    </div>
  );
};

export default Index;