import freecourses from '../public/freecourses.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HaveALook = () => {

  // filtering free books from data
  const filterBooks = freecourses.filter((data) => data.category === 'Free');

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-sm py-4 sm:my-4 border-gray-300">
        <h1 className="text-center sm:text-2xl text-xl font-bold">
          Have A Look<span className="text-red-500"> At Our Free Books—</span>
        </h1>
        <h2 className="text-center sm:text-sm text-xs text-gray-600 mt-2">
          Explore a wide range of free books to enhance your knowledge and skills.
        </h2>
        <div className="mt-8 w-full">
          <Slider {...settings}>
            {filterBooks.map((book) => (
              <div key={book.id} className="p-2">
                <div className="overflow-hidden border rounded-lg shadow-lg sm:hover:shadow-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                  <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
                  <div className="p-2">
                    <p className="text-center mb-4 text-sm font-bold">Name: {book.title}</p>
                    <p className="text-center mb-4 text-xs text-gray-500 font-bold">Author: {book.author}</p>
                    <p className="text-center text-sm bg-red-500 text-white rounded-lg py-2 mt-10">{book.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HaveALook;