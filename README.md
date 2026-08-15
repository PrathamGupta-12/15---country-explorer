# 🌍 Country Explorer

A simple and interactive **Country Explorer** built using **HTML, CSS, and JavaScript**. The application fetches country information from an external API and allows users to search and sort countries dynamically.

## Features

*  Display countries dynamically from an external API
*  Search countries by name
*  Sort countries alphabetically (A-Z)
*  Toggle between sorted and original order
*  Dark mode
*  Display country flags
*  Handle missing or broken flag images with a fallback placeholder
*  Display country capitals
*  Handle API request failures
*  Responsive country card grid

## Technologies Used

* **HTML5** — Page structure
* **CSS3** — Styling, responsive grid, and dark mode
* **JavaScript (ES6+)** — Application logic and DOM manipulation
* **Fetch API** — Fetching country data
* **Async/Await** — Handling API requests
* **CountriesNow API** — Providing country information

## API Used

This project uses the CountriesNow API to retrieve country information.

**Endpoint:**

`https://countriesnow.space/api/v0.1/countries/info?returns=flag,capital,population`

The application currently uses the following information:

* Country name
* Capital
* Flag URL

## What I Practiced

This project helped me practice:

* Working with external APIs
* `fetch()`
* `async/await`
* HTTP response validation using `response.ok`
* DOM manipulation
* Event listeners
* Dynamic element creation
* `classList`
* Array copying with the spread operator
* Array sorting with `sort()`
* String searching with `includes()`
* Case-insensitive searching
* `localeCompare()`
* Conditional rendering
* Image `error` events
* Reusable helper functions
* Dark mode implementation
* Client-side filtering and sorting
* API error handling

## How It Works

### 1. Fetch Country Data

When the page loads, the application sends a request to the CountriesNow API.

The returned country data is stored in JavaScript so that subsequent searches and sorting operations can be performed locally.

### 2. Search Countries

Users can type a country name into the search box.

The application filters the stored country data using a case-insensitive search.

For example:

```text
ind
```

can return countries such as:

* India
* Indonesia

### 3. Sort Countries

The **Sort A-Z** button sorts countries alphabetically using `localeCompare()`.

The button can also switch back to the original API order.

### 4. Display Country Cards

Each country is dynamically rendered as a card containing:

* Country name
* Capital
* Flag

### 5. Handle Broken Flags

Some countries may provide a missing or invalid flag URL.

The application handles both cases by displaying a fallback message instead of leaving a broken image that disrupts the card layout.

### 6. Dark Mode

The theme button toggles a `dark` class on the `<body>` element to switch between light and dark themes.

## Project Structure

```text
country-explorer/
│
├── index.html / Project15.html
├── style.css / Project15.css
├── script.js / Project15.js
└── README.md
```

## How to Run

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open the project folder:

```bash
cd country-explorer
```

3. Open `index.html` in a browser.

No additional packages or dependencies are required.

## 🔮 Future Improvements

Possible improvements for future versions:

*  Display population
*  Display continent/region
*  Add country details
*  Add country-specific pages
*  Add favorite countries
*  Add more advanced filters
*  Add population sorting
*  Add a loading state
*  Add pagination for large datasets

## Author

**Krishna Gupta**

---

⭐ Built as part of my JavaScript learning journey to practice working with APIs, DOM manipulation, filtering, sorting, and dynamic UI rendering.
