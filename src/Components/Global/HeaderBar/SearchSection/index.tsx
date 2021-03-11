import { InputSearch, SearchButton, Wrapper } from "./styles";

import {BsSearch} from 'react-icons/bs'

export default function SearchSection() {
  return (
    <Wrapper>
      <InputSearch placeholder="@username" />
      <SearchButton>
        <BsSearch />
      </SearchButton>
    </Wrapper>
  );
}
