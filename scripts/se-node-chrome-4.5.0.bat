:: Beginning of hub batch file
set SERVER_VERSION=4.5.0
set HUB_PORT=5557
set REGISTER_IP=localhost:4444
set CHROME_DRIVER=.\webdriver\chromedriver.exe

java -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar ./scripts/selenium-server-%SERVER_VERSION%.jar node --hub http://%REGISTER_IP%/grid/register --port %HUB_PORT%
:: End of hub batch file
pause
