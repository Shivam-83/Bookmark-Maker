let formEl = document.getElementById('bookmarkForm');
let siteNameInputEl = document.getElementById('siteNameInput');
let siteUrlInputEl = document.getElementById('siteUrlInput');
let siteNameErrMsgEl = document.getElementById('siteNameErrMsg');
let siteUrlErrMsgEl = document.getElementById('siteUrlErrMsg');
let bookmarksListEl = document.getElementById('bookmarksList');

// Function to add a new bookmark
function addBookmark(event) {
    event.preventDefault();

    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;


    siteNameErrMsgEl.textContent = "";
    siteUrlErrMsgEl.textContent = "";

    // Check if site name and URL are provided
    if (siteName === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (siteUrl === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
    if (siteName === "" || siteUrl === "") {
        return;
    }


    let listItem = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.href = siteUrl;
    anchor.textContent = siteName;
    anchor.target = "_blank"; // Open link in a new tab

    listItem.appendChild(anchor);
    bookmarksListEl.appendChild(listItem);


    siteNameInputEl.value = "";
    siteUrlInputEl.value = "";
}

// Event listener for form submission
formEl.addEventListener('submit', addBookmark);

// Event listeners for input validation on change
siteNameInputEl.addEventListener('change', function() {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener('change', function() {
    if (siteUrlInputEl.value.trim() === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});