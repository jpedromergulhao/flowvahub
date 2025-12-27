interface WelcomeCardProps {
    name: string;
}

export default function WelcomeCard({ name }: WelcomeCardProps) {
    return (
        <div className="bg-white p-[2.5rem] rounded-[16px] text-center max-w-[400px] w-[90%] shadow-[0_10px_30px_rgba(0,0,0,0.1)] animate-fadeIn">
            <h2 className="text-[#9013FE] mb-[1.5rem] text-[1.5rem] font-bold tex-center">
                Welcome <span>{name}</span>!
            </h2>
            <p className="text-[0.95rem] text-[#495057] mb-[1.5rem] text-center">
                Taking you to your personalized dashboard now
            </p>
            <div className="loader"></div>
        </div>
    )
}

