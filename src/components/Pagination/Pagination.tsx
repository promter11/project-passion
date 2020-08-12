import React from "react";
import { Link } from "react-router-dom";
import { IPaginationProps } from "../../interfaces/IPaginationProps";

import styles from "./Pagination.module.css";

export const Pagination: React.FC<IPaginationProps> = ({
  page,
  scrollToRef,
}) => {
  return (
    <ul className={styles.pagination}>
      {Array.from({ length: 5 }).map((_, index: number) => {
        const idx: number = index + 1;
        const pageActiveClass: string =
          idx === +page || (idx === 1 && !page) ? ` ${styles.active}` : "";

        return (
          <li key={idx} className={styles.item}>
            <Link
              to={`?page=${idx}`}
              className={`${styles.link}${pageActiveClass}`}
              onClick={scrollToRef}
            >
              {idx}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
