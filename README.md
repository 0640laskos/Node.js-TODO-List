# NodeHomework

Projeyi indirdikten sonra zip dosyas�n�n i�inden ��kan NodeHomework klas�r�n�n i�indeki --
NodeHomework klas�r�n�n i�inde sa� t�klayarak terminalde a�ma se�ene�ine giriniz. --
A��lan terminalde -> 'node app.js' komutunu girdi�imizde fonksiyon �al��t�rmad���m�z --
i�in bo� de�er d�nmemesi i�in "Invalid input." yazd�rd�m. Fonksiyonlar� �al��t�rabilmemiz --
i�in gereken sorgu komutlar�:

Task eklemek i�in:
node app.js add "task"

Taskleri listelemek i�in:
node app.js list

Complete status e sahip taskleri listelemek i�in:
node app.js list complete

Taskleri editlemek i�in:
node app.js edit {$ID}  // �rne�in; id'si 1 olan taski editlemek i�in 'node app.js edit 1'

Taskleri Complete statuse getirmek i�in:
node app.js complete {$ID} // �rne�in; id'si 1 olan taski complete yapmak i�in 'node app.js complete 1'

Taskleri kelime filtresi ile aratmak i�in:
node app.js search "task"