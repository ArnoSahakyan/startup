import { useState } from 'react'
import './Header.scss'
import Slider from "react-slick";
import { nanoid } from 'nanoid'

export default function Header() {
  const navlinks = [
    'Home', 'Features', 'Pricing', 'Blog'
  ]

  const headerInfo = [
    {
      id: nanoid(6),
      name: 'Startup 1',
      title: 'Forget About Code',
      description: 'Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.',
    },
    {
      id: nanoid(6),
      name: 'Startup 2',
      title: 'Empower Your Ideas',
      description: 'Unleash the potential of your ideas with our intuitive framework. No need to worry about technical complexities. Focus on what matters most—bringing your vision to life.',
    },
    {
      id: nanoid(6),
      name: 'Startup 3',
      title: 'Simplify Your Workflow',
      description: 'Streamline your workflow and amplify your productivity. Our framework removes the barriers of coding, allowing you to concentrate on refining your concept and reaching your goals faster.',
    },
    {
      id: nanoid(6),
      name: 'Startup 4',
      title: 'Elevate Your Creativity',
      description: 'Elevate your creative process to new heights. With our framework, innovation knows no bounds. Say goodbye to coding hassles and hello to limitless possibilities for your next big project.',
    },
  ]

  const [currentButton, SetCurrentButton] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <header className='Header'>
      <div className="container Header__content" >
        <nav>
          <ul>
            {
              navlinks.map((link, index) => {
                return (
                  <li className={currentButton === index ? 'active' : ''} onClick={() => SetCurrentButton(index)} key={index}>{link}</li>
                )
              })
            }
          </ul>
        </nav>
        <Slider {...settings}>
          {
            headerInfo.map(info => {
              return (
                <div key={info.id} className="Information">
                  <span>{info.name}</span>
                  <h1>{info.title}</h1>
                  <p>{info.description}</p>

                </div>
              )
            })
          }
        </Slider>
        <button className='headerButton'>Create An Account</button>
      </div>
    </header>
  )
}
