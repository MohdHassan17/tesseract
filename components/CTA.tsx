import React from 'react'
import { SpinningText } from './ui/spinning-text'
import { ArrowDown } from 'lucide-react'

function CTA() {
  return (
    <div className='relative w-60 h-60  flex items-center justify-center '>
        <SpinningText radius={7} className='uppercase font-semibold'> Let's Talk · Let's Talk · Let's Talk · Let's Talk  </SpinningText>

        <div className="absolute inset-0 flex items-center justify-center">
            <ArrowDown size={50} color='#F02796' /> 
        </div>
    </div>
  )
}

export default CTA