import { useState } from "react";
import useAuthStore from "../store/authStore";
import { Lock, Mail, User } from "lucide-react";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { Navigate } from "react-router-dom";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); // 'login' or 'signup'
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const { register, login, error, loading, token } = useAuthStore();

  if (token !== null) return <Navigate to='/' />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name && !form.email && !form.password) {
      return;
    }

    if (mode === "signup") {
      await register(form);
    } else if (mode === "login") {
      await login({ email: form.email, password: form.password });
    } else {
      console.log("invalid mode");
    }
  };

  return (
    <div className='min-h-screen bg-bg flex items-center justify-center px-4'>
      <div className='w-full max-w-4xl bg-card-bg rounded-2xl shadow-lg flex max-md:flex-col overflow-hidden md:divide-x-2 divide-border'>
        {/* left side */}
        <div className='flex w-full md:w-1/2 flex-col justify-center md:items-center bg-card-bg max-md:pb-0 p-6 md:p-10'>
          <div className='flex items-center justify-center size-14 bg-primary rounded-lg mb-3 md:mb-6'>
            <User className='text-primary-foreground size-7' />
          </div>

          <h2 className='text-3xl font-bold text-txt'>
            {mode === "signup" ? "Welcome Aboard!" : "Welcome Back!"}
          </h2>

          <p className='mt-2 text-txt-muted md:text-center'>
            {mode === "signup"
              ? "Join us to unlock exclusive features and become part of our community."
              : "Login to continue managing your tasks efficiently."}
          </p>

          <p className='mt-4 text-sm font-medium hidden md:block'>
            {mode === "signup"
              ? "Already have an account? "
              : "Don't have an account? "}
            <button
              onClick={() => {
                loading
                  ? null
                  : setMode(mode === "signup" ? "login" : "signup");
              }}
              className='text-primary hover:underline cursor-pointer'>
              {mode === "signup" ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* right side - form */}
        <div className='w-full md:w-1/2 p-6 md:p-10'>
          <h2 className='text-2xl font-semibold text-txt mb-2 hidden md:block'>
            {mode === "signup" ? "Create Account" : "Sign In"}
          </h2>
          <p className='text-sm text-txt-muted mb-4 hidden md:block'>
            {mode === "signup"
              ? "Fill in the details below to get started."
              : "Enter your email and password to sign in."}
          </p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            {mode === "signup" ? (
              <Input
                type='text'
                label='Name'
                placeholder='John Deo'
                icon={<User className='size-4 text-txt-muted' />}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            ) : null}
            <Input
              type='email'
              label='Email'
              placeholder='JohnDeo@example.com'
              icon={<Mail className='size-4 text-txt-muted' />}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type='password'
              label='Password'
              placeholder='********'
              icon={<Lock className='size-4 text-txt-muted' />}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <div className='flex items-center gap-2'>
              <input id='terms' type='checkbox' className='accent-primary' />
              <label htmlFor='terms' className='text-sm text-txt-muted'>
                I accept the{" "}
                <span className='text-primary cursor-pointer hover:underline'>
                  terms and conditions
                </span>
              </label>
            </div>
            <Button
              type='submit'
              text={
                loading
                  ? "Loading..."
                  : mode === "signup"
                  ? "Sign Up"
                  : "Sign In"
              }
              className={`w-full ${loading ? "cursor-not-allowed" : ""}`}
              disabled={loading}
            />
          </form>

          {error ? (
            // todo: add toast for error
            <p className='text-sm text-danger text-center mt-2'>{error}</p>
          ) : null}

          <p className='mt-4 text-sm font-medium md:hidden'>
            {mode === "signup"
              ? "Already have an account? "
              : "Don't have an account? "}
            <button
              onClick={() => {
                loading
                  ? null
                  : setMode(mode === "signup" ? "login" : "signup");
              }}
              className='text-primary hover:underline cursor-pointer'>
              {mode === "signup" ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
