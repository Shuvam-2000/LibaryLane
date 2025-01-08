import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OurBooks = () => {

  const navigate = useNavigate()

  // state for rendering the books data from the backend
  const [ bookinfo, setbookInfo ] = useState([])
  
  // error message in case books not avaliable
  const [ errorMessage, setErrorMessage ] = useState("")

  // fetching the books data from the server
  useEffect(() => {
    const bookData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_BOOK_API)
        setbookInfo(res.data.book)
      } catch (error) {
        setErrorMessage('Books Not Avaliable Now', error)
      }
    }
    bookData()
  },[])

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-center justify-center text-sm py-4 sm:my-4 border-gray-300">
          <h1 className="text-center sm:text-3xl text-xl font-bold">
            Our<span className="text-red-500"> Books—</span>
          </h1>
          <p className='text-xs sm:text-sm text-black text-center font- mt-2 sm:tracking-wider'>
            Have a look through all our collections and find your favorite book
          </p>
        </div>

        {/* Filters */}
        <div className="flex-1">
          <div className="flex justify-center text-xs sm:text-2xl mb-4">
            <div className="flex overflow-x-auto sm:space-x-8 space-x-2 scrollbar-hide">
              {/* Relevant Product Sorting  */}
              <select className="border border-gray-300 sm:text-sm text-xs sm:px-4 px-2 pb-1 pt-1 rounded-md font-mono cursor-pointer">
                <option value="relevant">Relevant Products</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>

              {/* Genre Filter */}
              <select className="border border-gray-300 sm:text-sm text-xs sm:px-4 px-2 pb-1 pt-1 rounded-md font-mono cursor-pointer">
                <option value="category">Genre</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Romance</option>
                <option value="children">Fantasy</option>
                <option value="children">Mystery</option>
              </select>

              {/* Author Filter */}
              <select className="border border-gray-300 sm:text-sm text-xs sm:px-4 px-2 pb-1 pt-1 rounded-md font-mono cursor-pointer">
                <option value="author">Author</option>
                <option value="author-a">Author A</option>
                <option value="author-b">Author B</option>
                <option value="author-c">Author C</option>
              </select>

              {/* Language Filter */}
              <select className="border border-gray-300 sm:text-sm text-xs sm:px-4 px-2 pb-1 pt-1 rounded-md font-mono cursor-pointer">
                <option value="language">Language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Show Books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 mt-10">
          {bookinfo ? bookinfo.map((book) => (
            <div
              key={book._id}
              className="border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="sm:text-lg text-sm font-semibold text-gray-800 mb-2 text-center">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Author: <span className="font-medium">{book.author}</span>
                </p>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Genre: <span className="font-medium">{book.genre}</span>
                </p>
                <p className="text-sm text-gray-600 mb-4 text-center">
                   {book.category ? <span className="font-medium px-3 py-1 bg-blue-600 text-white border border-blue rounded-md">Free</span> : <span className="font-medium">Price: Rs. {book.price}</span>}
                </p>
                <button
                  className={`w-full text-sm ${
                    book.category ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                  } text-white rounded-lg py-2 mt-4 transition duration-200`} onClick={() => book.category ? navigate(`/story/${book._id}`): console.log('Please Buy The Book') }
                >
                  {book.category ? "Read" : "Buy"} 
                </button>
              </div>
            </div>
          )) : 
            <div className="justify-center text-center my-10 mx-5">
              <p className='text-red-500 text-center font-bold text-xl'>{errorMessage}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default OurBooks;
