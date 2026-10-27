# Audit d’accessibilité — Challenge 5

## 1. Audits outillés

L’audit porte sur la page « Espace client », lancée en local. Les résultats ci-dessous reprennent les captures des audits initiaux et les résultats après correction vérifiés dans le navigateur.

### Avant correction

- **Lighthouse** : score d’accessibilité de **93/100**. L’outil signale un contraste insuffisant entre le texte et le fond, notamment pour le sous-titre.
- **axe DevTools** : **5 problèmes de contraste**, tous classés « Sérieux ». Analyse avec axe-core 4.13.0, le profil WCAG 2.1 AA et les bonnes pratiques désactivées.
- **WAVE** : **5 erreurs de contraste** et **1 alerte « No page regions »**, liée à l’absence de région sémantique dans la page.

Les cinq erreurs de contraste concernent quatre classes CSS : `.subtitle`, `.label`, `.hint` et `.btn-primary`. La classe `.label` apparaît deux fois, pour « Statut de l’abonnement » et « Astuce ».

### Après correction

- **Lighthouse** : score d’accessibilité de **100/100**, confirmé lors du nouveau test dans le navigateur.
- **WAVE** : **0 erreur et 0 alerte**, confirmé lors du nouveau test dans le navigateur.
- **axe DevTools** : aucun résultat après correction n’a été relevé dans ce compte rendu ; le résultat initial est conservé ci-dessus.

Ces résultats concernent les contrôles automatiques réalisés. Ils ne suffisent pas à prouver une conformité complète de la page aux WCAG.

## 2. Contrastes avant correction

Les ratios sont calculés à partir des couleurs CSS, avec la luminance relative sRGB, puis arrondis à deux décimales. Le seuil demandé pour les quatre styles de texte est de 4,5:1.

| Élément | Couleur texte | Couleur fond | Ratio calculé | Ratio AA requis | Conforme ? |
| --- | --- | --- | --- | --- | --- |
| `.subtitle` | `#aaaaaa` | `#ffffff` | 2,32:1 | 4,5:1 | Non |
| `.label` | `#999999` | `#ffffff` | 2,85:1 | 4,5:1 | Non |
| `.hint` | `#bbbbbb` | `#ffffff` | 1,92:1 | 4,5:1 | Non |
| `.btn-primary` | `#ffffff` | `#6fa8dc` | 2,53:1 | 4,5:1 (texte) | Non |

## 3. Corrections et nouveaux contrastes

J’ai foncé les textes gris et le fond bleu du bouton pour améliorer leur lisibilité, tout en gardant les couleurs principales de la page.

| Élément | Couleur texte | Couleur fond | Ratio calculé | Ratio AA requis | Conforme ? |
| --- | --- | --- | --- | --- | --- |
| `.subtitle` | `#5c5c5c` | `#ffffff` | 6,69:1 | 4,5:1 | Oui |
| `.label` | `#595959` | `#ffffff` | 7,00:1 | 4,5:1 | Oui |
| `.hint` | `#595959` | `#ffffff` | 7,00:1 | 4,5:1 | Oui |
| `.btn-primary` | `#ffffff` | `#1a5fa8` | 6,47:1 | 4,5:1 (texte) | Oui |

Le conteneur principal a aussi été remplacé par une balise `<main>`. Cela permet d’identifier le contenu principal de la page et traite l’alerte « No page regions » de WAVE.

## 4. Priorisation

1. **Le bouton `.btn-primary`** : il donne accès à la gestion de l’abonnement. Son texte doit être lisible pour que l’utilisateur puisse identifier l’action principale.
2. **Le conseil `.hint`** : il rappelle de vérifier les informations de facturation avant le renouvellement automatique. Cette information a un impact concret et son contraste initial est le plus faible.
3. **Les textes `.label`** : ils permettent de comprendre les informations des deux cartes, notamment le statut de l’abonnement.
4. **Le sous-titre `.subtitle`** : il présente le rôle de la page, mais il est moins urgent que l’action principale et les informations de facturation.

Toutes ces corrections restent nécessaires pour atteindre le seuil demandé. Cet ordre sert à organiser le travail, pas à laisser les derniers problèmes sans correction.
t) et explique pourquoi.
