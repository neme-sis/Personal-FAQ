import React from 'react'
import './FAQ.css'
import Tilt from 'react-parallax-tilt'
import questions from './questions'
import ProfileCard from './profileCard'
import SingleQuestion from './SingleQuestion'

const FAQ = () => {
  return (
    <div className="main">
      <div className='grid'>
        <Tilt className="grid1" tiltMaxAngleX={12.5} tiltMaxAngleY={12.5}>
          <ProfileCard/>
        </Tilt>
        <div className="grid2">
            {questions.map(que => {
              return <SingleQuestion key={que.id} {...que}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default FAQ