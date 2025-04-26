import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from 'react-router';

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get('mode') === 'signup';
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <div class="py-5 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-center mb-8 text-[#e5e5e5]">
          {!isSignup ? 'Log in' : 'Create a new user'}
        </h1>
        <div class="bg-[#e5e5e5] p-8 rounded-xl shadow-lg w-full max-w-[66%]">
          <Form method="post" className="space-y-6">
            {data &&
              data.messages &&
              data.messages.map(msg => <p className="mb-4">{msg}</p>)}

            <p className="mb-4">
              <label htmlFor="email" className="labelStyle">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="inputStyle"
              />
            </p>

            <p className="mb-4">
              <label htmlFor="password" className="labelStyle">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                className="inputStyle"
              />
            </p>

            {!!isSignup && (
              <>
                <p className="mb-4">
                  <label htmlFor="password-confirmation" className="labelStyle">
                    Password Confirmation
                  </label>
                  <input
                    id="password-confirmation"
                    type="password"
                    name="password-confirmation"
                    required
                    className="inputStyle"
                  />
                </p>

                <p className="mb-4">
                  <label htmlFor="firstName" className="labelStyle">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    className="inputStyle"
                  />
                </p>

                <p className="mb-4">
                  <label htmlFor="lastName" className="labelStyle">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    className="inputStyle"
                  />
                </p>

                <p className="mb-4">
                  <label htmlFor="user_name" className="labelStyle">
                    User Name
                  </label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    required
                    className="inputStyle"
                  />
                </p>

                <p className="mb-4">
                  <label htmlFor="phoneNumber" className="labelStyle">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                    className="inputStyle"
                  />
                </p>
              </>
            )}

            <div className="flex flex-col gap-4 justify-center items-center mt-4 md:flex-row">
              <Link
                to={`?mode=${!isSignup ? 'signup' : 'login'}`}
                className={`${
                  !isSignup ? 'text-s' : ''
                } buttonStyle text-center`}
              >
                {!isSignup ? 'Create new user' : 'Login'}
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="buttonStyle w-full md:w-36 text-center"
              >
                {isSubmitting
                  ? 'Submitting...'
                  : !isSignup
                  ? 'Login'
                  : 'Sign Up'}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
