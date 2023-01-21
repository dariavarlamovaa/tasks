/*tasl Погода*/
/**
 * @param {string} weatherApiResponse
 */
const willItRain = weatherApiResponse => {
    const weather = JSON.parse(weatherApiResponse)
    return weather.now.rainExpected === true ? true : false
}


// Sample usage - do not modify
console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","rainExpected":true}}')); // true
console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":false}}')); // false


/*task Отправка сообщения*/
/**
 * @param {string} status
 * @param {string} location
 */
const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
      userId,
      status,
      location
    };

    const merged = JSON.stringify(data)
    return merged
  }
  
  
  // Sample usage - do not modify
console.log(prepareStatus("My first post!", "Amsterdam")); 
  // '{"userId":42,"status":"My first post!","location":"Amsterdam"}'
  
console.log(prepareStatus("Hello World!", "Berlin")); 
  // '{"userId":42,"status":"Hello World!","location":"Berlin"}'


/*task уведомления*/
const checkForNewNotificationss = () => {
	fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then((data) => showNewNotificationss(data.count))
}


// do NOT modify this function
function showNewNotificationss(count) {
  console.log(`You have ${count} new notifications. Would you like to read them?`);
}


// Sample usage - do not modify
console.log(checkForNewNotificationss()); // You have 3 new notifications. Would you like to read them?
