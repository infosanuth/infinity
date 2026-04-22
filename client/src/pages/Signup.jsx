import { SignUp } from '@clerk/react'

const Signup = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <SignUp
        routing="path"
        path="/signup"
        signInUrl="/login"
        afterSignUpUrl="/"
        appearance={{
          variables: {
            colorPrimary: '#1E1F5B',
            colorBackground: '#ffffff',
            colorText: '#000000',
            colorInputBackground: '#f5f5f5',
            colorInputText: '#000000',
            borderRadius: '0.75rem',
          },
          elements: {
            card: 'shadow-2xl',
          },
        }}
      />
    </div>
  )
}

export default Signup
