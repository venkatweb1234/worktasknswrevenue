import {
  SearchIconContainer,
  SearchInputStyle,
  SearchInputWrapper,
} from "./SearchInput.styles";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

export interface SearchInputProps {
  searchText: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ searchText, handleSearchChange }: SearchInputProps) => {
  return (
    <div>
      <SearchInputWrapper>
        <SearchInputStyle
          type="text"
          placeholder="Search by Text....."
          value={searchText}
          onChange={handleSearchChange}
          role="textInput"
          id="searchInput"
          aria-label="search"
        />
        <SearchIconContainer id="SearchContainer">
          <SearchIcon width="20" height="20" fill="#aaa" />
        </SearchIconContainer>
      </SearchInputWrapper>
    </div>
  );
};

export default SearchInput;
