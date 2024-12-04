const countryBox = document.querySelector(".countrySelect");
const cityBox = document.querySelector(".citySelect");

let townsArr = [
  { Country: "Select Country", citys: ["Select City..."] },
  { Country: "Iran", citys: ["Tehran", "Shiraz", "Esfahan", "Gilan"] },
  { Country: "Canada", citys: ["Toronto", "Quebec", "Montreal", "Vancouver"] },
  { Country: "United States", citys: ["San Diego", "Los Angeles", "Chicago", "Boston"],},
];

// Populate country dropdown
townsArr.forEach((obj) => {
  countryBox.insertAdjacentHTML(
    "beforeend",
    `<option value="${obj.Country}">${obj.Country}</option>`
  );
});

// Function to update cities based on selected country
function countrySelectFunction() {
  // Clear previous city options
  cityBox.innerHTML = "";

  // Find the selected country object
  const selectedCountry = countryBox.value;
  const countryObj = townsArr.find((obj) => obj.Country === selectedCountry);

  // If a valid country is selected, update the city dropdown
  if (countryObj) {
    countryObj.citys.forEach((city) => {
      cityBox.insertAdjacentHTML(
        "beforeend",
        `<option value="${city}">${city}</option>`
      );
    });
  }
}
