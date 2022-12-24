/*task. Инициалы пользователя*/
const user1 = {
    firstName: "Sam",
    lastName: "Doe",
    age: 20,
  };
  
  const user2 = {
    firstName: "Charlie",
    lastName: "Fort",
    age: 31,
  };
  
  /**
   * @param {Object[]} user
   * @param {string} user[].firstName
   * @param {string} user[].lastName
   * @param {number} user[].age
   */
  function getIntials(user) {
    const result = `${user.firstName[0]}${user.lastName[0]}`;
    return result;
  }
  
  // Sample usage - do not modify
  console.log(getIntials(user1)); // "SD"
  console.log(getIntials(user2)); // "CF"
  
  /*task. Добавление чисел*/
  const course1 = {
    name: "Learn English",
    isCompleted: true,
  };
  
  const course2 = {
    name: "Learn JavaScript",
    isCompleted: false,
  };
  
  /**
   * @param {Object[]} course
   * @param {number} count
   */
  function addNumberOfChapters(course, count) {
    course.numberOfChapters = count;
    return course;
  }
  
  // Sample usage - do not modify
  console.log(addNumberOfChapters(course1, 80)); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
  console.log(addNumberOfChapters(course2, 60)); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }
  
  /*task. Сумма всех оценок*/
  const student = {
    name: "Sam Doe",
    age: 24,
    grades: [13, 15, 15, 14, 18],
  };
  
  /**
   * @param {Object} student
   * @param {string} student.name
   * @param {number} student.age
   * @param {number[]} student.grades
   */
  function getSumOfGrades(student) {
    let sum = 0;
    student.grades.forEach(function (grade) {
      sum += grade;
    });
    return sum;
  }
  
  // Sample usage - do not modify
  console.log(getSumOfGrades(student)); // 75
  
  /*task. Имя пользователя */
  const users = [
    {
      firstName: "Sam",
      lastName: "Blue",
      age: 21,
    },
    {
      firstName: "Charlie",
      lastName: "Bon",
      age: 38,
    },
  ];
  
  /**
   * @param {{firstName: String, lastName: String, age: Number}[]} users
   */
  function getLastUserFullName(users) {
    return `${users.at(-1).firstName} ${users.at(-1).lastName}`;
  }
  
  // Sample usage - do not modify
  console.log(getLastUserFullName(users)); // "Charlie Bon"
  
  /*task. Первая оценка */
  const students = [
    {
      name: "Sam Doe",
      age: 24,
      learnEnglish: {
        startYear: 2020,
        grade: 18,
      },
    },
    {
      name: "Charlie Bron",
      age: 31,
      learnEnglish: {
        startYear: 2021,
        grade: 19,
      },
    },
  ];
  
  /**
   * @typedef {{startYear: Number, grade: Number}} Course
   * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
   *
   * @param {Student[]} students
   */
  function getFirstStudentGrade(students) {
    return students[0].learnEnglish.grade;
  }
  
  // Sample usage - do not modify
  console.log(getFirstStudentGrade(students)); // 18
  
  /*task. Сумма вложенных оценок */
  const pupils = [
    {
      name: "Sam Doe",
      age: 24,
      learnEnglish: {
        startYear: 2020,
        grade: 18,
      },
    },
    {
      name: "Charlie Bron",
      age: 31,
      learnEnglish: {
        startYear: 2021,
        grade: 19,
      },
    },
  ];
  
  /**
   * @typedef {{startYear: Number, grade: Number}} Course
   * @typedef {{name: String, age: Number, learnEnglish: Course}} Pupil
   *
   * @param {Pupil[]} pupils
   */
  function getSumGrades(pupils) {
    let sum = 0;
    pupils.forEach(function (item) {
      sum += item.learnEnglish.grade;
    });
    return sum;
  }
  
  // Sample usage - do not modify
  console.log(getSumGrades(pupils)); // 37
  
  /*task. Имена пользователей */
  const people = [
    {
      firstName: "Sam",
      lastName: "Blue",
      age: 21,
    },
    {
      firstName: "Charlie",
      lastName: "Bon",
      age: 38,
    },
  ];
  
  /**
   * @param {{firstName: String, lastName: String, age: Number}[]} people
   */
  function getFullNames(people) {
    let fullName = people.map(function (person) {
      return person.firstName + " " + person.lastName;
    });
    return fullName;
  }
  
  // Sample usage - do not modify
  console.log(getFullNames(people)); // [Sam Blue, Charlie Bon]
  
  /*CODEWARS */
  function scramble(str1, str2) {
    for (const char2 of str2) {
      if (!str1.includes(char2)) {
        return false;
      }
    }
    return true;
  }
  
  console.log(scramble("rkqodlw", "world")); // true
  console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
  console.log(scramble("katas", "steak")); // false
  
  /*CODEWARS */
  function domainName(url) {
    url = url.replace("https://", "");
    url = url.replace("http://", "");
    url = url.replace("www.", "");
  
    return url.split(".")[0];
  }
  
  console.log(domainName("http://google.com"));
  console.log(domainName("http://google.co.jp"));
  console.log(domainName("http://youtube.com"));
  
  /*task. Разделение объектов */
  /**
   * @param {object} userLocation
   * @param {number} userLocation.lat
   * @param {number} userLocation.lng
   * @param {number} [userLocation.elevation]
   */
  const getLatLngElevation = (userLocation) => {
    const { lat, lng, elevation = 0 } = userLocation;
    return `The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`;
  };
  
  // Sample usage - do not modify
  const userLocation = {
    lat: 24.235235,
    lng: 2.5734,
  };
  
  console.log(getLatLngElevation(userLocation));
  // The latitude is 24.235235, the longitude is 2.5734 and the elevation is 0 meters
  
  /*task. Имя в нижнем регистре*/
  /**
   * @param {object} user
   * @param {object} [user.info]
   * @param {last} [user.info.name]
   */
  const getFullName = (user) => {
    const fullNameUpperCased = user?.info?.name?.toLowerCase();
    return fullNameUpperCased;
  };
  
  // Sample usage - do not modify
  console.log(getFullName({ info: { name: "ALEX" } })); // "alex"
  console.log(getFullName({ info: null })); // undefined
  console.log(getFullName({})); // undefined
  
  /*task.Приветствие пользователя */
  /**
   * @param {object} user
   * @param {string} [user.fullName]
   */
  const getWelcomeMessage = (user) => {
    return `Welcome ${user?.fullName ?? "user"}`;
  };
  
  // Sample usage - do not modify
  console.log(getWelcomeMessage({ fullName: "Sam Green" })); // "Welcome Sam Green"
  console.log(getWelcomeMessage({})); // "Welcome user"
  
  /*task. Рефакторинг доступа к свойствам */
  /**
   * @param {object} user
   * @param {object} [user.payment]
   * @param {object} [user.payment.details]
   * @param {number} [user.payment.details.value]
   */
  const getPaymentValue = (user) => {
    return user.payment?.details?.value ?? 0;
  };
  
  // Sample usage - do not modify
  console.log(getPaymentValue({ id: 1, name: "Alex" })); // 0
  console.log(
    getPaymentValue({ id: 2, name: "Sam", payment: { details: { value: 59 } } })
  ); // 59
  
  /*task. Рефакторинг условий*/
  /**
   * @param {string} host
   * @param {string} user
   * @param {Object} booking
   * @param {string} booking[].status
   */
  const getStatus = (host, user, booking) => {
    const messages = {
      pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
      confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
      canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
      done: `${host} hopes you had a great stay.`,
    };
    return messages[booking.status] ?? "Unknown booking status.";
  };
  
  // Sample usage - do not modify
  const booking1 = { status: "pending" };
  
  console.log(getStatus("Sam", "Alex", booking1));
  // "Hey Alex, we're awaiting confirmation from Sam."
  
  const booking2 = { status: "confirmed" };
  
  console.log(getStatus("Charlie", "Blake", booking2));
  // "Hey Blake, Charlie is excited to be hosting you."
  