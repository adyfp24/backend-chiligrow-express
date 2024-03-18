
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#define BLYNK_PRINT Serial
        
char auth[] = "bV6v5cwR-kINmqKkbgP8uYQTXIgQoWBs";  

const int moisturePin = A0;          
const int motorPin = D0;
unsigned long interval = 10000;
unsigned long previousMillis = 0;
unsigned long interval1 = 1000;
unsigned long previousMillis1 = 0;
float moisturePercentage; 

void setup()
{
  Serial.begin(115200);
  delay(10);
  pinMode(motorPin, OUTPUT);
  digitalWrite(motorPin, LOW); // keep motor off initally
  Blynk.begin(auth, "kkk", "kkk15032000");  //wifi name and password

  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop()
{
  Blynk.run();
  unsigned long currentMillis = millis(); // grab current time

  moisturePercentage = ( 100.00 - ( (analogRead(moisturePin) / 1023.00) * 100.00 ) );

  if ((unsigned long)(currentMillis - previousMillis1) >= interval1) {
    Serial.print("Soil Moisture is  = ");
    Serial.print(moisturePercentage);
    Serial.println("%");
    previousMillis1 = millis();
  }

  if (moisturePercentage < 50) {
    digitalWrite(motorPin, HIGH); //turn on motor
  }
  if (moisturePercentage > 50 && moisturePercentage < 55) {
    digitalWrite(motorPin, HIGH); //turn on motor pump
  }
  if (moisturePercentage > 56) {
    digitalWrite(motorPin, LOW); // turn off mottor
  }

  if ((unsigned long)(currentMillis - previousMillis) >= interval) {
    previousMillis = millis();
  }
    String url1="Moisture Percentage: ";
    url1+=moisturePercentage;
    
  Blynk.notify(url1);

}