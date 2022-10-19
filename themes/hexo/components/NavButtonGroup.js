
import React from 'react'
import Link from 'next/link'

/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = (props) => {
  const { categories } = props

  return <nav id='home-nav-button' className={'md:h-52 md:mt-6 xl:mt-32 px-5 mt-8 flex flex-wrap md:max-w-5xl space-y-2 md:space-y-0 md:flex justify-center max-h-90 overflow-auto font-sans'}>
    {categories.map(category => {
      return <Link key={`${category.name}`} title={`${category.name}`} href={`/category/${category.name}`} passHref>
            <a className='text-center w-full md:mx-6 md:w-40 md:h-14 lg:h-20 h-14 justify-center items-center flex border-2 cursor-pointer rounded-lg glassmorphism text-sm font-light hover:bg-white hover:text-black duration-200 font-light'>{category.name}</a>
        </Link>
    })}
  </nav>
}
export default NavButtonGroup
