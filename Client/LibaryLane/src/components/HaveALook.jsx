import freecourses from '../public/freecourses.json';

const HaveALook = () => {
  const filterBooks = freecourses.filter((data) => data.category === 'Free');
  console.log(filterBooks);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-sm py-4 sm:border-none border-b border-gray-300">
        <h1 className="text-center sm:text-2xl text-xl font-medium">
          Have A Look<span className="text-red-500"> At Our Free Books</span>
        </h1>
      </div>
    </>
  );
};

export default HaveALook;
