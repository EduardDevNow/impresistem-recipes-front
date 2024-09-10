
interface IFilterProps {
    onFilter: (filter: 'Easy' | 'Medium' | 'Hard' | '') => void
    filter: 'Easy' | 'Medium' | 'Hard' | ''
}

const Filter: React.FC<IFilterProps> = ({ onFilter, filter }) => {
    
    return (
        <div className='flex flex-col gap-[10px] border-[#e6e6e6] border-solid border-[1px] p-[10px] items-center'>
            <span id='easy' className={`text-base font-medium cursor-pointer ${filter === 'Easy' ? 'text-[#00C853]' : 'text-black'}`} onClick={() => onFilter('Easy')}>Opcion Easy</span>
            <span id='medium' className='text-base font-medium cursor-pointer'>Opcion Medium</span>
            <span id='hard' className='text-base font-medium cursor-pointer'>Opcion Hard</span>
        </div>
    )
}

export default Filter