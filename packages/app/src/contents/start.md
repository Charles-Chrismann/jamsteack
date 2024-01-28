# Démarrage

## Processer du markdown

Un plugin a été ajouté dans le dossier `/plugins` pour 
vous permettre d'utiliser du Markdown comme source de contenu
texte riche pour Strapi.

## Configuration de Supabase

1. Créer un compte sur [Supabase](https://supabase.com/)
2. Créer une organisation
3. Créer un nouveau projet pour votre organisation nommé `headless`
4. Bien retenir le `Database Password` car il vous sera utile pour les variables d'environnement de la base de données
5. Sélectionner la région `West EU (Ireland)`
6. Une fois créé, se rendre dans `Project Settings` puis `API`
7. Ouvrir le fichier `.env` présent dans le repository Strapi
8. Remplacer la valeur de `SUPABASE_API_URL` par l'URL fournie par `Project URL`
9. Remplacer la valeur de `SUPABASE_API_KEY` par la clé contenue dans `Project API keys`
10. Se rendre ensuite dans l'onglet `Database`
11. Remplacer la valeur de `DATABASE_HOST` par le Host contenu dans `Connection Parameters`
12. Remplacer la valeur de `DATABASE_USERNAME` par le User contenu dans `Connection Parameters`
13. Remplacer la valeur de `DATABASE_PASSWORD` par le mot de passe que vous avez défini plus tôt
14. Se rendre dans l'onglet `Storage`, créez un nouveau bucket nommé `strapi` et définissez le comme étant un `Public bucket`

⚠️ Définir votre bucket comme bucket publique expose à des risques de sécurité éventuels. Penser à bien désactiver cette fonctionnalité à la fin de notre séance ensemble. 

## Commandes de base :

Lancer Strapi et Nuxt:
```shell
pmpm dev
```

Lancer une commande spécifique de Nuxt:
```shell
pnpm app {command}
```

Lancer une commande spécifique de Strapi:
```shell
pnpm strapi {command}
```

Builder les deux applications:
```shell
pnpm build
```

## Documentations

| URL                                                                                                                      | Description                    |
|--------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| [UnoCSS](https://unocss.dev/)                                                                                            | Documentation de UnoCSS        |
| [NuxtStrapi](https://strapi.nuxtjs.org/)         <br/>                                                                   | Documentation du module Strapi |
| [NuxtImage](https://image.nuxt.com/)                                                                                     | Documentation du module Image  |


