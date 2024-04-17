document.getElementById('readingsButton').addEventListener('click', function() {
    chrome.tabs.executeScript({
        code: `(${autoClickReadings})()`
    });
});



function autoClickReadings() {
    function clickElement() {
        const element = document.querySelector('a.fw-normal.text-body.set-unset-time.dropdown-item.mark_read');  
        if (element) {
            console.log("element found");
            element.click();
            setTimeout(clickElement, 50); // Wait 50ms before clicking the next element
        }
    }
    clickElement();
}

