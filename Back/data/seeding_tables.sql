
-- SCRIPT SQL donné à titre indicatif. Les scripts JS ont le même effet --

BEGIN;

INSERT INTO "type"
  ("name")
VALUES
  ('Fantasy'),
  ('Aventure'),
  ('Documentaire'),
  ('Drame'),
  ('Guerre'),
  ('Fantastique'),
  ('Romance'),
  ('Tranches de vie'),
  ('Biographie romancée'),
  ('Historique')
;

INSERT INTO "movie" 
  ("id", "name", "date", "resume", "bande_annonce")
VALUES
  (1, 'Nausicaa et la vallée du vent', 1984, 'Nausicaä de la Vallée du Vent suit la princesse Nausicaä qui, dans un monde post-apocalyptique, tente de protéger la nature et de prévenir un conflit entre les humains et les créatures de la forêt toxique.', 'https://www.youtube.com/watch?v=tUdnqn3-Nto'),
  (2, 'Le Château dans le Ciel', 1986, 'Une jeune fille et un garçon cherchent un château flottant légendaire tout en échappant à des pirates et à une organisation militaire.', 'https://www.youtube.com/watch?v=7lx-WILYZPY'),
  (3, 'L''histoire des canaux de Yanagawa', 1987, 'L''Histoire des canaux de Yanagawa suit un jeune garçon qui explore les canaux historiques de Yanagawa, découvrant des légendes locales et la beauté de son patrimoine culturel.', 'Pas de bande-annonce'),
  (4, 'Mon Voisin Totoro', 1988, 'Deux sœurs rencontrent des créatures magiques, dont le gentil Totoro, en s''installant à la campagne.', 'https://www.youtube.com/watch?v=OLSbD5fZ8tw'),
  (5, 'Le Tombeau des Lucioles', 1988, 'Deux enfants luttent pour survivre pendant la Seconde Guerre mondiale au Japon, illustrant la tragédie de la guerre.', 'https://www.youtube.com/watch?v=ELGUE86HPSc'),
  (6, 'Kiki la petite Sorcière', 1989, 'Une jeune sorcière s''installe dans une nouvelle ville pour apprendre à vivre de ses compétences et découvrir son indépendance.', 'https://www.youtube.com/watch?v=N0qM33pJw48'),
  (7, 'Souvenirs goutte à goutte', 1991, 'Souvenirs goutte à goutte suit Nonoko, une jeune fille qui se remémore son enfance dans un village rural, célébrant les joies simples et la beauté de la nature.', 'https://www.youtube.com/watch?v=OfkQlZArxw0'),
  (8, 'Porco Rosso', 1992, 'Un pilote de chasse transformé en cochon combat des pirates tout en explorant son passé et ses sentiments.', 'https://www.youtube.com/watch?v=ZKWQiT1O0zg'),
  (9, 'Je peux entendre l''Océan', 1993, 'Je peux entendre l''océan suit Saku et Shizuku, deux adolescents qui se lient d''amitié pendant l''été, partageant leurs rêves et leurs sentiments naissants.', 'https://www.youtube.com/watch?v=WvL3zJfAJKg'),
  (10, 'Pompoko', 1994, 'Pompoko suit des tanukis qui utilisent des pouvoirs magiques pour protéger leur habitat menacé par l''expansion urbaine, mêlant humour et message écologique.', 'https://www.youtube.com/watch?v=apnUpi26KQU&t=2s'),
  (11, 'Si tu tends l''oreille', 1995, 'Si tu tends l''oreille suit Shizuku, une jeune fille qui rêve d''écrire et découvre un chat mystérieux, ce qui l''amène à rencontrer Seiji, avec qui elle partage ses passions.', 'https://www.youtube.com/watch?v=0pVkiod6V0U'),
  (12, 'Princesse Mononoké', 1997, 'Princesse Mononoké suit Ashitaka, un prince qui cherche à rétablir l''équilibre entre des dieux animaux de la forêt et des humains exploitant les ressources naturelles.', 'https://www.youtube.com/watch?v=xgheDznGY-c&ab_channel=MemberMovies'),
  (13, 'Mes Voisins les Yamada', 1999, 'Mes voisins les Yamada suit la vie quotidienne d''une famille japonaise, les Yamada, à travers des scènes humoristiques et touchantes sur leurs interactions et défis.', 'https://www.youtube.com/watch?v=baQPMk5pskU&ab_channel=RaoulGauguin' ),
  (14, 'Le voyage de Chihiro', 2001, 'Une fillette se retrouve dans un monde spirituel et doit sauver ses parents transformés en porcs en travaillant dans une auberge de dieux.', 'https://www.youtube.com/watch?v=5n56a9qZLf8&ab_channel=Cin%C3%A9Clip-TrailerFR'),
  (15, 'Le Royaume des Chats', 2002, 'Le Royaume des chats suit Haru, une adolescente qui sauve un chat et se retrouve dans un royaume félin, où elle doit trouver un moyen de retourner chez elle.', 'https://www.youtube.com/watch?v=_1Cczcd9OOU&ab_channel=Nova_96'),
  (16, 'Le Château Ambulant', 2004, 'Sophie, transformée en vieille femme, cherche à briser la malédiction avec l''aide d''un magicien et de son château itinérant.', 'https://www.youtube.com/watch?v=O1hVwZiV_SQ&ab_channel=Cin%C3%A9Clip-TrailerFR'),
  (17, 'Les Contes de Terremer', 2006, 'Les Contes de Terremer suit Ged, un jeune sorcier, qui doit faire face à un déséquilibre entre le monde des vivants et celui des morts, tout en découvrant son pouvoir et sa véritable identité.', 'https://www.youtube.com/watch?v=I1uYCx7CuaU&ab_channel=BlogStudioGhibli'),
  (18, 'Ponyo sur la falaise', 2008, 'Une petite fille poisson se transforme en humaine et cherche à vivre parmi les humains, mettant en péril l''équilibre des océans.', 'https://www.youtube.com/watch?v=LJ51myGGFpU&ab_channel=Cin%C3%A9Clip-TrailerFR'),
  (19, 'Arriety, le petit monde des chapardeurs', 2010, 'Arrietty suit Arrietty, une jeune fille miniature qui se lie d''amitié avec un garçon humain, explorant leurs mondes tout en affrontant des défis liés à leur amitié.','https://www.youtube.com/watch?v=9zc78MUbuSI&ab_channel=trailerhdtv'),
  (20, 'La Colline aux Coquelicots', 2011, 'La Colline aux coquelicots suit Umi, une jeune fille qui tente de sauver un ancien bâtiment scolaire tout en développant une amitié avec Shun, un garçon qui partage son amour pour leur ville.', 'https://www.youtube.com/watch?v=_Qqw6o2nql0&ab_channel=Cin%C3%A9Coulisses.fr'),
  (21, 'Le vent se lève', 2013, 'Le Vent se lève suit Jiro, un jeune homme passionné d''aviation qui rêve de concevoir des avions tout en affrontant des défis personnels et historiques.', 'https://www.youtube.com/watch?v=Rr42rA8t9s8&ab_channel=CANAL%2B'),
  (22, 'Le Conte de la princesse Kaguya', 2013, 'Le Conte de la princesse Kaguya suit une princesse trouvée dans du bambou qui, en grandissant, attire des prétendants tout en cherchant sa véritable origine.', 'https://www.youtube.com/watch?v=f0p98qIdulo&ab_channel=Path%C3%A9France'),
  (23, 'Souvenirs de Marnie', 2014, 'Une jeune fille en vacances découvre une mystérieuse amie qui l''aide à comprendre ses propres émotions et sa famille.', 'https://www.youtube.com/watch?v=PG4ktGoV12w&ab_channel=Path%C3%A9France'),
  (24, 'Aya et la sorcière', 2020, 'Aya et la sorcière suit Aya, une jeune fille élevée par une sorcière, qui cherche à découvrir son propre pouvoir dans un monde magique.', 'https://www.youtube.com/watch?v=js3kUNUqsxI&ab_channel=WildBunchDistribution'),
  (25, 'Le Garçon et le Héron', 2023, 'Le Garçon et le Héron de Hayao Miyazaki suit Mahito, un jeune garçon qui, après avoir perdu sa mère dans un incendie pendant la Seconde Guerre mondiale, déménage à la campagne avec son père', 'https://www.youtube.com/watch?v=Q2aTi0BQXek&ab_channel=WildBunchDistribution')
