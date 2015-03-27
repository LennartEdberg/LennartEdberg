/*
*
* Denna uppgift går ut på att skapa spelet "lights out"
* Spelet fungerar så att du har ett rutnät med tända(vita) rutor
* När du klickar på en av rutorna skall denna släckas (bli svart)
* Även den angränsande rutan ovanför, nedanför, till höger och till vänster
* ska släckas
*
* Visualisering:
* 1 1 1 1 1 
* 1 1 1 1 1 
* 1 1 1 1 1 
* 1 1 1 1 1
* 1 1 1 1 1
*
* Ett klick på 1an i mitten av illustrationen ovan ska ge effekten
* 1 1 1 1 1 
* 1 1 / 1 1 
* 1 / / / 1 
* 1 1 / 1 1
* 1 1 1 1 1
*
* Skulle vi klicka på 1an längst ner till höger ska vi få följande effekt
* 
* 1 1 1 1 1 
* 1 1 1 1 1 
* 1 1 1 1 1 
* 1 1 1 1 /
* 1 1 1 / /
*
*
* Följ uppgiften bygger på tekniker från uppgift 7-12 från repetitionen.
* Läs instruktionerna nedanför NOGA innan du börjar så du att du får 
* en strukturerad start på ditt arbete.
* 
* 1. Spara ner tabellen till en variabel
*
* 2. Bygg vidare på funktionen som heter makeRowsAndColumns
*    Skapa ett rutnät 5*5 med rader och kolumner
*    Kolla på uppgifterna från tisdagen
*
* 3. I funktionen
*    Bind en eventlistener till varje ruta som lyssnar på klick och
*    kör funktionen markColumn (som ni gör senare)
*
* 4. I funktionen
*    Applicera ett ID på varje ruta(td) samtidigt som den skapas.
*    ID ska bestå av yttre och inre loopen iteration. Detta gör
*    att de möjliga kombinationerna blir 00,01,02,03,04,10,11,12 osv
*    upp till 44. Den första siffran representerar raden och kommer från
*    den yttre loopen, den andra siffran representerar kolumnen och kommer
*    från den inre loopen.
*
*    Det viktiga att tänka på är att de variabler ni använder för att räkna
*    med i den inre och yttre loopen är siffror. För att inte plussa ihop dem
*    till en sammanlagd summa måste vi låtsas som att de är ett ord.
*    Detta gör vi genom att sätta ID till i + "" + j. Våra citattecken
*    gör att vi sätter ihop 1 + "" + 2 till 12 och inte 3.
*
* 5. Bygg vidare  markColumn
*    Eftersom markColumn aktiveras när man klickar på en td
*    så har du tillgång till kolumnen via variabeln this.
*    Börja därför med att logga ut this för att se vilket element
*    som markeras i konsolen.
*
* 6. Gör så att vår ruta får klassen "active" om vi klickar på den
*    med hjälp av setAttribute. Om klassen redan är "active", sätt
*    klassen "unactive". Läs ounkt 7 för hur man kan hämta ett
*    attribut från ett element
*
*
* 7. På samma sätt som vi kan sätta ett attribute med setAttribute
*    kan vi hämta ett attribute med getAttribute. getAttribut
*    tar emot ett argument och det är namnet på det attribut vi 
*    vill hämta, så om vi vill hämta id skriver vi "id". Det attributet ni
*    vill börja med att hämta är rutans id. På id kan vi läsa ut
*    vilken rad och vilken kolumn den är på genom dess två siffror.
*    Detta beskrivs i punkt 4.
*
* 8. Det är med dessa två siffror och lite superenkel matte som vi kan
*    komma åt det första elementet ovanför, nedanför, till höger och
*    till vänster.
*    
*    Om vi skulle hämta utt endast en ruta manuellt skulle vi skriva t.ex.
*    document.getElementById("22") vilket skulle ge oss elementet i mitten
*    på ett 5x5 stort rutnät. Elementet som vi vill ha tag i är då de element
*    med följande IDn om vårt element har id 22:
* 
*    ovanför:   12 <- en rad upp men samma kolumn
*    nedanför:  32 <- en rad ner men samma kolumn
*    höger:     23 <- samma rad men en kolumn till höger
*    vänster:   21 <- samma rad men en kolumn till vänster
*
*    Börja med att försöka hämta endast ett av dessa element, förslagsvis
*    det till vänster om det vi klickar på, och spara det till en
*    variabel med namn left. Använd console.log för att se så att
*    du får ut rätt element.
*
* 9. När du väl har fått ut vänstra elementet om det element du klickat på
*    sätt dess klass till active. Detta kommer att göra att både det
*    Element du klickade på + dess vänstra grannse byter till färgen svart.
*
* 10. Gör nu detta för upp, ner och höger. Ta en i taget.
*     Testa att klicka i mitten av ditt rutnär. Har du gjort rätt ska
*     Det bildas ett svart kors.
*
*
* 11. Ni kommer att stöta på fel i ert program om ni klickar på rutorna nära
*     kanterna. Detta måste ni lösa genom if-satser som säger att ett 
*     en ruta över ert valda element inte ska hämtas om id ni försöker ta
*     är lägre än 0. Vi kan inte ha något som är lägre än 0 då 0 är raden
*     högst upp. Detsamma gäller för
*     Upp: rad - 1 måste vara över -1;
*     Ner: rad + 1 måste vara under 5;
*     Vänster: kolumn - 1 måste vara över -1
*     Höger: kolumn + 1 måste vara under 5.
*
*
* 12. Gör en rättningsfunktion som heter isWinner
*     Hämta ALLA td-element och spara ner i ett element,
*     vilket blir en array.
*     Loopa genom arrayen
*     Om du stöter på klassen "unactive"
*     Returnera falskt
*
*     Om loopen avslutas utan att returnera falskt, returna sant
*
*     Detta är rättningslösningen jag tänkt mig men jag har efter ca
*     2 timmars testande inte lyckats klara spelet en enda gång, så
*     jag vet inte vad som händer om man vinner, och inte heller om
*     man faktiskt kan vinna :D
*
*
*
*
*/
//Referera till de ovanstående stegen
//Steg 1
//Hämta ut table-elementet


