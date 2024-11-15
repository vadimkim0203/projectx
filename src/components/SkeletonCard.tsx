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

export const SkeletonProductPage = () => (
  <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE Skeleton */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max animate-pulse bg-gray-200 rounded-md">
        <div className="w-full h-full bg-gray-300"></div>
      </div>

      {/* TEXT Skeleton */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="w-1/3 h-8 bg-gray-300 rounded-md mb-4"></div> {/* Product name skeleton */}
        <div className="w-1/2 h-6 bg-gray-200 rounded-md mb-4"></div> {/* Description skeleton */}
        <div className="h-[2px] bg-gray-100"/>
        <div className="flex items-center gap-4">
          <div className="w-1/4 h-8 bg-gray-300 rounded-md"></div> {/* Price skeleton */}
        </div>
        <div className="h-[2px] bg-gray-100"/>
        
        {/* Other skeleton placeholders */}
        <div className="w-1/2 h-8 bg-gray-300 rounded-md mb-4"></div>
        <div className="w-1/2 h-8 bg-gray-300 rounded-md mb-4"></div>
        <div className="w-1/3 h-8 bg-gray-300 rounded-md"></div>
      </div>
    </div>
);