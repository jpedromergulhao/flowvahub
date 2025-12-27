import ErrorAlert from "./ErrorAlert";

interface OnboardingNameProps {
    name: string;
    error: string | null;
    onSubmit: (name: string) => void;
    onChange: (value: string) => void;
}

export default function OnboardingName({
    name,
    onSubmit,
    onChange,
    error,
}: OnboardingNameProps) {
    return (
        <div className="min-h-[100dvh] flex justify-center lg:items-center  px-2 relative">
            <div className="max-w-[560px] w-full bg-white box-border my-[2rem] p-[1.5rem] lg:p-[2.5rem] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative h-fit">
                <div className="min-h-[480px] flex flex-col animate-fadeIn">
                    <div className="flex justify-center gap-[0.5rem] mb-[1.5rem]">
                        <div className="size-[8px] rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
                        <div className="size-[8px] rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
                        <div className="size-[8px] rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
                        <div className="size-[8px] rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
                        <div className="w-6 rounded-[4px] bg-[#9013FE] transition-all duration-300"></div>
                    </div>
                    <h2 className="text-[#212529] text-[1.5rem] leading-[1.3rem] mb-[1rem] font-bold text-start">
                        What should we call you?
                    </h2>
                    <p className="text-[0.95rem] text-[#495057] mb-[1.5rem] text-start">
                        Enter your first name so we can personalize your experience
                    </p>
                    <div className="relative group mb-[1.5rem]">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => onChange(e.target.value)}
                            className=" peer w-full py-[0.85rem] px-[1rem] border-[2px] rounded-[16px] text-base transition-all ease-linear duration-[.2s] outline-none focus:border-[#9013fe]"
                            placeholder="Your first name"
                            required
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-[16px] peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                    </div>
                    <div className="flex flex-row-reverse mt-auto pt-[2rem] w-full gap-[1rem]">
                        <button onClick={() => onSubmit(name)} className="inline-flex cursor-pointer flex-1 justify-center font-semibold items-center hover:bg-[#A29BFE] transition-all hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] duration-[0.25s] hover:translate-y-[-2px] active:translate-y-0 w-full text-white bg-[#9013FE] rounded-[100px] py-[0.875rem] px-[1.5rem] border-none">
                            Skip Setup
                        </button>
                        <button className="bg-transparent cursor-pointer font-medium border-none shadow-none rounded-[16px] hover:text-[#9013FE] hover:underline text-sm">
                            Back
                        </button>
                    </div>
                </div>

                {error && (<ErrorAlert error={error} />)}
            </div>
        </div>
    )
}