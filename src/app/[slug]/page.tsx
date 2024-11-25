import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>

      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages/>
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          The Salomon ACS Pro GORE TEX technical sneaker is the perfect companion on the trail, particularly in the wetter months thanks to its waterproof membrane. The Agile Chassis System provides game changing stability, and the brands Quicklace system means you re ready to go in a flash.
        </p>
        <div className="h-[2px] bg-gray-100"/>
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-2xl">$45</h3>
        </div>
        <div className="h-[2px] bg-gray-100"/>
      <CustomizeProducts/>
      <Add/>
      <div className="h-[2px] bg-gray-100"/>
      <div className="text-sm">
        <h4 className="font-medium mb-4">Sizing</h4>
        <p className="">
          Model is 6ft 2in/1.88m, with a 37.5&apos;/94cm chest, a 36&apos;/91cm waist, and is wearing a size Medium
        </p>
      </div>

      <div className="text-sm">
        <h4 className="font-medium mb-4">Shipping</h4>
        <p className="">
          Here needs to make a logic based on a user authentication. If logged in and provided the information regarding the shipping address, then show all shippig possibilities.
        </p>
      </div>

      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p className="">
          Extra field for refund information 
        </p>
      </div>
      </div>
    </div>
  )
}

export default SinglePage