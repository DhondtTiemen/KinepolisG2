# Kinepolis ATM3.0

| Optie            | Beschrijving                                                                                                                                                                                               | Default value | Voorbeeld                                                                              |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|----------------------------------------------------------------------------------------|
| timing           | Om te beslissen hoe lang een pagina moet blijven staan vooraleer de volgende pagina verschijnt. De minimum waarde is 5 seconden. Dit wordt uitgedrukt in seconden.                                         | 10            | https://atm3-groep2.netlify.app/?timing=15                                             |
| location         | Om de locatie van het Kinepolis complex te beslissen.                                                                                                                                                      | KBRG          | https://atm3-groep2.netlify.app/?location=KKOR                                         |
| minutesbeforenow | Hiermee kan je instellen hoelang je de film die op dat moment aan het spelen is moet blijven staan, zodat eventuele te laatkomers nog kunnen tickets bestellen via de ATM.Dit wordt uitgedrukt in minuten. | 30            | https://atm3-groep2.netlify.app/?location=KKOR&minutesbeforenow=30                     |
| minutesafternow  | Kijken tot hoe lang hij films moet weergeven vanaf het huidige tijdstip, 240 minuten is dus 4 uur. Dit wordt uitgedrukt in minuten.                                                                        | 240           | https://atm3-groep2.netlify.app/?location=KKOR&minutesbeforenow=30&minutesafternow=240 |
| lightmode        | Deze kan gebruikt worden als de gebruiker liever de light-mode van de website zou gebruiken. De light-mode wordt enkel toegepast als volgende query in de url wordt meegegeven: ‘lightmode=true’           |               | https://atm3-groep2.netlify.app/?lightmode=true                                        |
