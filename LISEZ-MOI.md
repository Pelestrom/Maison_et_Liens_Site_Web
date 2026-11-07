# Maison & Liens — Site vitrine

Site autonome en français, assorti à la carte de visite : noir mat, champagne doux, blanc cassé et logo maison indépendant du nom.

## Ouvrir le site

1. Décompressez entièrement le ZIP.
2. Ouvrez `index.html` dans votre navigateur.
3. Conservez `index.html`, `styles.css`, `app.js` et le dossier `assets` ensemble.

Aucune installation, compilation ou commande npm n'est nécessaire. Les polices, le logo et la photo sont inclus. Les liens d'appel et WhatsApp nécessitent une application compatible et, pour WhatsApp, une connexion Internet.

## Mettre en ligne

Transférez le contenu du dossier sur un hébergeur de sites statiques. Le fichier `index.html` doit être à la racine du dossier publié. Aucun serveur applicatif, aucune base de données et aucune clé API ne sont nécessaires.

Si l'hébergeur demande une commande de compilation : laissez-la vide. Si un dossier de publication est demandé : choisissez celui contenant `index.html`.

Après publication, vérifiez le site à son adresse HTTPS sur un téléphone. Cette adresse définitive pourra être utilisée pour créer le QR code de la carte de visite. Aucun QR code provisoire n'est inclus.

## Fonctions incluses

- Affichage pensé d’abord pour le mobile, puis adapté aux tablettes et ordinateurs.
- Menu mobile, ancres de navigation, animations discrètes respectant le réglage de réduction des mouvements.
- Services : nounous, femmes de ménage, employées de maison.
- Parcours familles et candidates avec libellés adaptés.
- Formulaire préparant un message WhatsApp et vérifiant les champs nécessaires.
- Choix « Autre ville au Maroc » avec champ de précision.
- Appel direct : +212 781 863 430.
- WhatsApp : https://wa.me/212781863430.
- Questions fréquentes et fenêtre d'information sur les données.

## Le formulaire

Le bouton « Continuer sur WhatsApp » prépare un message pour Maison & Liens. Il ne l'envoie pas automatiquement. Le visiteur le relit dans WhatsApp, puis choisit de l'envoyer. Un lien de secours apparaît si le navigateur bloque l'ouverture d'une nouvelle fenêtre.

Ce site n'enregistre pas les formulaires dans une base de données et ne gère pas les candidatures dans un tableau de bord. Aucun envoi d'e-mail ni outil de suivi publicitaire n'est intégré. Sans JavaScript, les liens directs WhatsApp et téléphone restent disponibles.

## Personnaliser

- Textes, villes, FAQ, liens d'appel : `index.html`.
- Numéro utilisé pour les messages préparés : constante `phone` au début de `app.js`. Le format WhatsApp contient uniquement les chiffres, sans « + » ni espace. Pensez aussi aux liens directs dans `index.html`.
- Couleurs : variables au début de `styles.css`.
- Logo sans nom, en SVG modifiable : `assets/logo.svg`.
- Icône de navigateur : `assets/favicon.svg`.
- Photo illustrative : `assets/interieur-maroc.webp`.
- Polices : `assets/fonts/`.

La photo de l'intérieur a été générée pour l'ambiance du site ; elle ne représente pas un domicile client réel. Aucun témoignage, chiffre de clientèle, délai garanti ou certification n'a été inventé.

Le nom commercial est un élément textuel séparé du symbole maison. Le nom personnel de la responsable ne figure pas sur le site. Les coordonnées, les villes et les métiers proviennent des informations fournies pour le projet.

## Avant la diffusion

Relisez les textes et les modalités avec la responsable. Complétez si nécessaire les informations professionnelles ou légales propres à son activité, ainsi que les coordonnées de l'hébergeur. Les tarifs, les disponibilités et les éventuels frais sont à préciser directement avec la responsable.

## Fichiers et licences

Le code du site peut être modifié pour ce projet. Cormorant Garamond et Jost sont distribuées sous licence SIL Open Font License ; les licences sont incluses dans `assets/fonts/`. Aucun service externe de polices n'est appelé par le site.

Le site et les sources sont les mêmes fichiers : il n'y a pas de version compilée distincte à reconstruire.

Le nom « Maison & Liens » est une proposition créative pour ce projet, sans vérification de disponibilité juridique ou de nom de domaine.
