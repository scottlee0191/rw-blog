import {
  Form,
  TextAreaField,
  TextField,
  Label,
  Submit,
  FieldError,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
const ContactForm = () => {
  const formMethod = useForm()
  const [createContact, { loading, error }] = useMutation(
    CREATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Thank for you message!')
        formMethod.reset()
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  function onSave(input) {
    createContact({ variables: { input } })
  }

  return (
    <Form onSubmit={onSave} error={error} formMethods={formMethod}>
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Send us your message!</h1>
      <div className="mb-4 flex flex-col">
        <Label name="Name" htmlFor="name" errorClassName="error" />
        <TextField
          name="name"
          id="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />
      </div>
      <div className="mb-4 flex flex-col">
        <Label name="Email" htmlFor="email" />
        <TextField name="email" validation={{ required: true }} />
        <FieldError name="email" className="error" />
      </div>
      <div className="mb-4 flex flex-col">
        <Label name="Message" htmlFor="message" />
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" className="error" />
      </div>
      <Submit
        disabled={loading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Save
      </Submit>
    </Form>
  )
}

export default ContactForm
