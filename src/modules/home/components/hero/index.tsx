import Image from "next/image"
import porsche from "/public/images/porsche-model.png"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div>
          <Image src={porsche} alt="hero1" />
        </div>
      </div>
    </div>
  )
}

export default Hero
