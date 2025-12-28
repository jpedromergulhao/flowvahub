import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function PointsBalance() {
    const user = useContext(UserContext);

    if (!user) return null;

    const { points } = user;

    return (
        <div className="shadow-[0_5px_15px_rgba(0,_0,_0,_0.05)] transition-all rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] border border-[#f3f4f6] overflow-hidden duration-200">
            <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="award" className="svg-inline--fa fa-award h-5 w-5 text-[#9013fe]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"></path>
                    </svg>
                    Points Balance
                </h3>
            </div>
            <div className="p-[1rem]">
                <div className="flex justify-between items-center">
                    <div className="font-extrabold text-[36px] text-[#9013fe] m-[10px_0]">
                        {points}
                    </div>
                    <div className="w-[100px] h-[100px] flex items-center justify-center">
                        <div className="animate-spin-once text-[64px]">🪙</div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">
                            Progress to 
                            <span className="font-medium">
                                $5 Gift Card
                            </span>
                        </span>
                        <span className="font-medium">
                            {points}/5000
                        </span>
                    </div>
                    <div className="h-[8px]  bg-[#e5e7eb] rounded-[9999px] overflow-hidden">
                        <div className="h-full bg-gradient-to-br from-[#9013fe] to-[#FF9FF5] rounded-full transition-[width] duration-500 ease-in-out" style={{ width: "0%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">🚀 Just getting started — keep earning points!</p>
                </div>
            </div>
        </div>
    )
}