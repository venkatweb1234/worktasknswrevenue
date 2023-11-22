import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";
import CustomImage from "../../components/customimage/CustomImage";
import SearchInput from "../../components/searchinput/SearchInput";
import {
  Button,
  FlexContainer,
  H2,
  MainDiv,
  PageNationDiv,
  SearchInputContainer,
} from "./ImagesStyles";

interface Data {
  // data structure
  images: Image[];
  success: boolean;
  total_images: number;
}

interface Image {
  url: string;
  title: string;
  description: string;
  id: number;
}

const Images: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const filteredImages = data?.images.filter((image) =>
    image.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const totalItems = filteredImages?.length as number;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    while (startPage > 1 && endPage - startPage < maxPagesToShow - 1) {
      startPage--;
    }

    while (endPage < totalPages && endPage - startPage < maxPagesToShow - 1) {
      endPage++;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setCurrentPage(1); // Reset to the first page when the search term changes
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/images");
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MainDiv>
      <SearchInputContainer>
        <H2>Images Data</H2>
        <SearchInput
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
      </SearchInputContainer>
      <LoadingSpinner loading={loading} />
      {data && (
        <>
          <FlexContainer>
            {/* Display images for the current page */}
            {filteredImages &&
              filteredImages
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((image, index) => (
                  <div key={index}>
                    <CustomImage image={image} />
                  </div>
                ))}
          </FlexContainer>
          {/* Pagination buttons */}
          <PageNationDiv style={{ padding: "50px 0" }}>
            <Button
              onClick={handlePrevClick}
              disabled={currentPage === 1}
              role="button"
              aria-label="Prev"
            >
              Prev
            </Button>

            {getPageNumbers().map((pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={currentPage === pageNumber}
                role="button"
                aria-label="CurrentNumber"
              >
                {pageNumber}
              </Button>
            ))}

            <Button
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
              role="button"
              aria-label="Next"
            >
              Next
            </Button>
          </PageNationDiv>
        </>
      )}
      {error && <p style={{ color: "red" }}>No images are displayed!</p>}
    </MainDiv>
  );
};

export default Images;
