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
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <div class="py-5 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-center mb-8 text-[#e5e5e5]">
          {isLogin ? 'Log in' : 'Create a new user'}
        </h1>
        <div class="bg-[#e5e5e5] p-8 rounded-xl shadow-lg w-full max-w-[66%]">
          <Form method="post" className="space-y-6">
            {data && data.message && <p className="mb-4">{data.message}</p>}

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

            {!isLogin && (
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
            )}

            <div className="flex flex-col gap-4 justify-center items-center mt-4 md:flex-row">
              <Link
                to={`?mode=${isLogin ? 'signup' : 'login'}`}
                className={`${isLogin ? 'text-s' : ''} buttonStyle text-center`}
              >
                {isLogin ? 'Create new user' : 'Login'}
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="buttonStyle w-full md:w-36 text-center"
              >
                {isSubmitting ? 'Submitting...' : isLogin ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
