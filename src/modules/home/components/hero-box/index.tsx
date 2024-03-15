import { ProductCollectionWithPreviews } from "types/global"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import New from "/public/images/sedan.svg"
import Used from "/public/images/compact.svg"
import Rental from "/public/images/convertible.svg"

interface HeroBoxProps {
  collections: ProductCollectionWithPreviews[]
}

const data = [
  {
    id: "1",
    title: "New",
    handle: "new-cars",
    products: [],
    link: "new",
    image: "New",
  },
  {
    id: "2",
    title: "Used",
    handle: "used-cars",
    products: [],
    link: "used",
    image: "Used",
  },
  {
    id: "3",
    title: "Rental",
    handle: "rental-cars",
    products: [],
    link: "rental",
    Image: "Rental",
  },
]

const HeroBox: React.FC<HeroBoxProps> = ({ collections }) => {
  const totalProducts = collections.reduce((total, collection) => {
    return total + collection.products.length
  }, 0)

  return (
    <div className="relative md:-mt-20 md:mx-44 rounded-lg shadow-xl p-10 lg:p-5 z-10 bg-white">
      <div className="flex flex-col md:flex-row justify-between px-4">
        <div>
          <h1 className="md:text-4xl text-2xl md:text-start text-center font-semibold text-slate-600">
            Search for your dream car
          </h1>
          <ul className="flex flex-col md:flex-row  md:gap-5 justify-center items-center md:justify-start">
            <li className="flex py-12">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href={`/collections/new`}
              >
                <div className=" bg-gray-100 w-48 flex flex-col justify-center items-center rounded-md">
                  <Image src={New} width={100} alt="hero1" />
                  <div className="pb-5">New</div>
                </div>
              </LocalizedClientLink>
            </li>
            <li className="flex py-12">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href={`/collections/used`}
              >
                <div className=" bg-gray-100 w-48 flex flex-col justify-center items-center rounded-md">
                  <Image src={Used} width={100} alt="hero1" />
                  <div className="pb-5">Used</div>
                </div>
              </LocalizedClientLink>
            </li>
            <li className="flex py-12">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href={`/collections/rental`}
              >
                <div className=" bg-gray-100 w-48 flex flex-col justify-center items-center rounded-md">
                  <Image src={Rental} width={100} alt="hero1" />
                  <div className="pb-5">Rental</div>
                </div>
              </LocalizedClientLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-semibold">{totalProducts} Cars</p>
          <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href={`/store`}
          >
            <button className="w-40 h-12 mt-4 bg-[#0c62c8] text-white rounded-md">
              Show All
            </button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}
export default HeroBox
