import Slider from "react-slick";
import './Features.scss'

export default function Features() {

  const features = [
    {
      id: 1,
      title: 'We Create Something New',
      content: 'We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.',
      copy_title: '30 New feature pages',
      copy_content: 'Startup Framework contains components and complex blocks which can easily.',
      diamond_title: 'Useful Symbol Components',
      diamond_content: 'Samples will show you the feeling on how to play around using the components.'
    },
    {
      id: 2,
      title: 'We Drive Innovation',
      content: 'Embrace innovation with our latest product designed to revolutionize the way designers, developers, and companies approach website creation.',
      copy_title: '20 Dynamic Feature Pages',
      copy_content: 'Explore our extensive library of feature pages designed to meet the diverse needs of startups. ',
      diamond_title: 'Unlock the Power of Symbols',
      diamond_content: 'Discover the versatility of our symbol components, carefully crafted to elevate your website design. '
    },
    {
      id: 3,
      title: 'Efficiency Redefined',
      content: 'Say goodbye to tedious website development processes. Spend less time coding and more time realizing your ideas.',
      copy_title: 'Versatile Components and Blocks',
      copy_content: 'Dive into a treasure trove of components and complex blocks within the Startup Framework.',
      diamond_title: 'Seamless Integration, Seamless Experience',
      diamond_content: 'Seamlessly integrate symbol components into your website design and witness the magic unfold. '
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
  };

  return (
    <div className='FeaturesBG'>

      <div className="container Features">

        <div className="Features__img">
          <img src="/features-laptop-big.png" alt="laptop" />
        </div>

        <Slider {...settings}>
          {
            features.map(feature => {
              return <div key={feature.id} className="Slide">
                <div className="Slide__top">
                  <h3>{feature.title}</h3>
                  <p>{feature.content}</p>
                </div>
                <div className="Slide__left">
                  <h4>{feature.copy_title}</h4>
                  <p>{feature.copy_content}</p>
                </div>
                <div className="Slide__right">
                  <h4>{feature.diamond_title}</h4>
                  <p>{feature.diamond_content}</p>
                </div>
              </div>
            })
          }
        </Slider>

      </div>
    </div>
  )
}
