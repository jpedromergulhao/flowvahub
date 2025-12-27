interface SuccessBoxProps {
    success: string;
}

export default function SuccessBox({ success }: SuccessBoxProps) {
    return (
        <div className="bg-green-50 text-green-800 py-3 px-4 rounded-[6px] mb-5 text-center text-sm">
            <span>{success}</span>
        </div>
    )
}