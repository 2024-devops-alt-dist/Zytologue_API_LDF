-- Delete tables that depends on other tables
DROP TABLE IF EXISTS beer_ingredient CASCADE;
DROP TABLE IF EXISTS favourite_beer CASCADE;
DROP TABLE IF EXISTS review CASCADE;

-- Delete main tables  (referenced by others)
DROP TABLE IF EXISTS beer CASCADE;
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS ingredient CASCADE;
DROP TABLE IF EXISTS category CASCADE;

-- Erase base table ( without dependencies)
DROP TABLE IF EXISTS brewery CASCADE;
