function searchTools() {
    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

document.getElementById("searchInput").addEventListener("input", searchTools);
