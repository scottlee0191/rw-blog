import { MetaTags } from '@redwoodjs/web'
import ContactForm from 'src/components/ContactForm/ContactForm'

const ContractPage = () => {
  return (
    <>
      <MetaTags title="Contract" description="Contract page" />

      <ContactForm />
    </>
  )
}

export default ContractPage
