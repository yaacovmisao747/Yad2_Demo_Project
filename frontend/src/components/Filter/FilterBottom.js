import React, { useState } from 'react';
import CarDetails from '../CarComponents/CarDetails';
import './filter.css';

const FilterBottom = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;
   
  // Check if cars array is empty or not fetched yet
  if (!cars || cars.length === 0) {
    return <div>No cars available</div>;
  }

  // Calculate the indexes of the current page's cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const renderCars = () => {
    return currentCars.map((car) => (
      <CarDetails key={car._id} car={car} />
    ));
  };

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0)
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='filter_bottom'>
      <div className="cars">{renderCars()}</div>
      <div>
        <button className='next' onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next&nbsp;&raquo;
        </button>
        <span>{currentPage}</span>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        {'\u00AB'}Previous
        </button>
      </div>
    </div>
  );
};

export default FilterBottom;
