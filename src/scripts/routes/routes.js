import RestaurantList from '../views/pages/restaurant-list';
import FavoriteList from '../views/pages/favorite-list';
import RestaurantDetails from '../views/pages/restaurant-details';

const routes = {
  '/': RestaurantList,
  '/home': RestaurantList,
  '/favorites': FavoriteList,
  '/detail/:id': RestaurantDetails,
};

export default routes;
