const colors = {
    p: "#0000ff",
    div: "#b3b3ff",
    span: "#009900",
    section: "#ff751a",
    ul: "#000066",
    ol: "#ffff1a",
    header: "#000d33",
    nav: "#ffa31a",
    main: "#000000",
    footer: "#000066",
    form: 	"#ccccff",
    body: "	#0080ff",
    padrao:"#e0e0d1",
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll(".tag").forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colors.get(tagName)

    if(!box.classList.contains("nolabel")) {
        const label = document.createElement("label")
        label.style.background = colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})