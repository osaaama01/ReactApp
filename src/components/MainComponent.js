import { Component } from "react";
import Header from "./HeaderComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onDishSelect={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          comments={this.state.comments}
          selectedDish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
