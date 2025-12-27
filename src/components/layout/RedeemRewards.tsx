import { useContext, useEffect, useState } from "react"
import RedeemFilter from "../../rewards/RedeemFilter";
import { supabase } from "../../lib/supabaseCliente";
import { UserContext } from "../../context/UserContext";

interface Reward {
    id: string;
    title: string;
    description: string;
    points_cost: number;
    icon_text: string;
    status: 'unlocked' | 'locked' | 'coming_soon';
}

export default function RedeemRewards() {
    const [rewards, setRewards] = useState<Reward[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const user = useContext(UserContext);

    const counts = {
        all: rewards.length,
        unlocked: rewards.filter(r => r.status === 'unlocked').length,
        locked: rewards.filter(r => r.status === 'locked').length,
        coming_soon: rewards.filter(r => r.status === 'coming_soon').length,
    };

    if (!user) return null;

    const { refreshUser, points } = user;

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('rewards')
                    .select('*')
                    .order('points_cost', { ascending: true });

                if (error) throw error;
                setRewards(data || []);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRewards();
    }, []);

    const filteredRewards = rewards.filter(reward => {
        if (activeFilter === "all") return true;
        return reward.status === activeFilter;
    });

    const handleRedeem = async (reward: Reward) => {
        if (points < reward.points_cost) {
            alert("You don't have enough points for this reward!");
            return;
        }

        if (!confirm(`Redeem ${reward.title} for ${reward.points_cost} points?`)) return;

        const { data: success, error } = await supabase.rpc('redeem_reward_points', {
            cost: reward.points_cost
        });

        if (error) {
            alert("Transaction error. Try again.");
        } else if (success) {
            alert("Reward redeemed successfully! Check your email.");
            await refreshUser();
        } else {
            alert("Insufficient balance.");
        }
    };

    return (
        <div>
            <h2 className=" text-lg md:text-2xl my-3 text-black border border-l-[4px] border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">
                Redeem Your Points
            </h2>

            <div>
                <RedeemFilter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    counts={counts}
                />
            </div>

            {loading && (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl" />
                    ))}
                </div>
            )}

            {error && (
                <div className="p-4 mt-6 bg-red-50 text-red-600 rounded-lg">
                    Error loading rewards: {error}
                </div>
            )}

            {!loading && !error && (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                    {filteredRewards.map((reward) => (
                        <div
                            key={reward.id}
                            className={`border border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-sm relative overflow-hidden transition-all duration-200 hover:translate-y-[-5px] hover:shadow-md
                                ${reward.status !== 'unlocked' ? 'opacity-80' : ''}
                            `}
                        >
                            <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] bg-[#E9D4FF]">
                                {reward.icon_text}
                            </div>

                            <h4 className="text-center text-[1.1rem] font-semibold mb-2 text-gray-800">
                                {reward.title}
                            </h4>

                            <p className="text-center text-[0.85rem] text-gray-500 mb-4 min-h-[40px]">
                                {reward.description}
                            </p>

                            <div className="flex items-center justify-center text-[#9013fe] font-bold mb-4">
                                <span className="mr-1">⭐</span> {reward.points_cost} pts
                            </div>

                            <button
                                disabled={reward.status !== 'unlocked' || points < reward.points_cost}
                                onClick={() => handleRedeem(reward)}
                                className={`w-full font-semibold p-[0.75rem] rounded-[8px] transition-colors
                                    ${reward.status === 'unlocked'
                                        ? 'bg-[#9013fe] text-white hover:bg-[#7b0fd4] cursor-pointer'
                                        : 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
                                    }
                                    ${points < reward.points_cost ? 'grayscale cursor-not-allowed' : ''}
                                `}
                            >
                                {reward.status === 'locked' && 'Locked'}
                                {reward.status === 'coming_soon' && 'Coming Soon'}
                                {reward.status === 'unlocked' && 'Redeem Now'}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}