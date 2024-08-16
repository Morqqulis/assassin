import { secondaryFont } from '#settings/fonts'

const Title = ({ className }: { className?: string }) => {
   return (
      <h1
         className={`${secondaryFont.className} pointer-events-none absolute top-10 z-[4] flex w-full justify-center gap-5 text-center text-[32px] text-white/75 ${className}`}
      >
         Hoodie
         <span className={`text-accent`}>Mantle</span>
      </h1>
   )
}

export default Title
