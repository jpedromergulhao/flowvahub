import { Link } from 'react-router';
import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabaseCliente';
import ErrorBox from '../components/ErrorBox';
import SuccessBox from '../components/SuccessBox';

export default function ForgotPassword() {
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    async function handleResetPassword(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });

            if (error) {
                setError(error.message);
                return;
            }

            setSuccess("We've sent you a password reset link. If your email is registered, it should arrive shortly.");
        } catch (err) {
            setError("Unexpected error. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='min-h-[100dvh] flex justify-center py-[20px] px-3 items-center bg-gradient-to-br from-[#9013fe] to-[#6D28D9]'>
            <div className='flex justify-center w-full max-w-[420px]'>
                <div className='w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-[30px] px-[20px] lg:p-[40px] bg-white rounded-[10px] animate-fadeIn h-fit'>
                    <div className='mb-[30px]'>
                        <h1 className='text-2xl text-[#6D28D9] font-semibold  mb-[8px] text-center w-full'>
                            Reset Password
                        </h1>
                        <p className='text-sm text-[#6B7280] text-center w-full '>
                            Enter your email to receive a reset link
                        </p>
                    </div>

                    {error && (<ErrorBox error={error} />)}
                    {success && (<SuccessBox success={success} />)}

                    <div className='w-full'>
                        <form onSubmit={handleResetPassword} className='w-full text-[#111827]'>
                            <label htmlFor="email" className='block text-sm font-medium mb-2 text-[#111827]'>Email</label>
                            <div className='relative group w-full mb-5'>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    placeholder='user@example.com'
                                    value={email}
                                    className='peer w-full border text-base py-[10px] px-[14px]  border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]'
                                    onChange={e => setEmail(e.target.value.trim())}
                                    required
                                />
                                <div className='pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]'></div>
                            </div>

                            <button
                                type="submit"
                                className='w-full h-[55px] gap-2 flex justify-center text-base items-center p-[11px] text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-[.2s] rounded-[100px] hover:bg-[#6D28D9]"'
                                disabled={loading}
                            >
                                {loading ? 'Sending the link...' : 'Send Reset Link'}
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