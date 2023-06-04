import type { FC } from 'react'

interface ContactProps {
  
}

const Contact: FC<ContactProps> = ({  }) => {
  return (
    <section className='min-h-[100vh]' id='contact'>
      <h1 className='mb-12'>
        <span className='text-5xl font-medium mb-12 text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-amber-500'>
          Contact Me
        </span>
      </h1>
    </section>
  )
}

export default Contact;