
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
  ("id", "name", "date", "resume", "image", "bande_annonce")
VALUES
  (1, 'Nausicaa et la vallée du vent', 1984, 'Nausicaä de la Vallée du Vent suit la princesse Nausicaä qui, dans un monde post-apocalyptique, tente de protéger la nature et de prévenir un conflit entre les humains et les créatures de la forêt toxique.', 'https://www.studioghibli.fr/wp-content/uploads/2019/03/nausicaa.jpeg', 'https://www.youtube.com/watch?v=tUdnqn3-Nto'),
  (2, 'Le Château dans le Ciel', 1986, 'Une jeune fille et un garçon cherchent un château flottant légendaire tout en échappant à des pirates et à une organisation militaire.','https://www.studioghibli.fr/wp-content/uploads/2019/03/chateau-dans-le-ciel.jpg', 'https://www.youtube.com/watch?v=7lx-WILYZPY'),
  (3, 'L''histoire des canaux de Yanagawa', 1987, 'L''Histoire des canaux de Yanagawa suit un jeune garçon qui explore les canaux historiques de Yanagawa, découvrant des légendes locales et la beauté de son patrimoine culturel.','https://media.senscritique.com/media/000021213457/0/l_histoire_du_canal_de_yanagawa.jpg', 'Pas de bande-annonce'),
  (4, 'Mon Voisin Totoro', 1988, 'Deux sœurs rencontrent des créatures magiques, dont le gentil Totoro, en s''installant à la campagne.','https://www.bazaar.coop/wp-content/uploads/2024/07/1200x680_076_mon_voisin_totoro_013.jpg', 'https://www.youtube.com/watch?v=OLSbD5fZ8tw'),
  (5, 'Le Tombeau des Lucioles', 1988, 'Deux enfants luttent pour survivre pendant la Seconde Guerre mondiale au Japon, illustrant la tragédie de la guerre.','https://www.arte.tv/sites/olivierpere/files/2012/09/le-tombeau-des-lucioles-19882.jpg', 'https://www.youtube.com/watch?v=ELGUE86HPSc'),
  (6, 'Kiki la petite Sorcière', 1989, 'Une jeune sorcière s''installe dans une nouvelle ville pour apprendre à vivre de ses compétences et découvrir son indépendance.','https://grainsdesel.com/wp-content/uploads/sites/20/2023/06/kiki-petite-sorciere.png', 'https://www.youtube.com/watch?v=N0qM33pJw48'),
  (7, 'Souvenirs goutte à goutte', 1991, 'Souvenirs goutte à goutte suit Nonoko, une jeune fille qui se remémore son enfance dans un village rural, célébrant les joies simples et la beauté de la nature.','https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/98794830', 'https://www.youtube.com/watch?v=OfkQlZArxw0'),
  (8, 'Porco Rosso', 1992, 'Un pilote de chasse transformé en cochon combat des pirates tout en explorant son passé et ses sentiments.','https://www.studiodesursulines.com/wp-content/uploads/2022/06/porco_rosso1-tt-width-1280-height-1067-crop-1-bgcolor-000000.jpg', 'https://www.youtube.com/watch?v=ZKWQiT1O0zg'),
  (9, 'Je peux entendre l''Océan', 1993, 'Je peux entendre l''océan suit Saku et Shizuku, deux adolescents qui se lient d''amitié pendant l''été, partageant leurs rêves et leurs sentiments naissants.','https://www.kanpai.fr/sites/default/files/styles/og/public/uploads/2012/09/je-peux-entendre-ocean.jpg', 'https://www.youtube.com/watch?v=WvL3zJfAJKg'),
  (10, 'Pompoko', 1994, 'Pompoko suit des tanukis qui utilisent des pouvoirs magiques pour protéger leur habitat menacé par l''expansion urbaine, mêlant humour et message écologique.','https://www.3continents.com/wp-content/uploads/thumbs/fullscreen/p/pompoko-750x500.jpg', 'https://www.youtube.com/watch?v=apnUpi26KQU&t=2s'),
  (11, 'Si tu tends l''oreille', 1995, 'Si tu tends l''oreille suit Shizuku, une jeune fille qui rêve d''écrire et découvre un chat mystérieux, ce qui l''amène à rencontrer Seiji, avec qui elle partage ses passions.','https://www.kanpai.fr/sites/default/files/styles/og/public/uploads/2012/10/si-tu-tends-oreille-ghibli.jpg', 'https://www.youtube.com/watch?v=0pVkiod6V0U'),
  (12, 'Princesse Mononoké', 1997, 'Princesse Mononoké suit Ashitaka, un prince qui cherche à rétablir l''équilibre entre des dieux animaux de la forêt et des humains exploitant les ressources naturelles.','https://www.studioghibli.fr/wp-content/uploads/2018/08/princesse-mononoke.jpg', 'https://www.youtube.com/watch?v=xgheDznGY-c&ab_channel=MemberMovies'),
  (13, 'Mes Voisins les Yamada', 1999, 'Mes voisins les Yamada suit la vie quotidienne d''une famille japonaise, les Yamada, à travers des scènes humoristiques et touchantes sur leurs interactions et défis.','https://www.kanpai.fr/sites/default/files/styles/og/public/uploads/2012/10/mes-voisins-yamada.jpg', 'https://www.youtube.com/watch?v=baQPMk5pskU&ab_channel=RaoulGauguin' ),
  (14, 'Le voyage de Chihiro', 2001, 'Une fillette se retrouve dans un monde spirituel et doit sauver ses parents transformés en porcs en travaillant dans une auberge de dieux.','https://www.studioghibli.fr/wp-content/uploads/2019/04/le-voyage-de-chihiro-photo-1053523.jpg', 'https://www.youtube.com/watch?v=5n56a9qZLf8&ab_channel=Cin%C3%A9Clip-TrailerFR'),
  (15, 'Le Royaume des Chats', 2002, 'Le Royaume des chats suit Haru, une adolescente qui sauve un chat et se retrouve dans un royaume félin, où elle doit trouver un moyen de retourner chez elle.','https://atalante-cinema.org/wp-content/uploads/2023/08/2901701.jpg-r_1920_1080-f_jpg-q_x-xxyxx-1300x701.jpg', 'https://www.youtube.com/watch?v=_1Cczcd9OOU&ab_channel=Nova_96'),
  (16, 'Le Château Ambulant', 2004, 'Sophie, transformée en vieille femme, cherche à briser la malédiction avec l''aide d''un magicien et de son château itinérant.','https://www.lemagducine.fr/wp-content/uploads/2020/03/chateau-ambulant-miyazaki-cycle-ghibli.jpg', 'https://www.youtube.com/watch?v=O1hVwZiV_SQ&ab_channel=Cin%C3%A9Clip-TrailerFR'),
  (17, 'Les Contes de Terremer', 2006, 'Les Contes de Terremer suit Ged, un jeune sorcier, qui doit faire face à un déséquilibre entre le monde des vivants et celui des morts, tout en découvrant son pouvoir et sa véritable identité.','https://www.kanpai.fr/sites/default/files/styles/og/public/uploads/2012/12/les-contes-de-terremer.jpg', 'https://www.youtube.com/watch?v=I1uYCx7CuaU&ab_channel=BlogStudioGhibli'),
  (18, 'Ponyo sur la falaise', 2008, 'Une petite fille poisson se transforme en humaine et cherche à vivre parmi les humains, mettant en péril l''équilibre des océans.','https://addict-culture.com/wp-content/uploads/2021/04/Bandeau-Ponyo.jpg', 'https://www.youtube.com/watch?v=LJ51myGGFpU&ab_channel=Cin%C3%A9Clip-TrailerFR'),
  (19, 'Arriety, le petit monde des chapardeurs', 2010, 'Arrietty suit Arrietty, une jeune fille miniature qui se lie d''amitié avec un garçon humain, explorant leurs mondes tout en affrontant des défis liés à leur amitié.','https://movies.monnaie-services.com/FR/backdrop/0/1920/AD0R9.jpg','https://www.youtube.com/watch?v=9zc78MUbuSI&ab_channel=trailerhdtv'),
  (20, 'La Colline aux Coquelicots', 2011, 'La Colline aux coquelicots suit Umi, une jeune fille qui tente de sauver un ancien bâtiment scolaire tout en développant une amitié avec Shun, un garçon qui partage son amour pour leur ville.','https://www.studiodesursulines.com/wp-content/uploads/2021/07/La-colline-aux-coquelicots.jpg', 'https://www.youtube.com/watch?v=_Qqw6o2nql0&ab_channel=Cin%C3%A9Coulisses.fr'),
  (21, 'Le vent se lève', 2013, 'Le Vent se lève suit Jiro, un jeune homme passionné d''aviation qui rêve de concevoir des avions tout en affrontant des défis personnels et historiques.','https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/03/07/04/Le-Vent-se-leve-sur-la-polemique.jpg?VersionId=W46rGYtSGNZGYXDQ57WDPEhyCWXDzciM', 'https://www.youtube.com/watch?v=Rr42rA8t9s8&ab_channel=CANAL%2B'),
  (22, 'Le Conte de la princesse Kaguya', 2013, 'Le Conte de la princesse Kaguya suit une princesse trouvée dans du bambou qui, en grandissant, attire des prétendants tout en cherchant sa véritable origine.','https://www.premiere.fr/sites/default/files/styles/scale_crop_border_1280x720/public/2020-03/Kaguya.jpg', 'https://www.youtube.com/watch?v=f0p98qIdulo&ab_channel=Path%C3%A9France'),
  (23, 'Souvenirs de Marnie', 2014, 'Une jeune fille en vacances découvre une mystérieuse amie qui l''aide à comprendre ses propres émotions et sa famille.','https://www.3continents.com/wp-content/uploads/thumbs/fullscreen/s/souvenirs-de-marnie-5-jpeg-1600x900.jpg', 'https://www.youtube.com/watch?v=PG4ktGoV12w&ab_channel=Path%C3%A9France'),
  (24, 'Aya et la sorcière', 2020, 'Aya et la sorcière suit Aya, une jeune fille élevée par une sorcière, qui cherche à découvrir son propre pouvoir dans un monde magique.','https://www.journaldugeek.com/app/uploads/2021/07/template-jdg32.jpg', 'https://www.youtube.com/watch?v=js3kUNUqsxI&ab_channel=WildBunchDistribution'),
  (25, 'Le Garçon et le Héron', 2023, 'Le Garçon et le Héron de Hayao Miyazaki suit Mahito, un jeune garçon qui, après avoir perdu sa mère dans un incendie pendant la Seconde Guerre mondiale, déménage à la campagne avec son père','https://www.ecranlarge.com/content/uploads/2023/10/le-garcon-et-le-heron-critique-du-chef-doeuvre-de-miyazaki-1494677.png', 'https://www.youtube.com/watch?v=Q2aTi0BQXek&ab_channel=WildBunchDistribution')
