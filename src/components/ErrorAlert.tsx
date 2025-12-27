interface ErrorAlertProps {
    error: string;
}

export default function ErrorAlert({ error }: ErrorAlertProps) {
    return (
        <div className="w-fit fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#FFEBEE] text-[#C62828] px-6 py-3 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-[1000] font-medium opacity-100 transition-opacity duration-300 ease-in-out flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>{error}</span>
        </div>
    )
}