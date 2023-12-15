# The Dashboard - Avancerad frontendutveckling och Typescript

## Sida skapad av:

Johan Söderlund

### Länk till webbsidan:

[GitHub Pages](https://jhn322.github.io/dashboard-frontend/)

[Netlify](https://jhn-dashboard.netlify.app/)

## Information:

En Dashboard med modernt utseende och diverse ineraktiva element som kan tryckas på samt visa information dynamiskt. Majoriteten av elementen kan ändras samt spara information som användaren lagt till.

## Reflektion:

### CSS & HTML

I det stora hela är jag nöjd med utseendet av min Dashboard, jag försökte för det mesta efterlikna exemplet men ändå ändra lite grann som gör den unik. Genom hela CSS:en fokuserade jag på att ge den en enhetlig design för varje element. Hålla mig till 1 font stil, 1 färg för varje typ av element som rubrikfont, knapp eller genererade element. Har även försökt minimera återupprepning av kod där det är möjligt genom att kombinera element med samma styling. I HTML:en har jag lagt mycket vikt på att hålla det simpelt med ett tydligt klassnamn. Tycker jag har lyckats någorlunda bra med detta. Det jag tycker som jag kan definitivt förbättra mig på är mer utförliga kommentarer i de fall ändringar har gjorts som kan vara svårt för en annan att förstå. Jag menar, ibland gör man en ändring på grund av att en tidigare ändring man gjorde påverkade en annan osv. Det är logiskt för en själv i stunden men inte nått någon annan vet genom att kolla på koden. Med detta tycker jag även att jag måste bli bättre på att kommentera direkt, ofta glömmer jag kommentera och när jag går tillbaka kommer jag inte helt ihåg vad en ändring gjorde och på så sätt skrivs inte en bra kommentar, även tid slösas på att testa om. Definitivt en svaghet jag måste nämna är specifikt med elementen i quick-links rutan, suttit väldigt med att försöka lista ut hur jag skulle få favicon, länknamn och ta bort knappen som genereras in snyggt stylat på en rad i samma höjd med jämna mellanrum från varandra med titel i mitten. Jag provade flera lösningar men inget riktigt funkade och nöjde mig med ett acceptabelt men inte helt tillfredställande resultat. Dock resulterade min lösning konstiga problem med rubriken och delete knappen specifikt i WebKit baserade webbläsare av nån anledning. Det blev även svårt men kul att hantera element från JavaScript i CSS, det är nånting jag inte gjort förut vilket skapade en hel del utmaningar som i slutändan löste sig för det mesta. Tillsist är jag nöjd med mitt först försök på en mobile first webbsida, hade flera stunder då jag redigerade i fullskärm men glömde att kolla i mobilvy vilket inte blev så mobilvänligt varje gång, nåt jag får vänja mig om.

### JavaScript

**Time Date (1)**

Denna var nog den enklaste av alla script att skriva. Tycker att jag hanterade det bra med en funktion som kallade på både tid och datum med separat variabel, ett par metoder för att hämta timme, minut, sekund osv. Skrev en Array som sedan kallades på beroende på månaden vi är i nu. Jag är inte helt bekväm med "new", "String", "PadStart" ännu, det är nåt jag kan lära mig mer utav i framtiden. Egentligen ser jag inte någon tydlig svaghet med klockan, den funkar som den ska.

**Dashboard Headline (2)**

En brist som jag direkt tänker på med denna vore att det inte finns någon begränsning på hur lång rubriken får vara. Och även att det inte finns en tydlig kod skriven för att indikera utöver CSS hover på att rubriken är redigerbar. Däremot är jag väldigt nöjd med att jag lyckades integrera ett input field istället för att använda en simpel prompt. På så sätt kunde jag styla rutan för att passa in med sidan. Även nöjd med att tillägget av en event key för att bekräfta ny rubrik, det är nåt jag direkt upptäckte saknades.

**Quick Links (3)**

Den mest tydliga styrkan med denna kod är hur genomgående den är. Klasser som används syns tydligt i start av koden, LocalStorage har sin egen sektion som sedan sparas i saveLinks längre ner, tvärtom för removeLinks. Med tydliga variabelnamn ser man direkt att nästa sektion handlar om en knapp/ikon för att ta bort länkar på ett klick. Jag tycker även det var bra gjort att utföra med .length < 4 att inte mer än 4 länkar är tillåtna. Men nog den största styrkan med denna kod som många tar för givet idag är att man inte behöver skriva in hela webbadressen för att länken ska bli giltig. Genom att skriva en kod som antar att om användaren glömt skriva http:// så ska det läggas till i bakgrunden.

En tydlig brist är att användaren kan skriva in vad som helst i länkfältet, mest troligt kan de stava fel utan att märka och då sitter man där och undrar varför inte länken fungerar. Här skulle man kunna skriva nån typ av kod som testar & validerar adressen mot webben. Ännu en brist är att det finns ingen feedback vid tillägg eller borttag av länkar, lätt att ta bort länk av misstag. För att förbättra hade jag nog skrivit en kod som tillåter mer än 4 länkar och lägga till en scroll så man kan kolla igenom alla tillagda länkar. Det hade även varit snyggt att istället för att använda prompt använda en liknande lösning som med rubriken för att göra stylingen mer enhetlig, eller åtminstone haft en enda prompt för titel och URL. Är också inte helt säker på varför favicon är så lågupplösta, försökte forska lite på det men fick inte ett bra nog svar.

**Weather (4)**

Denna kod är den jag hade mest problem med. Använde mig först ut av Open Weather API men efter konstanta 401 error och "Invalid API key" efter 2 dagar i streck bestämde jag mig för att prova en annan vädertjänst. Gick igenom åtminstone 10 stycken innan jag hittade en som fungerade bra nog. Själva utförandet av koden är jag nöjd med, om inte imponerad att jag fick den att fungera över huvud taget. Största styrkan med koden är att den lyckas få in översiktlig nog information över 4 tidsperioder genom att fetcha 4 gånger med likadana parametrar förutom dagen. Är även för det mesta nöjd med hur bilder implementerades beroende på väderförhållande gentemot API description. Dock en brist är att jag har försökt men aldrig listat ut varför "Today" väderförhållandena alltid visar "undefined". Har loggat allt som går, byter bilder osv men har inte hittat någon anledning varför det inte funkar. Själva datan för "Today" visar all information som behövs i loggen. Kanske har mer med APIn än något annat att göra.

**Pokeapi (5)**

Styrkan med denna kod är dess simplicitet att implementeras med API:et, med denna kodmall borde man kunna återanvända till andra API:er utan stora problem. Med inga svårigheter implementeras en math.random för att slumpa mellan 1 av de nästan 900 Pokémons fram. Sedan finns det en mängd data som jag experimenterade med att lägga in och i slutändan landade på att less is more. Detta kan självklart vara en brist också, om användaren istället skulle vilja söka upp en specifik Pokémon hade man istället kunna koda en sökfunktion med sökord som namn, typ, vikt osv. Man skulle också kunna lägga till en länk för att ta sig till sidan för att läsa mer av den stora mängd information det finns om varje sort.

**Notes (6)**

Första och mest viktiga styrkan med detta anteckningsblock är localstorage. Den hade inte gjort så mycket nytta om varenda gång man ladda om sidan försvann allt man skrivit. En till styrka är hur lätt tillgänglig den är att snabbt kunna skriva ner vad som helst, jag har till exempel använt den för att skriva ner kriterier för denna uppgift som jag ska uppfylla härnäst. Delete knappen är även en styrka för att snabbt börja om. Den enda brist jag ser nu skulle vara att lägga till en Save knapp med feedback så man vet fullt att det man skrivit sparas. För nu måste användaren anta antingen eller, vilket inte är en bra upplevelse.

**Random Background (7)**

Med denna är jag mest nöjd med kod-uppbyggnaden. Varje del av kod är segmenterad i mindre sektioner vilket gör det lätt att läsa och förstå. Tycker även att jag har gett korta men bra kommentarer genom hela koden vilket gör det tydligt för andra att förstå vad som händer. Andra styrkor är att jag inte var säker om localstorage även skulle finnas här men kodade in ändå. Den kan vara så att man gillar en viss bild och då är det trevligt att den sparas till man trycker på knappen igen. En sak som kanske är mer en brist på Unsplash än något annat är att många bilder är högupplösta vilket inte ser så bra ut. En liten sak men som jag tycker är underskattad är kodsnutten för att snurra på ikonen för att indikera att knappen tryckts. Det må vara en simpel const som hämtar knapp, ikon, startar på klick och skapar sedan en klass som stylas med keyframes i CSS, men bra blir det. En brist jag jag kommer på nu när jag tänker på det är att ingenstans står det vart bilden kommer ifrån, vem eller vad bilden visar. Också en nackdel är att man inte kan välj en kategori man gillar, Unsplash har många bilder och det kan vara väldigt hit or miss vad som slumpas fram härnäst.

### Sista ord

I övrigt är jag nöjd med min prestation genom all kod, den är inte perfekt, mycket kan säkert konsolideras för att få en kortare enklare kod. Det är även flera metoder och funktioner som jag har använt utifrån extern hjälp och research som jag inte helt förstår mig på, men det är så det är med allt datorrelaterat och programmering speciellt. Vi måste vara proffs på att Googla (och ChatGPT).