//Steg 2, 3 och 4
//Skapa rutnät, bind eventlistener, sätt attributet klass
//Kolla på uppgiften från igår
//Titta i er HTML i Chrome för att se om alla rutor får ett ID

var tableE = document.getElementById("myTable");

function makeRowsAndColumns(){
        for(var y = 0; y < 5; y++)
        {
        var trE = document.createElement("tr");
        tableE.appendChild(trE);
            
        for(var i = 0; i < 5; i++)
        {
            var tdE = document.createElement("td");
            tdE.setAttribute("id", y + "" + i);
            tdE.addEventListener("click", tdClick);
            trE.appendChild(tdE);
        }
            
        }
            }



function tdClick()
{
      var rowAndColumn = this.getAttribute('id');
  
  var tr = Number(rowAndColumn.charAt(0));
  var td = Number(rowAndColumn.charAt(1));
  var left = (tr) + "" + (td-1);
  var right = (tr) + "" + (td+1);
  var up = (tr+1) + "" + (td);
  var down = (tr-1) + "" + (td);
    var leftPos = document.getElementById(left);
    var rightPos = document.getElementById(right);
    var upPos = document.getElementById(up);
    var downPos = document.getElementById(down);
        

  if(this.getAttribute("class") == "active")
  {
      this.setAttribute("class", "unactive");
  }
        else
        {
            this.setAttribute("class", "active");
        }
       
    if(leftPos !== null)
    {
    /* VÄNSTERBLOCK */
    if(leftPos.getAttribute("class") == "active")
    {
        leftPos.setAttribute("class", "unactive");
    }
    else{
        leftPos.setAttribute("class", "active");
    }
    }
    
        if(rightPos !== null)
    {
        /* HÖGERBLOCK */
    if(rightPos.getAttribute("class") == "active")
    {
        rightPos.setAttribute("class", "unactive");
    }
    else{
        rightPos.setAttribute("class", "active");
    }
    }

    
  
            if(upPos !== null)
    {
            /* ÖVERBLOCK */
    if(upPos.getAttribute("class") == "active")
    {
        upPos.setAttribute("class", "unactive");
    }
    else{
        upPos.setAttribute("class", "active");
    }
    }


    if(downPos !== null)
    {
            /* UNDERBLOCK */
    if(downPos.getAttribute("class") == "active")
    {
        downPos.setAttribute("class", "unactive");
    }
    else{
        downPos.setAttribute("class", "active");
    }
    }
    
    isWinner();

}
  

/* Steg 12
* Fyll i rättningsunktionen nedan
*
*/
function isWinner () {
    var tds = document.getElementsByTagName("td");
    for(var i = 0; i < tds.length; i++)
    {
        if(tds[i].getAttribute("class") != "active")
        {   
           return false;
        }
        
    }
   
    alert("Du vann");
    
}
  

//Kalla på makeRowsAndColumns.
makeRowsAndColumns();




