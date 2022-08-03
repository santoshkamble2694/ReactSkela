import React from 'react'
import ReactSkela from './ReactSkela'

export const SkelaBar = ({bars=4, barBaseHeight="300px", barBaseWidth="300px", barHeights=["300px", "250px", "300px", "200px"], borderColor="#dddddd", randomHeights=false, ...rest}) => {
  
  return (
    <div className='skela-bar-container' style={{borderColor: borderColor, width:barBaseWidth, height:barBaseHeight}}>
      {Array(bars).fill(null).map((row, rIndex) => {
        return(
          <ReactSkela type='line' height={randomHeights ? Math.floor(100 + Math.random()*(300 - 100 + 1)) :barHeights[rIndex] ? barHeights[rIndex] : Math.floor(100 + Math.random()*(300 - 100 + 1))} key={rIndex} style={{minWidth:"50px"}} {...rest} />
        )
      })}
    </div>
  )
}