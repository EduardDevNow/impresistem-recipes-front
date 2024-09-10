import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./Navbar'));
const PageTitle = dynamic(() => import('./PageTitle'));

const useSharedComponents = () => {
    return {
        Navbar,
        PageTitle
    }
}

export default useSharedComponents