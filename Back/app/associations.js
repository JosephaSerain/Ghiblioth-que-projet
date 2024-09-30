// associations.js

// Import des modèles nécessaires aux associations
import { Movie } from './models/Movie.js';
import { Type } from './models/Type.js';
import { Director } from './models/Director.js';
import { List } from './models/List.js';
import { MovieType } from './models/MovieType.js';
import { MovieDirector } from './models/MovieDirector.js';
import { MovieList } from './models/MovieList.js';

// On fait une fonction qu'on exportera avec les associations dedans
export function setupAssociations() {
  // Associations des films avec les types (many to many)
  Movie.belongsToMany(Type, { 
    through: MovieType,
    foreignKey: 'movie_id'
  });
  Type.belongsToMany(Movie, { 
    through: MovieType,
    foreignKey: 'type_id'
  });

  // Associations des films avec les réalisateurs (many to many)
  Movie.belongsToMany(Director, { 
    through: MovieDirector,
    foreignKey: 'movie_id'
  });
  Director.belongsToMany(Movie, { 
    through: MovieDirector,
    foreignKey: 'director_id'
  });

  // Associations des films avec les listes (many to many)
  Movie.belongsToMany(List, { 
    through: MovieList,
    foreignKey: 'movie_id'
  });
  List.belongsToMany(Movie, { 
    through: MovieList,
    foreignKey: 'list_id'
  });
}