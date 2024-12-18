-- ## 1 ## Lister les bières par taux d'alcool, de la plus légère à la plus forte.
SELECT
  beer_name,
  abv
FROM
  beer
ORDER BY
  abv asc;

-- ## 2 ## Afficher le nombre de bières par catégorie.
SELECT
  c.category_name,
  COUNT(b.id_beer) AS number_of_beers
FROM
  beer b
  JOIN category c ON b.id_category = c.id_category
GROUP BY
  c.category_name;

-- ## 3 ## Trouver toutes les bières d'une brasserie donnée.
SELECT
  beer_name
FROM
  beer
  JOIN brewery ON beer.id_brewery = brewery.id_brewery
WHERE
  brewery.brewery_name = 'Brewery One';

-- ## 4 ## Lister les utilisateurs et le nombre de bières qu'ils ont ajoutées à leurs favoris.
SELECT
  first_name,
  COUNT(fb.id_beer) AS number_of_favourite_beers
FROM
  "user"
  JOIN favourite_beer fb ON "user".id_user = fb.id_user
GROUP BY
  "user".first_name
  -- ## 5 ## Ajouter une nouvelle bière à la base de données.
INSERT INTO
  beer (
    beer_name,
    description,
    abv,
    colour,
    bitternes,
    body,
    release_date,
    id_brewery,
    id_category
  )
VALUES
  (
    'Farmers IPA',
    'A strong, hoppy IPA with citrus notes',
    5.0,
    'Amber',
    80,
    'Medium',
    '2017-08-25',
    12,
    2
  );

-- ## 6 ## Afficher les bières et leurs brasseries, ordonnées par pays de la brasserie.
SELECT
  beer_name,
  br.country
FROM
  beer b
  JOIN brewery br ON b.id_brewery = br.id_brewery
ORDER BY
  br.country
  -- ## 7 ## Lister les bières avec leurs ingrédients.
SELECT
  b.beer_name,
  i.ingredient_name
FROM
  beer b
  JOIN beer_ingredient bi ON bi.id_beer = b.id_beer
  JOIN ingredient i ON i.id_ingredient = bi.id_ingredient
  -- ## 8 ## Afficher les brasseries et le nombre de bières qu'elles produisent, pour celles ayant plus de 5 bières.
SELECT
  br.brewery_name,
  COUNT(b.id_beer) AS number_of_beers
FROM
  brewery br
  JOIN beer b ON b.id_brewery = br.id_brewery
GROUP BY
  br.brewery_name
HAVING
  COUNT(b.id_beer) > 5
  -- ## 9 ## Lister les bières qui n'ont pas encore été ajoutées aux favoris par aucun utilisateur.
SELECT
  b.beer_name,
  b.id_beer
FROM
  beer b
WHERE
  b.id_beer NOT IN (
    SELECT
      fb.id_beer
    FROM
      favourite_beer fb
  )
  -- ## 10 ## Trouver les bières favorites communes entre deux utilisateurs.
SELECT
  b.beer_name
FROM
  favourite_beer fb2
  JOIN favourite_beer fb1 ON fb1.id_beer = fb2.id_beer
  JOIN beer b ON b.id_beer = fb1.id_beer
WHERE
  fb1.id_user = 1
  AND fb2.id_user = 2
  -- ## 11 ## Afficher les brasseries dont les bières ont une moyenne de notes supérieure à une certaine valeur.
SELECT
  br.brewery_name,
  AVG(r.stars) AS average_rating
FROM
  brewery br
  JOIN beer b ON b.id_brewery = br.id_brewery
  JOIN review r ON r.id_beer = b.id_beer
GROUP BY
  br.brewery_name,
  br.id_brewery
HAVING
  AVG(r.stars) > 3
ORDER BY
  br.id_brewery;

-- ## 12 ## Mettre à jour les informations d'une brasserie.
UPDATE brewery
SET
  brewery_name = 'Brewery One1',
  adress = 'New adress',
  city = 'New city'
WHERE
  id_brewery = 1;

--example with brewery with id = 1
-- we then show all the information of the updated brewery
SELECT
  *
FROM
  brewery b
WHERE
  b.id_brewery = 1
  -- ## 13 ## Supprimer les photos d'une bière en particulier.
DELETE FROM beer_photo
WHERE
  id_beer = 1;
