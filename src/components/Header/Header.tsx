import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

import Search from "../../assets/images/icons/search.svg";
import Arrow from "../../assets/images/icons/arrow.svg";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const history = useHistory();

  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search.length > 0) {
      history.push(`/photos/category/${search}`);

      setSearch("");
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link className={styles.link} to="/">
              Passion
            </Link>
          </div>
          <div className={`${styles.block} ${isToggle && styles.active}`}>
            <nav className={styles.nav}>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to="/videos/"
              >
                Videos
              </NavLink>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to="/illustrations/"
              >
                Illustrations
              </NavLink>
            </nav>
            <form className={styles.search} onSubmit={submitForm}>
              <input
                onChange={(event) => setSearch(event.target.value)}
                className={styles.input}
                type="text"
                placeholder="Search"
                value={search}
              />
              <img className={styles.img} src={Search} alt="Search" />
            </form>
            <img
              className={styles.hidden}
              src={Arrow}
              alt="Arrow"
              onClick={() => setIsToggle(!isToggle)}
            />
          </div>
          <div className={styles.burger} onClick={() => setIsToggle(!isToggle)}>
            {Array.from({ length: 3 }).map((_, index: number) => (
              <div key={index} className={styles.item} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
