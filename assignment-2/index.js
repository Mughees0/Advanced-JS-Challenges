// Your code here
class Countries {
  constructor() {}

  // Fetch all countries
  async fetchAllCountries() {
    try {
      await fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log("Try again, An error occured => " + error);
    }
  }
  // Fetch by name
  async fetchByName(name) {
    try {
      await fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log("Try again, An error occured => " + error);
    }
  }

  // Fetch the country border
  async fetchCountryBorders(name) {
    try {
      await fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("The country has the following borders:");
          data[0].borders.map((border) => console.log(border));
        });
    } catch (error) {
      console.log("Try again, An error occured => " + error);
    }
  }

  // Fetch a country by it's language
  async fetchNameByLang(language) {
    try {
      await fetch(`https://restcountries.com/v3.1/lang/${language}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("The language is spoken in:");
          data.map((country) => console.log(country.name.common));
        });
    } catch (error) {
      console.log("Try again, An error occured => " + error);
    }
  }

  // Fetch a country by population greater than specified
  async fetchNameByPopulation(population) {
    try {
      await fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => {
          console.log(
            `These countries have a population Greater than :${population}`
          );
          data.filter((data) => {
            if (data.population > population) {
              console.log(data.name.common);
            }
          });
        });
    } catch (error) {
      console.log("Try again, An error occured => " + error);
    }
  }
}

const country = new Countries();

// country.fetchAllCountries();

// country.fetchByName("pakistan");
// country.fetchByName("Suomi");

// country.fetchCountryBorders("Finland");

// country.fetchNameByLang("urd");

// country.fetchNameByPopulation(1000000000);
