
const htmlLevel = prompt("Fill your level of HTML")
const cssLevel = prompt("Fill your level of CSS")
const jsLevel = prompt("Fill your level of JavaScript")

const updateSkill = (id, value) => {
    document.querySelector(`#${id}`).style = `width: ${value}%`
}

const html = document.querySelector("#skill01")
html.textContent = `${htmlLevel} / 100`
updateSkill("skill__progress01", htmlLevel)

const css = document.querySelector("#skill02")
css.textContent = `${cssLevel} / 100`
updateSkill("skill__progress02", cssLevel)

const js = document.querySelector("#skill03")
js.textContent = `${jsLevel} / 100`
updateSkill("skill__progress03", jsLevel)