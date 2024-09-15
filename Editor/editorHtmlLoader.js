


async function editor_loadHtml(divID) {
    var div = document.createElement("div");

    async function load(div) {
      const response = await fetch("page.html")
      const text = await response.text()
      div.insertAdjacentText('beforeend', text)
    }
    load();
}
