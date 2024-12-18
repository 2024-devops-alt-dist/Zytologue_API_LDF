-- Inserción de datos en la tabla brewery
INSERT INTO brewery (brewery_name, country, region, city, adress, inauguration_date)
VALUES
('Golden Hops Brewery', 'USA', 'California', 'San Francisco', '123 Craft Lane', '2010-05-15'),
('Silver Barrel Brewery', 'Germany', 'Bavaria', 'Munich', '45 Beer Strasse', '1990-09-12'),
('Emerald Brew Co.', 'Ireland', 'Leinster', 'Dublin', '88 Stout Rd.', '2005-06-01'),
('Amber Waves Brewing', 'Canada', 'Ontario', 'Toronto', '77 Maple Ave.', '2015-03-20'),
('Ruby Ale Works', 'UK', 'England', 'London', '101 Ale Blvd.', '2000-11-11');

-- Inserción de datos en la tabla category
INSERT INTO category (category_name, description)
VALUES
('IPA', 'Hoppy and strong beer with a bitter taste.'),
('Stout', 'Dark beer with roasted flavors.'),
('Lager', 'Crisp and refreshing beer.'),
('Pilsner', 'Light and golden beer with a smooth finish.'),
('Amber Ale', 'Rich and malty beer.');

-- Inserción de datos en la tabla "user"
INSERT INTO "user" (first_name, email, password, legal_age)
VALUES
('John Doe', 'johndoe@example.com', 'hashedpassword1', TRUE),
('Jane Smith', 'janesmith@example.com', 'hashedpassword2', TRUE),
('Mike Brown', 'mikebrown@example.com', 'hashedpassword3', TRUE),
('Emma Davis', 'emmadavis@example.com', 'hashedpassword4', FALSE),
('Chris Wilson', 'chriswilson@example.com', 'hashedpassword5', TRUE);

-- Inserción de datos en la tabla ingredient
INSERT INTO ingredient (ingredient_name, type, description, provider)
VALUES
('Cascade Hops', 'Hops', 'Aromatic hops with citrus notes.', 'HopCo'),
('Malted Barley', 'Grain', 'Base malt for most beers.', 'GrainMasters'),
('Yeast', 'Yeast', 'Essential for fermentation.', 'YeastKing'),
('Coriander Seeds', 'Spice', 'Adds a citrusy flavor.', 'SpiceWorld'),
('Orange Peel', 'Fruit', 'Enhances aroma in Belgian-style beers.', 'FruitDirect');

-- Inserción de datos en la tabla beer
INSERT INTO beer (beer_name, description, abv, colour, bitternes, body, release_date, photoURL, id_brewery, id_category)
VALUES
('Hoppy IPA', 'A bold IPA with strong citrus flavors.', 6.5, 'Golden', 50, 'Medium', '2023-01-01', 'https://example.com/hoppyipa.jpg', 1, 1),
('Dark Stout', 'Rich and creamy stout with coffee notes.', 8.0, 'Black', 30, 'Full', '2022-12-01', 'https://example.com/darkstout.jpg', 3, 2),
('Refreshing Lager', 'Crisp lager perfect for summer.', 4.5, 'Pale Yellow', 10, 'Light', '2023-03-01', 'https://example.com/lager.jpg', 2, 3),
('Smooth Pilsner', 'A light and refreshing pilsner.', 5.0, 'Golden', 15, 'Light', '2022-11-01', 'https://example.com/pilsner.jpg', 4, 4),
('Malty Amber Ale', 'A well-balanced amber ale.', 5.5, 'Amber', 20, 'Medium', '2023-02-01', 'https://example.com/amberale.jpg', 5, 5);

-- Inserción de datos en la tabla beer_ingredient
INSERT INTO beer_ingredient (id_beer, id_ingredient)
VALUES
(1, 1), (1, 2), (2, 3), (2, 2), (3, 1), (3, 3), (4, 4), (4, 2), (5, 5), (5, 1);

-- Inserción de datos en la tabla review
INSERT INTO review (id_beer, id_user, bodytext, stars, photo)
VALUES
(1, 1, 'Amazing IPA, very hoppy!', 5, 'https://example.com/review1.jpg'),
(2, 2, 'Rich and creamy, perfect stout.', 4, 'https://example.com/review2.jpg'),
(3, 3, 'Very refreshing, loved it.', 4, 'https://example.com/review3.jpg'),
(4, 4, 'Not bad, but not my favorite.', 3, 'https://example.com/review4.jpg'),
(5, 5, 'Great balance of flavors.', 5, 'https://example.com/review5.jpg');

-- Inserción de datos en la tabla favourite_beer
INSERT INTO favourite_beer (id_beer, id_user)
VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (1, 2), (3, 1), (2, 5);
