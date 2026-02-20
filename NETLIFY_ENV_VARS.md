# Netlify Environment Variables

Voor de correcte werking van de StayCool Airco website moeten de volgende environment variables ingesteld worden in Netlify:

## EmailJS Configuratie

Deze variabelen zijn nodig voor het versturen van contactformulieren via EmailJS:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_1rruujp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rkcpzhg
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sjJ8kK6U9wFjY0zX9
```

## Hoe toe te voegen in Netlify:

1. Log in op je Netlify account
2. Ga naar je site dashboard
3. Klik op "Site configuration" in het menu
4. Klik op "Environment variables" in de zijbalk
5. Klik op "Add a variable"
6. Voeg elke variabele toe met de exacte naam en waarde zoals hierboven vermeld
7. Klik op "Save"
8. Deploy de site opnieuw om de wijzigingen door te voeren

## Belangrijk:

- Alle variabelen beginnen met `NEXT_PUBLIC_` omdat ze client-side gebruikt worden
- Zorg ervoor dat je de exacte namen gebruikt (hoofdlettergevoelig)
- De waarden zijn al voorzien en hoeven niet aangepast te worden
- Na het toevoegen van de variabelen moet de site opnieuw gedeployed worden

## Test na deployment:

Na deployment kun je testen of EmailJS correct werkt door:
1. Een testbericht te versturen via het contactformulier
2. Te controleren of het bericht aankomt op info@staycoolairco.nl
3. In de browser console te kijken of er geen EmailJS errors zijn

## Support:

Bij problemen met EmailJS:
- Check de EmailJS dashboard op emailjs.com
- Controleer of de service en template IDs correct zijn
- Verifieer dat het email quota niet overschreden is