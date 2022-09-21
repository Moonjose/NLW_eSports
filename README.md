# Funcionalidades do projeto (PT-BR)

## Versão Web

* Publicar um anúncio com informações para encontrar um duo.

## Versão Mobile

* Encontrar anúncios publicados e obter o discord do usuário.

* Download do .apk https://www.mediafire.com/file/mz3u0hqy2ufat6c/nlwEsports.apk/file

# Project features (EN)

## Web Version

* Post an ad with information to find a duo.

## Mobile Version

* .apk download https://www.mediafire.com/file/mz3u0hqy2ufat6c/nlwEsports.apk/file

* Find published ads and get user discord.

# API Endpoints

The following endpoints are available:

|Endpoints             | Usage                      | Params                                      |
|--------------------- | -------------------------- | ------------------------------------------- |
|`GET /games`          | Get all of the games       |                                             |
|`GET /games/:id/ads`  | Get all of ads by game id  | **id**: [Number]                            | 
|`GET /ads/:id/discord`| Get the discord by game id | **id**: [Number]                            |
|`POST /games/:id/ads` | Create and ad              | **id**: [Number]                            |
