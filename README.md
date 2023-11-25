# NodeHomework

Projeyi indirdikten sonra zip dosyasýnýn içinden çýkan NodeHomework klasörünün içindeki --
NodeHomework klasörünün içinde sað týklayarak terminalde açma seçeneðine giriniz. --
Açýlan terminalde -> 'node app.js' komutunu girdiðimizde fonksiyon çalýþtýrmadýðýmýz --
için boþ deðer dönmemesi için "Invalid input." yazdýrdým. Fonksiyonlarý çalýþtýrabilmemiz --
için gereken sorgu komutlarý:

Task eklemek için:
node app.js add "task"

Taskleri listelemek için:
node app.js list

Complete status e sahip taskleri listelemek için:
node app.js list complete

Taskleri editlemek için:
node app.js edit {$ID}  // Örneðin; id'si 1 olan taski editlemek için 'node app.js edit 1'

Taskleri Complete statuse getirmek için:
node app.js complete {$ID} // Örneðin; id'si 1 olan taski complete yapmak için 'node app.js complete 1'

Taskleri kelime filtresi ile aratmak için:
node app.js search "task"