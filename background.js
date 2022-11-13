chrome.runtime.onStartup.addListener(function(){
    chrome.tabs.create(
        {
            url: chrome.runtime.getURL("nav.html")
        }
    )
})

chrome.tabs.create(
    {
        url: chrome.runtime.getURL("nav.html")
    }
)