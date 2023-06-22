import data from "../../data.json"
import { Head } from "../Head/Head"




// export const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       className="card" style={{ width: "18rem" }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//         <h5 className="card-title">Card title: {photo.title}</h5>
       
//         <Head id='id-123' clas='card-title'/>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
// }
  
// Створимо children для Head (масив зі складників між відкриваючим та закриваючим тегом)
// у файлі Head.jsx в параметри деструктуризовані залітає вміст між тегами у children(масив)

export const Card = () => {
  return data.map((photo) => {
  return (
    <div
      key={photo.id}
      className="card" style={{ width: "18rem" }}>
  <img src={photo.url} className="card-img-top" alt={photo.title}/>
  <div className="card-body">
        <h5 className="card-title">Card title: {photo.title}</h5>
       
        <Head id='id-123' clas='card-title'>
          qwerty
          <div>qwerty</div>
          <p>qwerty</p>
        </Head>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
})
} 