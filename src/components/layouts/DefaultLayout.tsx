import Footer from '#layouts/Footer/Footer'
import Header from '#layouts/Header/Header'
import { IDefaultProvider } from '#types/interfaces'

const DefaultLayout: React.FC<IDefaultProvider> = ({ children, full = true }: IDefaultProvider): JSX.Element => {
   return (
      <>
         <div className={`flex h-full flex-col relative overflow-x-clip`}>
            {full ? (
               <>
                  <Header />
                  {children}
                  <Footer />
               </>
            ) : (
               <>{children}</>
            )}
         </div>
      </>
   )
}

export default DefaultLayout
