import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import NotificationIcon from "../components/NotificationIcon";
import EarnPointsDashboard from "../components/layout/EarnPointsDashboard";
import RewardsNav from "../components/layout/RewardsNav";
import RedeemRewards from "../components/layout/RedeemRewards";

export default function Rewards() {
    const [showRewards, setShowRewards] = useState<boolean>(false);

    return (
        <DashboardLayout>
            <div className="relative bg-gray-50">
                <div className="sticky top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0 lg:py-0">
                    <div className="bg-gray-50 flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                            <button className="lg:hidden">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" width="28">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
                                    </g>
                                </svg>
                            </button>
                            <h1 className="text-xl md:text-[1.5rem] font-medium">Rewards Hub</h1>
                        </div>
                        <NotificationIcon notQuantity={1} />
                    </div>
                </div>
                <div>
                    <p className="text-gray-600">Earn points, unlock rewards, and celebrate your progress!</p>
                    <div className="lg:h-[calc(100vh-110px)] [scrollbar-width:none] [-ms-overflow-style:none] overflow-x-hidden">
                        <div className="ant-tabs ant-tabs-top css-1d4w9r2 mt-[20px]">
                            <RewardsNav
                                showRewards={showRewards}
                                setShowRewards={setShowRewards}
                            />

                            {!showRewards && (<EarnPointsDashboard />)}
                            {showRewards && (<RedeemRewards />)}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}