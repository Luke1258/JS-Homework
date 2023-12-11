// const updateSkill = (id, value) => {
//     document.querySelector(`#${id}`).style = `width: ${value}%`
// }

// const html = document.querySelector("#skill01")
// html.textContent = `${htmlLevel} / 100`
// updateSkill("skill__progress01", htmlLevel)

// const css = document.querySelector("#skill02")
// css.textContent = `${cssLevel} / 100`
// updateSkill("skill__progress02", cssLevel)

// const js = document.querySelector("#skill03")
// js.textContent = `${jsLevel} / 100`
// updateSkill("skill__progress03", jsLevel)

const htmlLevel = prompt("Fill your level of HTML")
const cssLevel = prompt("Fill your level of CSS")
const jsLevel = prompt("Fill your level of JavaScript")

const updateSkill = (skillId, skillProgessId, level) => {
    const html = document.querySelector(`#${skillId}`)
    html.textContent = `${level} / 100`
    document.querySelector(`#${skillProgessId}`).style = `width: ${level}%`
}

updateSkill("skill01", "skill__progress01", htmlLevel)
updateSkill("skill02", "skill__progress02", cssLevel)
updateSkill("skill03", "skill__progress03", jsLevel)