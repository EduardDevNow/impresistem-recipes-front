import React from 'react'

const Navbar: React.FC = (): JSX.Element => {
    return (
        <header className='h-[100px] px-[20px] flex items-center justify-between border-b-[#e6e6e6e] border-[1px] border-solid'>
            <img src='https://factoryfy.es/wp-content/uploads/dise%C3%B1o-logotipo-blog-cocina.jpg' width={130} height={130} alt='Logo' />
            <div className="hidden gap-[20px] items-center md:flex">
                <h2>Iniciar sesion</h2>
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="border-solid border-[#e6e6e6] border-[1px] rounded-[10px] h-[45px] px-[10px] focus-within:outline-none focus:outline-none focus-visible:outline-none"
                />
            </div>
        </header>
    )
}

export default Navbar