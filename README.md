# sharebook

Code de la formation en ligne Udemy "Développeur Web Fullstack avec Spring et React
https://www.udemy.com/course/developpeur-web-fullstack-avec-spring-et-react.
L'application finale est déployée sur Azure et testable ici https://sharebook.azurewebsites.net/index.html

## Structure

### Backend
Application Spring Boot basée sur Maven, qui suit le formalisme standard de fichiers.

### Frontend
Single Page Application (SPA) React basée sur *create-react-app*, stockée dans *src/main/js*

## Compilation et déploiement

### Compilation
Des plugins maven spécifiques permettent la transpilation et l'insertion de l'appli React dans le JAR Spring Boot final. Ainsi le lancement du serveur Spring Boot hébergera nos pages React.
Il suffit de lancer *java -jar <nom du jar>* pour lancer le serveur, et accéder à l'application via :
http://localhost:8080/index.html (ne pas oublier le index.html au vue des règles Spring Security).
Détails ici : https://effectivecoding.fr/2021-03-14-react-and-spring-boot/

### Déploiement
Des actions Github sont présentes afin de déployer automatiquement l'application dans Azure à chaque modification de *master*. Détails ici : https://effectivecoding.fr/2021-02-21-deploy-to-azure/2021-02-21-deploy-to-azure-app-services/
L'application est accessible ici https://sharebook.azurewebsites.net/index.html

## Développement du frontend en mode développeur
Lancer un *npm start* dans le répertoire */src/main/js* pour lancer un serveur Node qui écoute chaque modification faite, et recharger l'aplication React à chaud (ne pas oublier de lancer également le serveur Spring Boot sur le port par défaut 8080!).
