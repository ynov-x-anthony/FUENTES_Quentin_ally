# Audit d’accessibilité — Challenge 1

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c’est bloquant, et pour qui |
|---|---|---|---|
| 1 | Dans `App.tsx`, l’image n’a pas de texte alternatif : il manque l’attribut `alt`. | P — Perceptible | Une personne qui utilise un lecteur d’écran ne peut pas savoir ce que montre l’image. Si elle donne une information utile, il faut la décrire avec un texte alternatif. |
| 2 | Le titre « Derniers articles » est un `h3`, alors que le titre précédent est un `h1`. Il manque un niveau `h2`. | R — Robuste, selon le sujet | Les personnes qui parcourent la page avec les titres peuvent avoir du mal à comprendre son organisation. Il faudrait utiliser un `h2` pour cette section. |
| 3 | « Voir plus » est un `div` cliquable au lieu d’un bouton. | O — Opérable | À la souris, cela fonctionne, mais on ne peut pas atteindre ce contrôle avec la touche Tab. Une personne qui utilise seulement le clavier ne peut donc pas l’activer. Le lecteur d’écran ne l’annonce pas non plus comme un bouton. |
| 4 | Le bandeau de la newsletter (`.carousel`) n’a pas de bouton pour le mettre en pause ou le fermer. | O — Opérable, selon le sujet | Si le bandeau défilait ou changeait automatiquement, il pourrait gêner la lecture sans qu’on puisse l’arrêter. Cependant, dans le code fourni, il reste fixe : je n’ai donc pas constaté le problème de mouvement annoncé dans le sujet. |
| 5 | Les trois liens en bas de page ont le même texte : « cliquez ici ». | U — Compréhensible | Quand on écoute seulement la liste des liens avec un lecteur d’écran, on ne sait pas à quoi chacun correspond. Des textes comme « Découvrir le plan vélo » ou « Consulter le budget » seraient plus clairs. |
| 6 | Le statut des articles est montré uniquement par un rond rouge ou vert, avec les classes `dot-red` et `dot-green`. | P — Perceptible | Une personne qui distingue mal ces couleurs ne peut pas savoir si l’article est publié ou annulé. Cette information n’est pas non plus donnée au lecteur d’écran. Ajouter le texte « publié » ou « annulé » permettrait de la rendre accessible. |

> P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
