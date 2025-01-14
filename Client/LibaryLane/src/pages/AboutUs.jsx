import  hero_png  from '../assets/hero.png'

const AboutUs = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t font-bold">
        <p className="text-[#414141]">About <span className="text-[#f21c1c] font-medium">Us—</span></p>
      </div>
      <div className="my-14 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px] rounded-lg shadow-lg" src={hero_png} alt="about_image" />
        <div className="flex flex-col font-mono justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to Libaylane, your gateway to a world of stories, knowledge, and inspiration. At Libaylane, we aim to make reading accessible and enjoyable for everyone. Whether you’re looking for free classics or exclusive paid content, we’ve curated a diverse collection of eBooks to cater to all interests. Our mission is to empower readers with the convenience of discovering, accessing, and enjoying books from anywhere. Join us in creating a vibrant community of book lovers and explore the endless possibilities of the written word.
          </p>
          <p>Our commitment goes beyond just offering eBooks. We prioritize variety, quality, and accessibility in every title we provide. With a seamless browsing experience, secure payment options, and instant access to your favorite reads, we're here to make your reading journey enriching and enjoyable
          </p>
          <b className="text-gray-800 text-2xl font-mono">Our <span className="text-[#f21c1c]">Goal—</span></b>
          <p>At Libaylane, our vision is to redefine the reading experience by blending variety, quality, and convenience..</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
