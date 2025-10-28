"use client"
import React, { FC, useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuth } from "@/context/auth"
import { useRouter } from "next/navigation"
import { auth as firebaseAuth } from "@/lib/firebase/client"
import { Oswald } from "next/font/google"

type Inputs = {
  email: string
  password: string
}

const oswaldFont = Oswald({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
})

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const auth = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signInHandler(data)
  }

  const signInHandler = async (data: Inputs) => {
    setLoading(true)
    const { email, password } = data
    try {
      await auth?.loginWithEmail(email, password)
      router.refresh()
    } catch (error) {
      console.log("error")
      alert("ログインに失敗しまいした")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    firebaseAuth.signOut()
  }, [])

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full ${oswaldFont.className}`}
      >
        <div className="text-center text-2xl font-bold">Login</div>
        <div className="mt-6 w-full">
          <label>Email</label>
          <input
            type="text"
            autoComplete="off"
            className="min-w-0 w-full p-2 border"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <div className="text-red-500">emailを入力してください</div>
          )}
        </div>
        <div className="mt-6">
          <label>Password</label>
          <input
            type="password"
            className="w-full p-2 border"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <div className="text-red-500">passwordを入力してください</div>
          )}
        </div>
        <button
          type="submit"
          color="blue"
          className="flex items-center justify-center w-full mt-6 py-2 px-3 rounded-md text-white text-sm bg-blue-900 hover:bg-blue-800 relative"
        >
          {loading && (
            <span className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent absolute left-16"></span>
          )}
          ログイン
        </button>
      </form>
    </>
  )
}

export default LoginForm
