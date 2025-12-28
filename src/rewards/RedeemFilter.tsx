interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface CountsProps {
    all: number;
    unlocked: number;
    locked: number;
    coming_soon: number;
}

interface RedeemFilterProps {
  activeFilter: string;
  setActiveFilter: (id: string) => void;
  counts: CountsProps
}

export default function RedeemFilter({ activeFilter, setActiveFilter, counts }: RedeemFilterProps) {
  const filters: FilterOption[] = [
    { id: 'all', label: 'All Rewards', count: counts.all },
    { id: 'unlocked', label: 'Unlocked', count: counts.unlocked },
    { id: 'locked', label: 'Locked', count: counts.locked },
    { id: 'coming_soon', label: 'Coming Soon', count: counts.coming_soon},
  ];

  return (
    <div className="relative border-b border-gray-200 mt-4 overflow-x-auto overflow-hidden">
      <div className="flex gap-6 min-w-max">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative pb-3 text-sm md:text-base font-medium transition-all cursor-pointer flex items-center gap-2
                ${isActive ? "text-[#9013fe]" : "text-gray-500 hover:text-gray-700"}
              `}
            >
              {filter.label}
              
              <span className={`
                ml-1 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center font-semibold transition-colors
                ${isActive 
                  ? "bg-[#9013fe]/10 text-[#9013fe]" 
                  : "bg-[#E2E8F0] text-[#718096]"}
              `}>
                {filter.count}
              </span>

              {isActive && (
                <span className="absolute left-0 -bottom-[1px] h-[3px] w-full bg-[#9013fe] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}