import { useContext, useState, type CSSProperties } from "react";
import DailyStreak from "../../rewards/DailyStreak";
import PointsBalance from "../../rewards/PointsBalance";
import ReferAndWin from "../../rewards/Refer&Win";
import ShareStack from "../../rewards/ShareStack";
import TopTool from "../../rewards/TopTool";
import { UserContext } from "../../context/UserContext";

interface referAndEarnStatsProps {
    number: number;
    name: string;
}

interface SocialLink {
    href: string;
    path: string;
    style: CSSProperties;
    viewBox?: string;
}

export default function EarnPointsDashboard() {
    const user = useContext(UserContext);
    const [copied, setCopied] = useState(false);

    if (!user) return null;

    const { points, name, id } = user;
    const formattedName = name.trim();
    const referralLink = `https://app.flowvahub.com/signup/?ref=${formattedName}${id}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(referralLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    const referAndEarnStatus: referAndEarnStatsProps[] = [
        {
            number: 0,
            name: "Referrals",
        },
        {
            number: points,
            name: "Points Earned",
        }
    ]

    const socialLinks: SocialLink[] = [
        {
            href: 'https://web.facebook.com/people/Flowvahub/61569773436543/',
            path: 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z',
            style: { background: '#1877F2' },
            viewBox: "0 0 320 512"
        },
        {
            href: 'https://x.com/FlowvaHub',
            path: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
            style: { background: '#000000' },
            viewBox: "0 0 512 512"
        },
        {
            href: 'https://www.linkedin.com/company/flowva/',
            path: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
            style: { background: '#0077B5' },
            viewBox: "0 0 448 512"
        },
        {
            href: `https://wa.me/?text=Join%20me%20on%20Flowvahub%20and%20start%20earning%20rewards!%20${encodeURIComponent('https://app.flowvahub.com/signup/?ref=' + user.name)}`,
            path: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
            style: { background: '#25D366' },
            viewBox: "0 0 448 512"
        },
    ];

    return (
        <div>
            <h2 className="text-lg md:text-2xl my-3 text-black border border-l-[4px] border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">
                Your Rewards Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PointsBalance />
                <DailyStreak />
                <TopTool />
            </div>
            <div className="space-y-6">
                <h2 className="text-lg md:text-2xl my-3 text-black border border-l-[4px] border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">
                    Earn More Points
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ReferAndWin />
                    <ShareStack />
                </div>
            </div>
            <div className="space-y-6 ">
                <h2 className="text-lg md:text-2xl my-3 text-black border border-l-[4px] border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">
                    Refer & Earn
                </h2>
                <div className="shadow-[0_5px_15px_rgba(0,_0,_0,_0.05)]  rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
                    <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 text-[#9013fe]">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Share Your Link
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Invite friends and earn 25 points when they join!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[1rem]">
                        <div className="space-y-6">
                            <div className="flex justify-between mb-[1rem]">
                                {referAndEarnStatus.map((status, index) => (
                                    <div key={index} className="text-center p-[0.5rem] flex-1">
                                        <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                                            {status.number}
                                        </div>
                                        <div className="text-gray-600">
                                            {status.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="text-sm mb-2 text-gray-700">
                                    Your personal referral link:
                                </p>
                                <div className="relative">
                                    <input type="text" readOnly className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10" value={referralLink}>
                                    </input>
                                    <button
                                        onClick={handleCopy}
                                        aria-label="Copy"
                                        className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer z-10"
                                    >
                                        {
                                            copied ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="text-green-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-[#9013fe]">
                                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                </svg>
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center gap-[1rem] mt-[1rem]">
                                {socialLinks.map((link, index) => (
                                    <a href={link.href} key={index} rel="noopener noreferrer" target="_blank" style={link.style} className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" className="svg-inline--fa " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d={link.path}></path>
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}