import Slider from '#ui/Slider'
import Title from '#ui/Title'
import Video from '#ui/Video'

const Hero = () => {
   return (
      <section
         className={`relative h-full bg-black text-white before:absolute before:z-[1] before:h-full before:w-full before:shadow-[inset_0_0_500px_#000] after:absolute after:inset-0 after:z-[2] after:animate-k-light after:bg-[url('/img/light.png')] after:bg-cover after:bg-[center_-4.0625rem] after:bg-no-repeat`}
      >
         <Title />
         <Slider />
         <Video />
      </section>
   )
}

export default Hero
