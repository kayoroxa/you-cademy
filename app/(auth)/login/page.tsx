'use client'
import { serverLogin } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Home() {
  const { toast } = useToast()
  async function handleSubmit(formData: FormData) {
    const email = formData.get('email') as string
    const result = await serverLogin({ email })

    if (result === false) {
      toast({
        title: 'Você não tem acesso ao curso.',
        description: 'Me chame no whatsapp',
      })
      return
    } else {
      await signIn('credentials', {
        email: email,
        redirect: true,
        callbackUrl: '/',
      })
      redirect('/')
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form action={handleSubmit} className="flex flex-col gap-4 w-[400px]">
          <h1>Log In</h1>
          <Input type="email" name="email" placeholder="email" required />
          {/* <input type="password" placeholder="Password" required /> */}
          <Button>Log In</Button>
        </form>
      </div>
    </div>
  )
}
