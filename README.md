# Librus oceny okresowe
Program ułatwiający wpisywanie ocen kształtujących do dziennika elektronicznego Librus Synergia.

# Pobranie i instalacja programu
Aby pobrać program, należy nacisnąć zielony przycisk z napisem "Clone or download", a następnie nacisnąć "Download ZIP".<br>
![](https://i.imgur.com/0GiJBMX.gif)

Po udanym pobraniu należy rozpakować folder ZIP.<br>
![](https://i.imgur.com/GZL9nFJ.gif)

# Praca z programem

## Rozpoczęcie wpisywania wyników

Aby rozpocząć wpisywanie wyników, należy otworzyć folder o nazwie "Librus-oceny-okresowe", następnie folder "Wpisz wyniki", a potem otworzyć plik o nazwie "page.html".<br>
![](https://i.imgur.com/oufxKse.gif)

Naszym oczom ukaże się strona, która powinna wyglądać tak:<br>
![](https://i.imgur.com/txPJdhL.png)

W to pole wpisz maksymalną ilość punktów do uzyskania.<br>
![](https://i.imgur.com/3kLVQdH.gif)

Wybierz jeden z dostępnych szablonów, a następnie naciśnij na niego lewym przyciskiem myszy. Kolor wybranego przycisku powinien zmienić się na zielony.<br>
![](https://i.imgur.com/gbtKMJd.gif)

W to pole wpisz ilość uczniów w klasie (uwzględnij także osoby bez wyników).<br>
![](https://i.imgur.com/jfsVpEz.gif)

Wybierz jeden z kierunków ułożenia numerów uczniów:<br>
→ opcja wygodniejsza dla osób wpisujących przy użyciu klawiatury i klawisza tab.<br>
↓ opcja wygodniejsza dla osób wpisujących przy użyciu klawiatury i myszki.<br>
Ułożenie numerów przy użyciu danego kierunku obrazuje poniższa tabela:

<table>
    <tbody>
        <tr>
            <th colspan=2>→</th>
            <th colspan=2>↓</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>4</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
            <td>2</td>
            <td>5</td>
        </tr>
        <tr>
            <td>5</td>
            <td>6</td>
            <td>3</td>
            <td>6</td>
        </tr>
    </tbody>
</table>

Po wpisaniu wszystkich powyższych danych należy nacisnąć przycisk z napisem "Wprowadź".<br>
![](https://i.imgur.com/0a0CMKj.gif)

## Wpisywanie wyników

Po naciśnięciu przycisku "Wprowadź" naszym oczom powinna pokazać się tabela zawierająca trzy elementy:
1. Numer ucznia
1. Pole do wpisania punktów
1. Wynik ucznia

![](https://i.imgur.com/f6ujRWN.png)

Pole do wpisania punktów obsługuje cztery podstawowe działania: dodawanie, odejmowanie, mnożenie i dzielenie. Kalkulacje są wykonywane zgodnie z kolejnością działań.<br>
![](https://i.imgur.com/wTBqZjJ.png)

Jeśli po wpisaniu punktów wyskoczy nam wynik "NaN", oznacza to, że działanie nie mogło zostać poprawnie wykonane. Najczęściej jest to spowodowane zawierającymi się w formule przecinkami (należy je zastąpić kropkami) lub nieprawidłową ilością znaków działań.<br>
![](https://i.imgur.com/8pTkF6h.png)

Aby pominąć ucznia z danym numerem, należy zostawić puste pole do wpisywania punktów przy numerze ucznia. Potwierdzeniem pominięcia ucznia jest puste pole wyniku.<br>
![](https://i.imgur.com/A4bbXJ0.gif)

Aby zakończyć wpisywanie, należy nacisnąć przycisk z napisem "Wprowadź", który znajduje się na dole tabeli.<br>
![](https://i.imgur.com/M1T22rp.gif)

Między polami można przeskakiwać za pomocą przycisku tab na klawiaturze.

## Otrzymanie pliku z wynikami

Po naciśnięciu przycisku "Wprowadź" naszym oczom powinien ukazać się taki obraz:<br>
![](https://i.imgur.com/pAeoYAP.png)

Aby otrzymać wyniki, należy nacisnąć przycisk z napisem "Pobierz plik".<br>
![](https://i.imgur.com/1Ye4jmz.gif)

W folderze "Pobrane" na komputerze użytkownika powinien znajdować się plik o nazwie "wyniki.txt". Nie należy go edytować ani zmieniać jego nazwy.

## Wklejanie wyników do Librusa - możliwe tylko przy użyciu systemu Windows

Po otrzymaniu pliku z wynikami należy go wyciąć, wrócić do folderu "Librus-oceny-okresowe", wejść do folderu "Wklej wyniki" i wkleić plik z wynikami do folderu "wyniki". Następnie należy uruchomić program "paste scores.exe"<br>
![](https://i.imgur.com/fF513mT.gif)

Naszym oczom ukaże się czarno-biała konsola. Należy postępować zgodnie z poleceniami programu:
1. Nacisnąć dowolny przycisk w celu rozpoczęcia pracy z programem.<br>
![](https://i.imgur.com/BJUQHND.png)
1. Przenieść otrzymany wcześniej plik o nazwie "wyniki.txt" do folderu "wyniki", który znajduje się w tym samym folderze, w którym znajduje się plik "paste scores.exe", a następnie zmienić aktywne okno na konsolę i nacisnąć dowolny przycisk (Przy dokładnym śledzeniu instrucji należy pominąć ten krok).<br>
![](https://i.imgur.com/trxLEaz.png)
1. Zalogować się na konto Librus w przeglądarce internetowej i rozpocząć wpisywanie ocen kształtujących.
1. Wybrać pole tekstowe pierwszego ucznia.
1. Naciskać strzałkę w prawo co sekundę do momentu wklejenia wszystkich wyników.

Po wykonaniu wszystkich powyższych czynności konsola automatycznie się zamknie, a wszystkie wyniki powinny się poprawnie wkleić.
