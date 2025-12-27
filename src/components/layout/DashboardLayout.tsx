import { useEffect, useState, type ReactNode } from "react"
import Loader from "../Loader";
import OnboardingName from "../OnboardingName";
import WelcomeCard from "../WelcomeCard";
import Sidebar from "./Sidebar";
import { fetchUser, updateUserName } from "../../services/user";
import { UserContext, type UserContextData } from "../../context/UserContext";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [user, setUser] = useState<UserContextData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isFirstAccess, setIsFirstAccess] = useState<boolean>(false);
    const [isFetchingDashboard, setIsFetchingDashboard] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    async function loadUser() {
        try {
            setIsFetchingDashboard(true);
            setLoading(true);

            const data = await fetchUser();

            setUser({
                id: data.id,
                name: data.name ?? "",
                email: data.email,
                avatar: data.avatar,
                points: data.points,
                dailyStreak: data.dailyStreak,
                refreshUser: loadUser,
            });

            setIsFirstAccess(!data.name);
        } catch (err) {
            console.error("Failed to load user", err);
        } finally {
            setLoading(false);
            setIsFetchingDashboard(false);
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    async function handleNameSubmit(name: string) {
        setLoading(true);
        setError(null);

        if (!name.trim()) {
            setError("Please enter your name");
            setLoading(false);
            return;
        }

        try {
            await updateUserName(name);
            await loadUser();
            setIsFirstAccess(false);
        } catch (err) {
            console.error(err);
            setError("Failed to save your name. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <Loader />;

    if (!user) return null;

    if (isFirstAccess) {
        return (
            <OnboardingName
                name={user.name}
                error={error}
                onChange={(value) =>
                    setUser((prev) => prev && { ...prev, name: value })
                }
                onSubmit={handleNameSubmit}
            />
        );
    }

    if (isFetchingDashboard) return <WelcomeCard name={user.name} />;

    return (
        <UserContext.Provider value={user}>
            <div className="flex flex-col md:flex-row min-h-[100dvh] lg:h-screen  lg:md:overflow-hidden w-full">
                <div className={`fixed inset-y-0 left-0 z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                    <Sidebar onClose={() => setIsSidebarOpen(false)} />
                </div>
                
                {isSidebarOpen && (
                    <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-30 md:hidden" />
                )}
                <main className="w-full bg-gray-50 px-[1rem] lg:px-[2rem] lg:pt-[2rem] min-h-screen flex-grow md:overflow-y-auto box-border lg:min-h-0">
                    {children}
                </main>
            </div>
        </UserContext.Provider>
    )
}