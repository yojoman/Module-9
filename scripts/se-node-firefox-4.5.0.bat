:: Beginning of hub batch file
set SERVER_VERSION=4.5.0
set HUB_PORT=5556
set REGISTER_IP=localhost:4444
set GECKO_DRIVER=.\webdriver\geckodriver.exe

java -Dwebdriver.gecko.driver=%GECKO_DRIVER% -jar ./scripts/selenium-server-%SERVER_VERSION%.jar node --hub http://%REGISTER_IP%/grid/register --port %HUB_PORT%
:: End of hub batch file
pause
