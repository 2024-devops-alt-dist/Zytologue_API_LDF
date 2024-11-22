INSERT INTO brewery (brewery_name, country, region, city, adress, inauguration_date) VALUES
('Brewery A', 'France', 'Normandie', 'Rouen', '123 Rue de la Biere', '2010-01-10'),
('Brewery B', 'Germany', 'Bavaria', 'Munich', '456 Bierstrasse', '2005-05-15'),
('Brewery C', 'USA', 'California', 'San Francisco', '789 Golden Gate Ave', '2012-09-25'),
('Brewery D', 'Belgium', 'Flanders', 'Brussels', '101 Belgian Way', '2015-11-30'),
('Brewery E', 'USA', 'Oregon', 'Portland', '123 Brew Lane', '2018-04-11');

INSERT INTO category (category_name, description) VALUES
('IPA', 'India Pale Ale, known for its hop-forward flavors'),
('Lager', 'A pale, refreshing beer with a smooth taste'),
('Stout', 'A dark beer with strong flavors of roasted malt'),
('Pale Ale', 'A hoppy beer with a moderate alcohol content'),
('Wheat Beer', 'A light beer with fruity and spicy flavors');

INSERT INTO ingredient (ingredient_name, type, description, provider) VALUES
('Hops', 'Flavoring', 'Provides bitterness and aroma', 'HopCo'),
('Malt', 'Grain', 'Used for the base of the beer', 'BarleyCo'),
('Yeast', 'Fermenting', 'Used to ferment the sugars into alcohol', 'YeastWorks'),
('Water', 'Liquid', 'Main ingredient of beer', 'WaterSource'),
('Citrus Peel', 'Flavoring', 'Adds a fresh, fruity aroma', 'FruitFarm');

INSERT INTO beer (beer_name, description, abv, colour, bitternes, body, release_date, id_brewery, id_category) VALUES
('Brewery A IPA', 'A strong, hoppy IPA', 7.5, 'Golden', 60, 'Medium', '2020-07-10', 1, 1),
('Brewery B Lager', 'Crisp and clean lager', 4.5, 'Pale Yellow', 15, 'Light', '2019-06-05', 2, 2),
('Brewery C Stout', 'Rich, dark stout with coffee and chocolate', 6.8, 'Black', 30, 'Full', '2018-11-12', 3, 3),
('Brewery D Pale Ale', 'Moderate pale ale with balanced hop flavor', 5.2, 'Amber', 45, 'Light', '2017-05-20', 4, 4),
('Brewery E Wheat Beer', 'Fruity and smooth wheat beer', 5.0, 'Cloudy Yellow', 20, 'Light', '2021-02-15', 5, 5),
('Brewery A Amber Ale', 'Amber ale with malt sweetness', 6.0, 'Amber', 25, 'Medium', '2020-04-25', 1, 4),
('Brewery B Dunkel', 'Dark lager with caramel flavor', 5.6, 'Dark Brown', 18, 'Full', '2018-09-10', 2, 2),
('Brewery C Golden Ale', 'Crisp and light ale', 4.2, 'Golden', 20, 'Light', '2021-01-15', 3, 4);

INSERT INTO beer_ingredient (id_beer, id_ingredient) VALUES
(1, 1), (1, 2), (1, 3), (2, 2), (2, 4), (3, 1), (3, 2), (3, 5), (4, 1), (4, 3),
(5, 2), (5, 4), (6, 2), (6, 5), (7, 1), (7, 2);

INSERT INTO beer_photo (id_beer, photoURL) VALUES
(1, 'https://example.com/photo1.jpg'),
(2, 'https://example.com/photo2.jpg'),
(3, 'https://example.com/photo3.jpg'),
(4, 'https://example.com/photo4.jpg');

INSERT INTO review (id_beer, id_user, bodytext, stars, photo) VALUES
(1, 1, 'Great IPA, very hoppy!', 5, 'https://example.com/review1.jpg'),
(2, 2, 'Clean lager, great for summer.', 4, 'https://example.com/review2.jpg'),
(3, 3, 'Rich and smooth stout, loved it!', 5, 'https://example.com/review3.jpg'),
(4, 4, 'Perfect pale ale for a casual drink.', 3, 'https://example.com/review4.jpg'),
(5, 5, 'Nice wheat beer with a fruity twist.', 4, 'https://example.com/review5.jpg');

INSERT INTO favourite_beer (id_beer, id_user) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 2),
(3, 4);

INSERT INTO "user" (first_name, email, password, legal_age) VALUES
('Alice', 'alice@example.com', 'password123', true),
('Bob', 'bob@example.com', 'password456', true),
('Charlie', 'charlie@example.com', 'password789', true),
('David', 'david@example.com', 'password012', true),
('Eve', 'eve@example.com', 'password345', true);
