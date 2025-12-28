import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { supabase } from "../lib/supabaseCliente";

export default function ShareStack() {
    const user = useContext(UserContext);

    if (!user) return null;

    const { refreshUser } = user;

    const handleShare = async () => {
        const { error } = await supabase.rpc('add_user_points', { points_to_add: 25 });
        if (!error) {
            await refreshUser();
            alert("Shared! +25 points earned.");
        } else {
            alert("There was an error while adding up your points, please try again.");
        }
    };

    return (
        <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
            <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
                <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(144,_19,_254,_0.1)] text-[#9013fe]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                </div>
                <div>
                    <h3 className="font-semibold">Share Your Stack</h3>
                    <p className="text-xs text-gray-500">Earn +25 pts</p>
                </div>
            </div>
            <div className="p-[1rem]">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-sm">Share your tool stack</p>
                    </div>
                    <button onClick={handleShare} className="bg-[#eef2ff] cursor-pointer hover:text-white hover:bg-[#9013fe] text-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                        </svg>
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}