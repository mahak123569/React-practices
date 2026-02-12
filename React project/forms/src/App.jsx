
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  // Ek hi onSubmit rakho
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> FirstName: </label>
        <input
          className={errors.firstName ? 'input-error' : ""}
          {...register('firstName', {
            required: "First Name is required",
            minLength: { value: 3, message: 'Min length at least 3' },
            maxLength: { value: 6, message: "Max length almost 6" }
          })}
        />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label> MiddleName: </label>
        <input
          className={errors.MiddleName ? 'input-error' : ""}
          {...register('MiddleName')}
        />
      </div>
      <br />

      <div>
        <label> LastName: </label>
        <input
          className={errors.LastName ? 'input-error' : ""}
          {...register('LastName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name is not as per the rules"
            }
          })}
        />
        {errors.LastName && <p className='error-msg'>{errors.LastName.message}</p>}
      </div>
      <br />

      <input
        type='submit'
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "Submit"}
      />
    </form>
  )
}

export default App;
























