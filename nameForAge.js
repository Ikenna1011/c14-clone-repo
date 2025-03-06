
function nameForAge(age) {
    if (age <= 2) return 'baby'
    if (age > 2 && age < 12) return 'child'
    if (age >= 12 && age <= 19) return 'teenager'
    if (age >= 20 && age < 30) return 'twenty something'
    if (age >= 30 && age < 40) return 'thirty something'
    if (age >= 40 && age < 50) return 'forty something'
    if (age >= 50) return 'almost grown up'
}

addTextToPage('Age-name-o-matic!')
addInputToPage('Age', 7)
addButtonToPage('Get name for age', () => {
    const age = getInputAsNumber('Age')
    const ageName = nameForAge(age)
    addTextToPage('Name for age ' + age + ' is ' + ageName)
})
