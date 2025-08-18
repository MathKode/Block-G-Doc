console.log('Confirmation Page Script loaded !')

url = window.location.href;

document_id = url.split('blocking.html?')[1].split('/')[0]

target_url = "https://docs.google.com/document/d/" + document_id

console.log(target_url)



document.getElementById("continue").addEventListener("click", allow);
async function allow() {
    url = window.location.href
    document_id = url.split('blocking.html?')[1].split('/')[0]

    await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [3],
        addRules: [
            {
                id: 3,
                priority: 3,
                condition: {
                    urlFilter : document_id,
                    resourceTypes: ["main_frame"],
                },
                action: {
                    type: "allow",
                },
            },
        ],
    });
    window.location.replace("https://docs.google.com/document/d/" + document_id);
}
