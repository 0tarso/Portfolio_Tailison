import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full max-w-7xl min-[1400px]:max-w-[1350px] mx-auto px-4 mb-11 min-h-screen'>
            {children}
        </div>
    )
}

export default Container