;

-- Reset the ID sequence because we manually inserted the ID in the command before, so the sequence needs an update.
SELECT setval('movie_id_seq', (SELECT MAX(id) from "movie"));

INSERT INTO "director"
  ("name", "image")
VALUES
  ('Hayao Miyazaki', 'https://static.euronews.com/articles/stories/08/30/05/18/1200x675_cmsv2_79166748-9efd-5333-8740-797bc205849e-8300518.jpg'),
  ('Isao Takahata', 'https://i0.wp.com/seriesdefilms.com/wp-content/uploads/2018/04/isao_takahata.jpg?fit=928%2C523&ssl=1'),
  ('Tomomi Mochizuki', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvxozw3rtFkPqqOBpFH-hV0jrKDzRh01QCw&s'),
  ('Yoshifumi Kondo', 'https://meijibunka.wordpress.com/wp-content/uploads/2018/06/yoshifumi-kondo.jpg?w=584'),
  ('Goro Miyazaki','https://d27csu38upkiqd.cloudfront.net/eyJidWNrZXQiOiJmZGMtc2l0ZXB1YmxpYy1tZWRpYS1wcm9kIiwia2V5IjoidXBsb2Fkc1wvMjAyNFwvMDVcLzAwMF8zNHRkNnB5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTM2MCwiaGVpZ2h0Ijo3NjUsImZpdCI6ImNvdmVyIn19fQ=='),
  ('Hiromasa Yonebayashi','https://www.kanpai.fr/sites/default/files/styles/og/public/hiromasa-yonebayashi.jpg'),
  ('Hiroyuki Morita','https://www.buta-connection.net/images/images_films/neko-no-ongaeshi-production-conference-de-presse-hiroyuki-morita.jpg')
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
