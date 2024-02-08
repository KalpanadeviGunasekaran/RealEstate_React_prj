import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Founded by industry veterans Emily and David, Horizon Homes is a leading real estate company renowned for its innovative approach and commitment to excellence. Our team of dedicated professionals combines expertise with a personalized touch, guiding clients through seamless buying and selling experiences. Leveraging cutting-edge technology, we streamline processes while maintaining a strong emphasis on client satisfaction.</p>
            <p>Beyond transactions, we are committed to community impact, supporting initiatives for affordable housing and sustainable development. With a focus on integrity and social responsibility, Horizon Homes has earned a reputation for excellence and trustworthiness in the industry. As we continue to expand our reach and uphold our values, we remain dedicated to empowering individuals and shaping vibrant communities for the future.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
