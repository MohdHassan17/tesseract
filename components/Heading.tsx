import React from 'react'

type HeadingProps = {
    children: React.ReactNode;
    className?: string;
} 

function Heading({children, className} : HeadingProps) {
  return (
    <>
    <div className="">
            <h2 className={`  text-white font-[1000] uppercase ${className ?? "text-6xl" }`}>
              {children}  
            </h2>
          </div>
    </>
  )
}

export function EmphasisText ({children, className} : HeadingProps) {
    return (
        <>
        <span className={`text-(--color-primary) ${className}`}>{children}</span>
        </>
    )
}

export default Heading