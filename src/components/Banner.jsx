import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import ade  from "../assets/ade.jpg"

const Banner = () => {
  return (
    <div name="home" className="h-screen w-full bg-black">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-white">I'm Fullstack Developer</h1>
                <p className="text-gray-500 py-4 max-w-md">
                  Highly motivated to develop skills
                  professional, want to learn and start a career in programming.
                  Have an honest personality, high curiosity,
                  easy to adapt and responsible is an advantage
                  which I can contribute.
                </p>
                <div>
                  <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to bg-yellow-300 cursor-pointer'>
                    Projects
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                  </button>
                </div>
            </div>
            <div>
          <img
            src={ade}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-400"
          />
        </div>
        </div>
    </div>
  )
}

export default Banner









// import { Row, Container, Col } from "react-bootstrap"
// import {ArrowRightCircle} from 'react-bootstrap-icons';
// import './Banner.css'

// export const Banner = () => {
//     return (
//         <section className="Banner" id="home">
//             <Container className="align-items-center">
//                 <Row>
//                     <Col xs={12} md={6} xl={7}>
//                         <span className="tag-line">Welcome To My Portfolio </span>
//                         <h1>{"Hi I'm Webdecoded"}<span className="wrap">Web Developer</span></h1>
//                         <p>I Learn about Data Preprocessing, Data Cleaning, Feature
//                            Engineering and Build Machine Learning Algorithms, i Could
//                            Analyze Large Amounts Information to Discover Trends and
//                            Patterns, and Build Predictive Models Machine Learning and
//                            Deep Learning algorithms, I am Capable Apply my Skill for
//                            the Company.
//                         </p>
//                         <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
// }