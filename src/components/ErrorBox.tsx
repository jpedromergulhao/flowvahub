interface ErrorBoxProps {
    error: string;
}

export default function ErrorBox({ error }: ErrorBoxProps) {
    return (
        <div className=" bg-red-500/10 text-[#EF4444] border-red-500/20 border p-3 rounded-[6px] mb-5 text-[12px] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{error}</span>
        </div>
    )
}