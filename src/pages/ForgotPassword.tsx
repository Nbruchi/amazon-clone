
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Forgot password for:', email);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8">
      {/* Amazon Logo */}
      <Link to="/" className="mb-8">
        <div className="text-3xl font-bold text-amazon-dark-blue">
          amazon<span className="text-amazon-orange">.com</span>
        </div>
      </Link>

      {/* Forgot Password Form */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-amazon-text">Password assistance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Enter the email address associated with your Amazon account.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="amazon-input"
                required
              />
            </div>

            <Button type="submit" className="amazon-button-secondary w-full">
              Continue
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/signin" className="text-amazon-link hover:underline text-sm">
              Back to sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
