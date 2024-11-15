// Skeleton component using a simple placeholder for product cards

export const SkeletonCard = () => (
  <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] animate-pulse">
    <div className="relative w-full h-80 bg-gray-300 rounded-md"></div>
    <div className="flex justify-between mt-2">
      <div className="bg-gray-300 w-1/2 h-5 rounded-md"></div>
      <div className="bg-gray-300 w-1/4 h-5 rounded-md"></div>
    </div>
    <div className="bg-gray-300 w-[98px] h-8 rounded-2xl mt-2"></div>
  </div>
);