;

-- Reset the ID sequence because we manually inserted the ID in the command before, so the sequence needs an update.
SELECT setval('movie_id_seq', (SELECT MAX(id) from "movie"));

INSERT INTO "director"
  ("name")
VALUES
  ('Hayao Miyazaki'),
  ('Isao Takahata'),
  ('Tomomi Mochizuki'),
  ('Yoshifumi Kondo'),
  ('Goro Miyazaki'),
  ('Hiromasa Yonebayashi'),
  ('Hiroyuki Morita')
;

INSERT INTO "list"
  ("name")
VALUES
  ('A regarder'),
  ('Déjà vu'),
  ('Favoris')
;

INSERT INTO "movie_type" 
  ("movie_id", "type_id")
VALUES
  (1, 2),
  (2, 1),
  (2, 2),
  (3, 3),
  (4, 2),
  (5, 4),
  (5, 5),
  (6, 2),
  (6, 6),
  (7, 4),
  (8, 2),
  (9, 7),
  (10, 6),
  (11, 2),
  (11, 7),
  (12, 2),
  (12, 4),
  (12, 1),
  (13, 8),
  (14, 4),
  (14, 1),
  (14, 2),
  (15, 1),
  (16, 1),
  (16, 2),
  (16, 4),
  (17, 2),
  (17, 6),
  (18, 2),
  (19, 2),
  (19, 4),
  (19, 6),
  (20, 4),
  (21, 9),
  (22, 4),
  (22, 6),
  (23, 4),
  (24, 2),
  (25, 6),
  (25, 10)

;

INSERT INTO "movie_director" 
  ("movie_id", "director_id")
VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 1),
  (5, 2),
  (6, 1),
  (7, 2),
  (8, 1),
  (9, 3),
  (10, 2),
  (11, 4),
  (12, 1),
  (13, 2),
  (14, 1),
  (15, 7),
  (16, 1),
  (17, 5),
  (18, 1),
  (19, 6),
  (20, 5),
  (21, 1),
  (22, 2),
  (23, 6),
  (24, 5),
  (25, 1)


;



  



COMMIT;
