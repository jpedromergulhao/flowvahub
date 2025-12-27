interface RewardsNavProps {
    showRewards: boolean;
    setShowRewards: (value: boolean) => void;
}

export default function RewardsNav({ showRewards, setShowRewards }: RewardsNavProps) {
    return (
        <div className="relative border-b border-gray-200 mt-4">
            <div className="flex gap-8">
                <button
                    onClick={() => setShowRewards(false)}
                    className={`relative pb-3 text-base font-medium transition-colors cursor-pointer
            ${!showRewards ? "text-[#9013fe]" : "text-gray-500 hover:text-gray-700"}
          `}
                >
                    Earn Points
                    {!showRewards && (
                        <span className="absolute left-0 -bottom-[1px] h-[3px] w-full bg-[#9013fe] rounded-full" />
                    )}
                </button>

                <button
                    onClick={() => setShowRewards(true)}
                    className={`relative pb-3 text-base font-medium transition-colors cursor-pointer
            ${showRewards ? "text-[#9013fe]" : "text-gray-500 hover:text-gray-700"}
          `}
                >
                    Redeem Rewards
                    {showRewards && (
                        <span className="absolute left-0 -bottom-[1px] h-[3px] w-full bg-[#9013fe] rounded-full" />
                    )}
                </button>
            </div>
        </div>
    );
}
