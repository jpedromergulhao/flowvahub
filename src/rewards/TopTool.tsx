export default function TopTool() {
    return (
        <div className="hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(0,_0,_0,_0.1)] bg-white rounded-[16px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden border border-[#f3f4f6] transition-all duration-300 ease-in-out">
            <div className="p-4 bg-[linear-gradient(135deg,_#9013FE_0%,_#70D6FF_100%)] text-white relative overflow-hidden">
                <span className="tabsolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                </span>
                <div className="flex items-center justify-between">
                    <h3 className="text-[1.25rem] font-bold relative z-[2]">
                        Top Tool Spotlight
                    </h3>
                    <div className="overflow-hidden relative rounded-full size-10 md:size-16">
                        <img src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png" alt="Icon" loading="lazy" />
                    </div>
                </div>
                <p className="text-lg font-bold">
                    Reclaim
                </p>
            </div>
            <div className="p-[1rem]">
                <div className="flex justify-start mb-[1rem]">
                    <div className="w-[24px] h-[24px] animate-pulse bg-[#eef2ff] rounded-[6px] flex items-center justify-center mr-[1rem] flex-shrink-0 text-[#9013fe]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h4 className="mb-[0.25rem] font-semibold">
                            Automate and Optimize Your Schedule
                        </h4>
                        <p className="text-[0.875rem] text-gray-600">
                            Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings, and breaks to boost productivity. Free to try — earn Flowva Points when you sign up!
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-[1rem] py-[5px] flex justify-between items-center border border-t-[#f3f4f6] border-b-0 border-r-0 border-l-0">
                <button className="bg-[#9013fe] cursor-pointer hover:bg-[#8628da] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" className="svg-inline--fa fa-user-plus " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                    </svg>
                    Sign up
                </button>
                <button className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] cursor-pointer text-white flex justify-between py-2 px-4 rounded-full font-semibold text-sm">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gift" className="svg-inline--fa fa-gift mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"></path>
                    </svg>
                    Claim 50 pts
                </button>
            </div>
        </div>
    )
}