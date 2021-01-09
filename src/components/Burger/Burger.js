import React from 'react';
import classes from './Burger.module.css';
import BurgerIng from './BurgerIng/BurgerIng';

const burger = (props) =>{

    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey] )].map(( _, i) => {
          return <BurgerIng key = {igKey + i} type={igKey} />;
        });
    });



    return(
        <div className={classes.Burger}>
            <BurgerIng type="bread-top" />
           { transformedIngredients }
            <BurgerIng type="bread-bottom" />
        </div>
    );
};
export default burger;