import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./Navbar'));

const useSharedComponents = () => {
    return {
        Navbar
    }
}

export default useSharedComponents