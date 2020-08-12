import React from "react";
import { Link } from "react-router-dom";
import { ICategories } from "../../interfaces/ICategories";

import Abstract from "../../assets/images/categories/abstract.jpg";
import Animals from "../../assets/images/categories/animals.jpg";
import City from "../../assets/images/categories/city.jpg";
import People from "../../assets/images/categories/people.jpg";
import Nature from "../../assets/images/categories/nature.jpg";
import Japan from "../../assets/images/categories/japan.jpg";
import styles from "./Categories.module.css";

export const Categories: React.FC = () => {
  const categories: Array<ICategories> = [
    { id: 0, name: "Abstract", image: Abstract },
    { id: 1, name: "Animals", image: Animals },
    { id: 2, name: "City", image: City },
    { id: 3, name: "People", image: People },
    { id: 4, name: "Nature", image: Nature },
    { id: 5, name: "Japan", image: Japan },
  ];

  return (
    <div className={styles.categories}>
      <div className="container">
        <ul className={styles.list}>
          {categories.map(({ id, name, image }: ICategories) => {
            return (
              <li className={styles.item} key={id}>
                <Link
                  className={styles.link}
                  to={`/photos/category/${name.toLowerCase()}/`}
                >
                  <img className={styles.image} src={image} alt={name} />
                  <span className={styles.name}>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
