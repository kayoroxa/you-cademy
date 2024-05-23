'use client'
import { serverLogin } from '@/app/actions'
import { useToast } from '@/components/ui/use-toast'

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
      // toast({
      //   title: 'Logged In',
      //   description: 'You are now logged in',
      // })
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form action={handleSubmit}>
          <h1>Log In</h1>
          <input type="email" name="email" placeholder="email" required />
          {/* <input type="password" placeholder="Password" required /> */}
          <button>Log In</button>
        </form>
      </div>
    </div>
  )
}
