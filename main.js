let userTextFirst = '';
let userTextSecond = '';
let searchLetter = '';

while(userTextFirst === ''){
    userTextFirst = prompt('Введіть ваше перше речення!')
}
while(userTextSecond === '' && userTextFirst !== null){
    userTextSecond = prompt('Введіть ваше друге речення!')
}
while(searchLetter === '' && userTextFirst !== null && userTextSecond !== null){
    searchLetter = prompt('Введіть букву для пошуку')
}

function getRow(firstRow,secondRow,searchLetter) {
      const firstLetterLength  = firstRow.toLowerCase().search(searchLetter);
      const secondLetterLength = secondRow.toLowerCase().search(searchLetter);
        console.log(firstLetterLength)
        console.log(secondLetterLength)
      if(firstLetterLength > secondLetterLength){
          alert(`У вашому першому реченні більше ${searchLetter} букв ---- ${firstRow}`)
      }else if(firstLetterLength < secondLetterLength){
          alert(`У вашому другому реченні більше ${searchLetter} букв ---- ${secondRow}`)
      }else if(firstLetterLength === -1 && secondLetterLength === -1){
          alert(`Ми не найшли жодних співпадінь`)
      }else{
          alert(`Кількість букв ${searchLetter} рівна в обох реченнях`)
      }

}
if(userTextFirst !== null && userTextSecond !== null && searchLetter !== null){
    getRow(userTextFirst,userTextSecond,searchLetter)
}else{
    alert('Дякую за Увагу! До наступної зутрічі')
}