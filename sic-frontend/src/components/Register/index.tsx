/* eslint-disable jsx-a11y/anchor-is-valid */
// TODO: handle lint warning
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { RegisterInitValues } from "../../models/FromikTypes";
import { UserModel } from "../../models/StoreModels";
import { useUserStore } from "../../store/user-strore";
import { registerValidationSchema } from "../../utilities/validationSchemas";
import Button from "../Button";

export default function Register() {
  const navigate = useNavigate();
  const register = useUserStore((state: UserModel) => state.register);
  const { enqueueSnackbar } = useSnackbar();

  const initial: RegisterInitValues = {
    first_name: "",
    surname: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const formik = useFormik({
    initialValues: initial,
    onSubmit: handleSubmit,
    validationSchema: registerValidationSchema,
  });

  function handleSubmit(values: RegisterInitValues) {
    delete values.confirmPassword
    register(values, navigate, enqueueSnackbar);
    console.log('🚀 ~ file: index.tsx:34 ~ handleSubmit ~ values', values)
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                />
                {formik.errors.email && formik.touched.email ? (
             <div className="text-red-600">{formik.errors.email}</div>
           ) : null}
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your First Name
                </label>
                <input
                  type="first_name"
                  name="first_name"
                  id="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name here"
                />
                {formik.errors.first_name && formik.touched.first_name ? (
             <div className="text-red-600">{formik.errors.first_name}</div>
           ) : null}
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Last Name
                </label>
                <input
                  type="surname"
                  name="surname"
                  id="surname"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Last Name here"
                />
                {formik.errors.surname && formik.touched.surname ? (
             <div className="text-red-600">{formik.errors.surname}</div>
           ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {formik.errors.password && formik.touched.password ? (
             <div className="text-red-600">{formik.errors.password}</div>
           ) : null}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
             <div className="text-red-600">{formik.errors.confirmPassword}</div>
           ) : null}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
              >
                Create an account
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
