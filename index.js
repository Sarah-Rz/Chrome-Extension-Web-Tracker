let myPages = [];
let oldPages = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const delBtn = document.getElementById("del-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myPages"));

render = (pages) => {
    let listItems = "";
    for ( let i = 0; i < pages.length; i++ ) {
        listItems += `
            <li>
                <a href=${pages[i]} target= _blank)
                );
                >
                ${pages[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
};

inputBtn.addEventListener ("click", () => {
    myPages.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem( "myPages", JSON.stringify(myPages) )
    render(myPages)

    console.log(localStorage.getItem("myPages"))
}); 

if (leadsFromLocalStorage) {
    myPages = leadsFromLocalStorage
    render(myPages)
};

delBtn.addEventListener( "dblclick", () => {
   localStorage.clear()
   myPages = []
   render(myPages)
});

tabBtn.addEventListener("click", () => {
    chrome. tabs. query({active: true, currentWindow: true}, function(tabs){
        myPages.push(tabs[0].url)
        localStorage.setItem("myPages", JSON.stringify(myPages))
        render(myPages)
    })
    
}) 
console.log(tabBtn)



