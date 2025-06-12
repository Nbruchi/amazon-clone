
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', { name, email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8">
      {/* Amazon Logo */}
      <Link to="/" className="mb-8">
        <div className="text-3xl font-bold text-amazon-dark-blue">
          amazon<span className="text-amazon-orange">.com</span>
        </div>
      </Link>

      {/* Register Form */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-amazon-text">Create account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="amazon-input"
                placeholder="First and last name"
                required
              />
            </div>

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
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="amazon-input"
                placeholder="At least 6 characters"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Re-enter password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="amazon-input"
                required
              />
            </div>

            <Button type="submit" className="amazon-button-secondary w-full">
              Create your Amazon account
            </Button>

            <p className="text-xs text-gray-600">
              By creating an account, you agree to Amazon's{' '}
              <Link to="/conditions-of-use" className="text-amazon-link hover:underline">
                Conditions of Use
              </Link>{' '}
              and{' '}
              <Link to="/privacy-notice" className="text-amazon-link hover:underline">
                Privacy Notice
              </Link>
              .
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Already have an account */}
      <div className="w-full max-w-md mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-amazon-link hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
