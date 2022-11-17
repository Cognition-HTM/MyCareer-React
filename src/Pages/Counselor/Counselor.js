import React from 'react'
import Blogs from '../../Components/Counselor/Blogs'
import CounselorHeader from '../../Components/Counselor/CounselorHeader'
import Meet from '../../Components/Counselor/Meet'
import Stats from '../../Components/Counselor/Stats'

function Counselor() {
  return (
    <>
    <CounselorHeader />
    <Stats />
    <Blogs /> 
    <Meet />

    </>
  )
}

export default Counselor