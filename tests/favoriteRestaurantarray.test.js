/* eslint-disable no-undef */
import { actsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((resto) => resto.id == id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getRestaurant(resto.id)) {
      return;
    }

    favoriteRestaurant.push(resto);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((resto) => resto.id != id);
  },
};

describe('Favorite resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });

  actsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
