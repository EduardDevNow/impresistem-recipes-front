import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./Navbar'));
const PageTitle = dynamic(() => import('./PageTitle'));
const Filter = dynamic(() => import('./Filter'));

const useSharedComponents = () => {
    return {
        Navbar,
        PageTitle,
        Filter
    }
}

export default useSharedComponents