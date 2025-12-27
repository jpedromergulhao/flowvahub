import { Link } from "react-router";
import googleIcon from '../assets/googleIcon.png';
import { supabase } from "../lib/supabaseCliente";
import { useState, type FormEvent } from "react";
import ErrorBox from "../components/ErrorBox";
import { signInWithGoogle } from "../services/auth";
import SuccessBox from "../components/SuccessBox";

export default function Singup() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [confPassword, setConfPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfPassword, setShowConfPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<string | null>(null);

    async function handleCreateAccount(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (password !== confPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        if (password.length < 8 || confPassword.length < 8) {
            setError("Passwords must be at least 8 characters");
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role: "user",
                    },
                },
            });

            if (error) {
                setError(error.message);
                return;
            }

            setSuccess("Check your email to confirm your account.");
        } catch (err) {
            setError("Unexpected error. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleGoogleLogin() {
        try {
            await signInWithGoogle();
        } catch (error) {
            setError("Unexpected error with Google Sign up. Please try again.");
            console.error(error);
        }
    }

    type PasswordField = "password" | "confirm";

    function togglePasswordVisibility(field: PasswordField) {
        if (field === "password") {
            setShowPassword(prev => !prev);
        }

        if (field === "confirm") {
            setShowConfPassword(prev => !prev);
        }
    }

    return (
        <div className='min-h-[100dvh] flex justify-center py-[20px] px-3 items-center bg-gradient-to-br from-[#9013fe] to-[#6D28D9]'>
            <div className='flex justify-center w-full max-w-[420px]'>
                <div className='w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-[30px] px-[20px] lg:p-[40px] bg-white rounded-[10px] animate-fadeIn h-fit'>
                    <div className='mb-[30px]'>
                        <h1 className='text-2xl text-[#6D28D9] font-semibold  mb-[8px] text-center w-full'>
                            Create Your Account
                        </h1>
                        <p className='text-sm text-[#6B7280] text-center w-full '>
                            Sign up to manage your tools
                        </p>
                    </div>

                    {error && (<ErrorBox error={error} />)}
                    {success && (<SuccessBox success={success} />)}

                    <div className='w-full'>
                        <form onSubmit={handleCreateAccount} className='w-full text-[#111827]'>
                            <label htmlFor="email" className='block text-sm font-medium mb-2 text-[#111827]'>Email</label>
                            <div className='relative group w-full mb-5'>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    placeholder='your@email.com'
                                    value={email}
                                    className='peer w-full border text-base py-[10px] px-[14px]  border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]'
                                    onChange={e => setEmail(e.target.value.trim())}
                                    required
                                />
                                <div className='pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]'></div>
                            </div>

                            <label htmlFor="password" className='block text-sm font-medium mb-2 text-[#111827]'>Password</label>
                            <div className='relative'>
                                <div className='relative group w-full mb-5'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id='password'
                                        name='password'
                                        placeholder='********'
                                        value={password}
                                        className='peer w-full border py-[10px] text-base px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]'
                                        onChange={e => setPassword(e.target.value.trim())}
                                        required
                                    />
                                    <div className='pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]'></div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility("password")}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute cursor-pointer right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            <label htmlFor="password" className='block text-sm font-medium mb-2 text-[#111827]'>Confirm Password</label>
                            <div className='relative'>
                                <div className='relative group w-full mb-5'>
                                    <input
                                        type={showConfPassword ? "text" : "password"}
                                        id='confPassword'
                                        name='password'
                                        placeholder='********'
                                        value={confPassword}
                                        className='peer w-full border py-[10px] text-base px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]'
                                        onChange={e => setConfPassword(e.target.value.trim())}
                                        required
                                    />
                                    <div className='pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]'></div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility("confirm")}
                                    aria-label={showConfPassword ? "Hide password" : "Show password"}
                                    className="absolute cursor-pointer right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto"
                                >
                                    {showConfPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className='w-full text-base h-[55px] cursor-pointer flex justify-center gap-2 items-center p-[11px] text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-[.2s] rounded-[100px] hover:bg-[#6D28D9]'
                                disabled={loading}
                            >
                                {loading ? 'Signing up...' : 'Sign up Account'}
                            </button>
                        </form>

                        <div className="relative flex items-center w-full my-[20px]">
                            <div className="flex-grow h-px bg-[#EDE9FE]"></div>
                            <span className=" text-[13px] text-[#A78BFA] font-medium bg-white px-3">or</span>
                            <div className="flex-grow h-px bg-[#EDE9FE]"></div>
                        </div>

                        <button
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className='border cursor-pointer py-3 px-[14px] text-sm w-full gap-2 text-[#111827] border-[#EDE9FE] rounded-md hover:bg-[#F5F3FF] transition-colors flex items-center justify-center relative'
                        >
                            <img
                                src={googleIcon}
                                alt="Sign in with Google"
                                loading="lazy"
                                className='w-5 sm:w-6 h-5 sm:h-6'
                            />
                            <span>Sign in with Google</span>
                        </button>
                        <div className='mt-5 text-sm flex flex-row gap-2 justify-center'>
                            <p className='text-[#6B7280]'>
                                Already have an account
                            </p>
                            <Link
                                to="/"
                                className='text-[#9013fe]  no-underline font-medium hover:underline'
                            >
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}