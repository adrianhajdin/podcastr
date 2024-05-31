import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  )
}

export default Page