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
      title: 'Forget About Code',
      name: 'StartUp 1',
      description: 'Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.',
    },
    {
      id: nanoid(6),
      title: 'Forget About Code',
      name: 'StartUp 2',
      description: 'Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.',
    },
    {
      id: nanoid(6),
      title: 'Forget About Code',
      name: 'StartUp 3',
      description: 'Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.',
    },
    {
      id: nanoid(6),
      title: 'Forget About Code',
      name: 'StartUp 4',
      description: 'Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.',
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
