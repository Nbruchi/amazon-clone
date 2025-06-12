
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8">
      {/* Amazon Logo */}
      <Link to="/" className="mb-8">
        <div className="text-3xl font-bold text-amazon-dark-blue">
          amazon<span className="text-amazon-orange">.com</span>
        </div>
      </Link>

      {/* Sign In Form */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-amazon-text">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email or mobile phone number</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="amazon-input"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="amazon-input"
                required
              />
            </div>

            <Button type="submit" className="amazon-button-secondary w-full">
              Sign in
            </Button>

            <p className="text-xs text-gray-600">
              By continuing, you agree to Amazon's{' '}
              <Link to="/conditions-of-use" className="text-amazon-link hover:underline">
                Conditions of Use
              </Link>{' '}
              and{' '}
              <Link to="/privacy-notice" className="text-amazon-link hover:underline">
                Privacy Notice
              </Link>
              .
            </p>

            <div className="text-center">
              <Link to="/forgot-password" className="text-amazon-link hover:underline text-sm">
                Forgot your password?
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Divider */}
      <div className="w-full max-w-md my-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">New to Amazon?</span>
        </div>
      </div>

      {/* Create Account Button */}
      <div className="w-full max-w-md">
        <Link to="/register">
          <Button variant="outline" className="w-full">
            Create your Amazon account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
