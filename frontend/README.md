# WineApp

Početni projekat za prve vežbe iz Angulara (Angular 22, standalone komponente, signali, Signal Forms).

## Pokretanje

```bash
npm install
npm start
```

Aplikacija radi na `http://localhost:4200/`.

## Šta gde stoji

```
src/
  styles.css               globalni stilovi: tokeni, osnovni elementi, raspored, dugmad i kartice
  app/
    app.config.ts          konfiguracija aplikacije (rutiranje)
    app.routes.ts          tabela ruta
    app.ts / .html / .css  korenska komponenta: zaglavlje i router-outlet
    home/                  početna stranica
    wine/
      wine.model.ts        interfejsi Wine i NewWine
      wine.service.ts      servis sa mokovanim podacima (signal sa nizom vina)
      wine-list/           stranica sa spiskom vina
      add-wine/            stranica sa formom za novo vino
```

Nova komponenta se pravi komandom `ng g c wine/naziv-komponente`.
