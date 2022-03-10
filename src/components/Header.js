import React from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { User } from "./User";

const Header = () => {
  return (
    <header>
      <Logo />
      <SearchBar />
      <User />
    </header>
  );
};

export { Header };
