import React,{Component} from 'react';
import classes from './BurgerIng.module.css';
import PropTypes from 'prop-types';

class BurgerIng extends Component{
    render() {
    let ingre = null;

    switch(this.props.type){
        case('bread-bottom'):
            ingre = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingre =(
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>    
                   );
            break;
        case('meat'):
            ingre = <div className={classes.Meat}></div>;
            break;
        case('cheese'):
            ingre = <div className={classes.Cheese}></div>;
            break;
        case('bacon'):
            ingre = <div className={classes.Bacon}></div>;
            break;
        case('salad'):
            ingre = <div className={classes.Salad}></div>;
            break;
        default:
            ingre = null;    
    }
    return ingre;
    }
}
// BurgerIng is class name
 

BurgerIng.propTypes =
{              
    type: PropTypes.string.isRequired
 };
export default BurgerIng;