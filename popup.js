document.getElementById('readingsButton').addEventListener('click', function() {
    chrome.tabs.executeScript({
        code: `(${autoClickReadings})()`
    }, function(results) {
        document.getElementById('result').textContent = 'Completed';
    });
});

document.getElementById('cardsButton').addEventListener('click', function() {
    chrome.tabs.executeScript({
        code: `(${autoClickCards})()`
    }, function(results) {
        document.getElementById('result').textContent = 'Completed';
    });
});

document.getElementById('labsButton').addEventListener('click', function() {
    chrome.tabs.executeScript({
        code: `(${autoClickLabs})()`
    }, function(results) {
        document.getElementById('result').textContent = 'Completed';
    });
});

function autoClickCards() {
    function clickElement() {
        const element = document.querySelector('.icomoon-new-24px-correct-1');  //try this for cards: .icomoon-new-24px-correct-1 //this one for reading a.text-dark.set-unset-time.dropdown-item.mark_read
        if (element) {
            element.click();
            setTimeout(clickElement, 500); // Wait 500ms before clicking the next element
        }
    }
    clickElement();
}

function autoClickReadings() {
    function clickElement() {
        const element = document.querySelector('a.text-dark.set-unset-time.dropdown-item.mark_read');  //try this for cards: .icomoon-new-24px-correct-1 //this one for reading a.text-dark.set-unset-time.dropdown-item.mark_read
        if (element) {
            element.click();
            setTimeout(clickElement, 500); // Wait 500ms before clicking the next element
        }
    }
    clickElement();
}

//icomoon-24px-submit
function autoClickLabs() {
    function clickElement() {
        const element = document.querySelector('.align-bottom:nth-child(2)');  //try this for cards: .icomoon-new-24px-correct-1 //this one for reading a.text-dark.set-unset-time.dropdown-item.mark_read
        if (element) {
            console.log("EHSLDKFJLKSDJF");
            element.click();
            const element = document.getElementById('submit-mark');  //try this for cards: .icomoon-new-24px-correct-1 //this one for reading a.text-dark.set-unset-time.dropdown-item.mark_read
            if (element) {
                console.log("EHSLDKFJLKSDJF");
                element.click();


            }
            setTimeout(clickElement, 500); // Wait 500ms before clicking the next element
        else{
            console.log("THIS AINT WORKING")
        }
    }
    clickElement();
}

