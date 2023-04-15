import React from 'react'
import clsx from 'clsx'

const getClassName=(({className})=>{
    return clsx(
        'text-white text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50',
        className
    )
})

const sizes={
    small:'px-4 py-3',
    medium:'px-6 py-4',
    large:'w-4 px-4 py-3',
    
};

const variants={
    primary:'bg-marigold focus:ring-marigold',
    secondary:'bg-tomato focus:ring-tomato',
    dark:'bg-black focus-ring-white,'
};

function button({
    children,
     className,
    size='small',
    variant='primary',
    ...rest
    }) {
  return (
    <button className={clsx(
        sizes[size],
        variants[variant],
        getClassName[{className}]
    )}
    {...rest}>
        {children}
    </button>
  )
}

export default button
