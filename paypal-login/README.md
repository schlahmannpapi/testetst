# PayPal Login – Redesign

Ein sauberes, modernes Redesign der PayPal-Login-Seite in reinem HTML, CSS und JavaScript.

## Projektstruktur

```
paypal-login/
├── index.html          # Haupt-Login-Seite
├── css/
│   └── style.css       # Alle Styles (CSS-Variablen, Layout, Animationen)
├── js/
│   └── main.js         # Interaktionslogik (Schritt 1 → 2, Passwort-Toggle, Validierung)
└── README.md
```

## Features

- **Zweistufiger Login-Flow**: Erst E-Mail, dann Passwort (wie das Original).
- **Responsives Layout**: Sidebar versteckt sich auf mobilen Geräten (< 860 px).
- **Floating Labels**: Animierte Label bei Fokus / Eingabe.
- **Passwort anzeigen/verbergen**: Toggle-Button im Passwort-Feld.
- **Shake-Animation**: Leere Felder lösen eine Shake-Animation aus.
- **Google-Login-Button**: Als UI-Platzhalter vorhanden.
- **Avatar-Initial**: Zeigt den ersten Buchstaben der E-Mail im Schritt 2.

## Verwendung

Einfach `index.html` im Browser öffnen. Das Formular sendet per `POST` an `daten_sammeln.php` (Endpunkt aus dem Original).

## Design

| Eigenschaft | Wert |
|---|---|
| Typografie | Playfair Display (Headlines) + DM Sans (Body) |
| Primärfarbe | `#0070ba` (PayPal-Blau) |
| Sidebar | Verlauf `#003087 → #0070ba` |
| Hintergrund | Animierte Blobs + subtiles Gitter |
| Radius | 20 px (Karte), 12 px (Inputs/Buttons) |
