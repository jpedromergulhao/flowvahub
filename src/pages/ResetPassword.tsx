import { Link, useNavigate } from "react-router";
import { supabase } from "../lib/supabaseCliente";
import { useEffect, useState, type FormEvent } from "react";
import ErrorBox from "../components/ErrorBox";

export default function ResetPassword() {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [confPassword, setConfPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfPassword, setShowConfPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    //It prevents someone from accessing /reset-password directly
    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (!data.session) navigate("/");
        });
    }, []);

    async function handleResetPassword(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

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
            const { error } = await supabase.auth.updateUser({
                password,
            });

            if (error) {
                setError(error.message);
                return;
            }

            setSuccess(true);
            setTimeout(() => navigate("/"), 2000);
        } catch (err) {
            setError("Unexpected error. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
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

    if (success) {
        return (
            <div className="min-h-[100dvh] flex justify-center py-[20px] px-3 items-center bg-gradient-to-br from-[#9013fe] to-[#6D28D9]">
                <div className="flex justify-center w-full max-w-[420px] ">
                    <div className="w-full max-w-[420px] bg-white rounded-[10px] animate-fadeIn shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-10">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-[rgba(16,185,129,0.1)] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[40px] h-[40px] text-[#10B981]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h1 className="text-[24px] font-semibold text-[#6D28D9] mb-2">
                                Password Reset Successful</h1>
                            <p className="text-[#6B7280] text-[14px] leading-[1.5]">
                                Your password has been updated successfully.
                            </p>
                            <div className="text-[#6B7280] mt-4 text-[14px] flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-[#A78BFA] border-t-[#9013fe] rounded-full animate-spin"></div>
                                <span>Redirecting you to login...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-[100dvh] flex justify-center py-[20px] px-3 items-center bg-gradient-to-br from-[#9013fe] to-[#6D28D9]'>
            <div className='flex justify-center w-full max-w-[420px]'>
                <div className='w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-[30px] px-[20px] lg:p-[40px] bg-white rounded-[10px] animate-fadeIn h-fit'>
                    <div className='mb-[30px]'>
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#F5F3FF] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#9013fe] w-[32px] h-[32px]">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <h1 className='text-2xl text-[#6D28D9] font-semibold  mb-[8px] text-center w-full'>
                            Reset Your Password
                        </h1>
                        <p className='text-sm text-[#6B7280] text-center w-full '>
                            Enter a new password for your account
                        </p>
                    </div>

                    {error && (<ErrorBox error={error} />)}

                    <div className='w-full'>
                        <form onSubmit={handleResetPassword} className='w-full text-[#111827]'>
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
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                    <div className='pointer-events-none cursor-pointer absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]'></div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility("password")}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto"
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
                                        onChange={e => setConfPassword(e.target.value)}
                                        required
                                    />
                                    <div className='pointer-events-none cursor-pointer absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]'></div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility("confirm")}
                                    aria-label={showConfPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto"
                                >
                                    {showConfPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className='w-full text-base h-[55px] cursor-pointer flex justify-center gap-2 items-center p-[11px] text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-[.2s] rounded-[100px] hover:bg-[#6D28D9]'
                                disabled={loading}
                            >
                                {loading ? 'Resetting the password...' : 'Reset Password'}
                            </button>
                        </form>

                        <div className='mt-5 text-sm flex flex-row gap-2 justify-center'>
                            <p className='text-[#6B7280]'>
                                Remember your password?
                            </p>
                            <Link
                                to="/"
                                className='text-[#9013fe]  no-underline font-medium hover:underline'
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}