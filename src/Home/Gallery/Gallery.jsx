/* eslint-disable react/no-unescaped-entities */
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Gallery.css'
import { Slide } from "react-awesome-reveal"



const carousel = (slider) => {
  const z = 600
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

const Gallery = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

    return (
      <Slide direction="up">
        <div className="hidden lg:block">
        <h1 className="text-center my-8 text-[#187E89] text-4xl font-bold">Graduate's Group Picture</h1>
        
      <div className="wrapper my-12 lg:my-36">
        
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/5966011/pexels-photo-5966011.jpeg" alt="" /></div>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg" alt="" /></div>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg" alt="" /></div>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/5537997/pexels-photo-5537997.jpeg" alt="" /></div>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/6147267/pexels-photo-6147267.jpeg" alt="" /></div>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/5965686/pexels-photo-5965686.jpeg" alt="" /></div>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/6147398/pexels-photo-6147398.jpeg" alt="" /></div>
          <div className="carousel__cell number-slide1 "><img className="w-[400px] h-[200px]" src="https://images.pexels.com/photos/7972671/pexels-photo-7972671.jpeg" alt="" /></div>
          
          
        </div>
      </div>
    </div>
      </div>
      </Slide>
    );
};

export default Gallery;