#Первичная установка RIK
- получить root;
- установить JavaSE 1.7;
- установить jpos от bizerba, install_jspo.sh под root'ом;

#Создание папки с тестами после установки RIK
- создать папку в которой будут находиться тесты
- запустить /opt/bizerba/posprinter/linux_x86/copy_tests_to_me.sh под root'ом

#Запуск сервиса принтера
- сервис должен запускаться из папки /opt/bizerba/posprinter
- в строке запуска ringojs добавить параметр включения java.library.path
- bash$: /home/bizuser/fozzy/ringojs/bin/ringo -J-Djava.library.path=/usr/local/lib /home/bizuser/fozzy/services/printer/main.js

#Запуск сервиса весов
- сервис должен запускаться из папки /opt/bizerba/posscale
- bash$: /home/bizuser/fozzy/ringojs/bin/ringo /home/bizuser/fozzy/services/scale/main.js
