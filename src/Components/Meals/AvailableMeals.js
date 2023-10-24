import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Ducana & SaltFish",
    description: "Transport your taste buds to the sun-soaked, vibrant shores of the Caribbean with the irresistible culinary duo of Ducana and Saltfish. This mouthwatering combination isn't just a meal; it's a symphony of flavors, a celebration of tradition, and a journey to the heart of the Caribbean.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "KingFish",
    description: "Embark on a royal culinary journey with Virgin Islands Kingfish, where the azure waters meet the tantalizing flavors of the Caribbean. This exquisite dish isn't just a meal; it's a royal banquet, a triumph of local ingredients, and a tribute to the rich culture of the Virgin Islands!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Johnny Cake",
    description: "Prepare to be transported to the heart of the Caribbean with Johnny Cake, a beloved delicacy that is more than just food; it's a warm embrace of tradition and a journey into the heart of island life.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Stew Old Wife",
    description: "Delight your senses with the exquisite flavors of Stew Old Wife, a cherished gem of Caribbean cuisine. This dish isn't just a meal; it's a culinary journey into the heart of the islands, a tribute to the sea's bounty, and an exploration of the region's rich culinary heritage.",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      id={meals.id}
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
