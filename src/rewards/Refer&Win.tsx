export default function ReferAndWin() {
    return (
        <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
            <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
                <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                </div>
                <div>
                    <h3 className="font-semibold">Refer and win 10,000 points!</h3>
                </div>
            </div>
            <div className="p-[1rem]">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-sm">Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of <span className="text-[#9013fe]">10,000 points</span>. Friends must complete onboarding to qualify.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}