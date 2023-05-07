import logo from '../../assets/logo.svg'
import './Merchant.css'

export function Merchant () {
    return (
        <div className='flex flex-col pt-6 md:pr-12 font-mono'>
            <div className='m-auto w-48 h-48 mb-10 relative z-10 before:absolute before:rounded-full before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400'>
                <img
                    src='https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg'
                    alt=''
                    className='absolute z-10 inset-0 w-full h-full object-cover rounded-full'
                    loading='lazy'
                />
            </div>
            <form className='flex-auto pl-6'>
                <div className='relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6'>
                    <span className='relative shrink mb-2 text-2xl font-semibold text-white'>
                        Maria Alice
                    </span>
                    <a href='#' className='relative  m-1.5 pb-2'>
                        <img className='h-4 w-auto' src={logo} alt='' />
                    </a>
                    <span className='text-xs w-full flex-auto relative uppercase text-teal-400 text-sm'>
                        verificado
                    </span>
                </div>
                <div className='flex items-baseline my-6'>
                    <div className='space-y-3 flex flex-col text-sm font-medium'>
                        <a
                            href='#'
                            className='relative flex grow m-1.5 pb-2 font-bold'
                        >
                            <img
                                className='h-4 w-4 me-2'
                                src='https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png'
                                alt=''
                            />
                            +5519996613308
                        </a>
                        <a
                            href='#'
                            className='relative flex grow m-1.5 pb-2 font-bold'
                        >
                            <img
                                className='h-4 w-4 me-2'
                                src='https://static.cdninstagram.com/rsrc.php/v3/ys/r/aM-g435MtEX.png'
                                alt=''
                            />
                            @aliceperdida
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}
