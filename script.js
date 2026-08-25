function searchTools() {

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".tool-card");


    cards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });
}


/* Search while typing */
const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchTools
    );


    /* Press Enter to search */
    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchTools();

            }

        }
    );

}


/* Clear search when page loads */
window.addEventListener(
    "pageshow",
    function() {

        if (searchInput) {

            searchInput.value = "";

        }

        const cards =
            document.querySelectorAll(".tool-card");

        cards.forEach(function(card) {

            card.style.display = "";

        });

    }
);
