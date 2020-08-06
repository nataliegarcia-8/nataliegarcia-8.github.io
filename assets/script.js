const linkPage2 = document.getElementById('linkPage2')
const linkPage3 = document.getElementById('linkPage3')
const linkPage4 = document.getElementById('linkPage4')

const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

linkPage2.onclick = function () {
    page2.scrollIntoView()
}
linkPage3.onclick = function () {
    page3.scrollIntoView()
}
linkPage4.onclick = function () {
    page4.scrollIntoView()
}