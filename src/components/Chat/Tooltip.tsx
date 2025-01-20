import { ReactNode } from 'react';

const Tooltip: React.FC<{ children: ReactNode; tooltipText: string }> = ({
  children,
  tooltipText,
}) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute hidden capitalize group-hover:block bg-gray-700 text-white text-sm rounded p-1 w-max z-50 -translate-x-1/2 left-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {tooltipText}
        <div className="absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-700 left-1/2 -translate-x-1/2 top-full"></div>
      </div>
    </div>
  );
};

export default Tooltip;
