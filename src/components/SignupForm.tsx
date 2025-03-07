import Form from "next/form"

const SignupForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded p-8 max-w-md w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
        <Form action="/">
            <div className="mb-4">
                <input type="text" v-model="username"
                       placeholder="Username"
                       className="w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-4">
                <input type="email" v-model="email"
                       placeholder="Email"
                       className="w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-4">
                <input type="password" v-model="password"
                       placeholder="Password"
                       className="w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-6">
                <input type="password"
                       v-model="confirmPassword"
                       placeholder="Confirm Password"
                       className="w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <button type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:outline-none">Sign Up</button>
        </Form>
        <p className="mt-4 text-sm text-center text-gray-600">Already have an account? <a href="/login"
                                                                                     className="text-blue-500 hover:underline">Sign in here</a></p>
    </div>
    </div>
  )
}

export default SignupForm