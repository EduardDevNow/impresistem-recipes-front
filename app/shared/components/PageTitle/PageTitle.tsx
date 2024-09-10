import React from 'react'
import { IPageTitleProps } from '@/utils/models/PageTitle'

const PageTitle: React.FC<IPageTitleProps> = ({ title }): JSX.Element => (
    <div className='h-[60px] w-[98%] p-[20px] flex justify-center items-center border-[#e6e6e6] border-[1px] mx-auto border-solid mt-[20px]'>
        <h1 className='font-2xl font-semibold'>{title}</h1>
    </div>
)

export default PageTitle