const baseUrl = 'https://countriesnow.space/api/v0.1/countries/info?returns=flag,capital,population';

let togglebtn = document.getElementById('themeBtn');

let countriesSection = document.querySelector('.country-grid');

let countriesList = null;

document.addEventListener('DOMContentLoaded' , async () => {

    try {

        let response = await fetch(baseUrl);

        if (!response.ok){
            throw new Error('Failed to Fetch..');
        }

        let data = await response.json()
        
        countriesList = data.data;

        searchAndSort();

    } catch (error){

        countriesSection.innerHTML = 'Failed to load Countries..'
        console.log(error)

    }

})

let isDark = false

togglebtn.addEventListener('click' , () => {

    document.body.classList.toggle('dark');

    if (!isDark) {

        togglebtn.innerText = "🔆Light Mode";
        isDark = true;
        
        
    }
    
    else {
        
        togglebtn.innerText = "🌙 Dark Mode"

        isDark = false
    }

})

function displayCountries(countryObject) {

    let countriesCard = document.createElement('div');

    countriesCard.classList.add('country-card');

    countriesCard.innerHTML = `

        <img 
            src="${countryObject.flag || ''}" 
            alt="Flag of ${countryObject.name}"
        >

        <div class="country-details">

            <h3>
                Country : ${countryObject.name}
            </h3>

            <p>
                Capital : ${countryObject.capital || 'Not available'}
            </p>

        </div>

    `;

    let flagImage = countriesCard.querySelector('img');

    if (!countryObject.flag) {

        flagImage.replaceWith(createFlagPlaceholder());

    } else {

        flagImage.addEventListener('error', () => {

            flagImage.replaceWith(createFlagPlaceholder());

        });

    }

    countriesSection.appendChild(countriesCard);
}

function createFlagPlaceholder() {

    let placeholder = document.createElement('div');

    placeholder.classList.add('no-flag');

    placeholder.innerText = '🌍 Flag not available';

    return placeholder;
}

let searchBox = document.getElementById('searchInput');

let sortBtn = document.getElementById('sortName');

let isSortBtnPressed = false;

sortBtn.addEventListener('click' , () => {

    if (!isSortBtnPressed) {

        isSortBtnPressed = true;
        sortBtn.innerText = 'Sort Normally';
        
    }
    
    else {
        
        isSortBtnPressed = false;
        sortBtn.innerText = 'Sort A-Z';

    }

    searchAndSort()
})

function searchAndSort() {

    countriesSection.innerHTML = "";

    let searchText = searchBox.value.trim().toLowerCase();

    if (countriesList === null) {
        return;
    }

    let tempInfo = [...countriesList];

    if (isSortBtnPressed) {

        tempInfo.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }

    if (searchText == "") {

        for (let subInfo of tempInfo) {

            displayCountries(subInfo);
            
        }
    }

    else {

        for (let subInfo of tempInfo) {

            if (subInfo.name.toLowerCase().includes(searchText)) {

                displayCountries(subInfo);
            
            }
        }
    }

    if (countriesSection.innerHTML === "") {
        countriesSection.innerHTML = '<h2>😥No country Found..</h2>';
    }
}

searchBox.addEventListener('input' , searchAndSort)