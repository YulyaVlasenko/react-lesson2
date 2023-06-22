// export const Head = ({ id, clas}) => {
//   return <p id={id} className={clas}>I am Head</p>
// }

// // Створимо children для Head у файлі Card.jsx (масив зі складників між відкриваючим та закриваючим тегом)
// // у файлі Head.jsx в параметри деструктуризовані залітає вміст між тегами у children(масив)

// export const Head = ({ id, clas, children}) => {
//   console.log(children)
//   return <p id={id} className={clas}>I am Head</p>
// }


//далі ми рендеримо масив children

export const Head = ({ id, clas, children }) => {
  console.log(children)
  return (
    <>
    {children}
    <p id={id} className={clas}>I am Head</p>
  </>
  )
}

