import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { supabase } from "../lib/supabaseCliente";

export default function DailyStreak() {
    const user = useContext(UserContext);
    const [isClaiming, setIsClaiming] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    if (!user) return null;

    const { dailyStreak, refreshUser } = user;

    const todayIndex = (new Date().getDay() + 6) % 7;
    const days: string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    const handleClaim = async () => {
        setIsClaiming(true);
        const { data, error } = await supabase.rpc('claim_daily_streak');

        if (error || !data[0].success) {
            alert(data ? data[0].message : "Error claiming points");
        } else {
            await refreshUser();
            setShowModal(true);
        }
        setIsClaiming(false);
    };

    return (
        <div className="shadow-[0_5px_15px_rgba(0,_0,_0,_0.05)] transition-all rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] border border-[#f3f4f6] overflow-hidden duration-200">

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl max-w-[380px] w-full p-6 relative animate-in fade-in zoom-in duration-300">
                        <button onClick={() => setShowModal(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20 text-green-500">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-[#9013fe] mb-2">Level Up! 🎉</h2>
                        <div className="text-4xl font-extrabold text-center bg-gradient-to-br from-[#9013fe] to-[#FF9FF5] bg-clip-text text-transparent mb-4">+5 Points</div>
                        <p className="text-gray-600 text-center mb-6">You've claimed your daily points! Come back tomorrow for more!</p>
                        <button onClick={() => setShowModal(false)} className="w-full py-3 bg-[#9013fe] text-white rounded-xl font-bold">Awesome!</button>
                    </div>
                </div>
            )}

            <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" className="svg-inline--fa fa-calendar  text-[#70D6FF] h-5 w-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"></path>
                    </svg>
                    Daily Streak
                </h3>
            </div>
            <div className="p-4">
                <div className="font-extrabold text-[36px] text-[#9013fe] mb-2">
                    {dailyStreak} day
                </div>
                <div className="flex mt-4 space-x-2 justify-center">
                    {days.map((day, index) => (
                        <div key={index} className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all 
                            ${index === todayIndex
                                ? "bg-[#70D6FF] border-4 border-cyan-200 text-white"
                                : "bg-gray-200 text-gray-500"}`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
                <p className="text-[0.875rem] text-gray-600 text-center mt-3">
                    Check in daily to to earn +5 points
                </p>
                <button
                    onClick={handleClaim}
                    disabled={isClaiming}
                    className="mt-3 cursor-pointer w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-[#9013fe] text-white hover:shadow-[0_4px_12px_rgba(144,_19,_254,_0.2)] hover:translate-y-[-2px]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-5 w-5">
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    {isClaiming ? "Claiming..." : "Claim Today's Points"}
                </button>
            </div>
        </div>
    )
}