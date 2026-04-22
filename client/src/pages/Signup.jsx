import { SignUp } from '@clerk/react'

const Signup = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center overflow-y-auto px-4">
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
