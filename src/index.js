import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


//// Розмітка html card з Bootstrap

// const card = (
//   <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )

////Переробляємо в JSX

// const card = (
//   <div className="card" style={{width: "18rem"}}>
//   <img src={data[0].url} className="card-img-top" alt={data[0].title}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title: {data[0].title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(card)

//// У нас три картки, тому застосовуємо метод map()

// const card = data.map((photo) => {
//   return (
//   <div className="card" style={{width: "18rem"}}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title: {photo.title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
  
// ReactDOM.createRoot(document.getElementById('root')).render(card)

////кожному елементу створеного масиву методом map(), потрібно задати унікальний ключ (key), щоб react розрізняв їх

// const card = data.map((photo, index) => {
//   return (
//     <div
//       key={index}   //index НЕ присвоюємо



// const card = data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       className="card" style={{ width: "18rem" }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title: {photo.title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
  
// ReactDOM.createRoot(document.getElementById('root')).render(card)

//// Робимо з цього усього функцію, щоб код виконувався лише тоді, коли його викличуть

// const card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       className="card" style={{ width: "18rem" }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title: {photo.title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
// } 
  
// ReactDOM.createRoot(document.getElementById('root')).render(card())

//// Перетворюємо це в компонент, прописуючи назву функції з Великої літери

// const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       className="card" style={{ width: "18rem" }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title: {photo.title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
// } 
  
// ReactDOM.createRoot(document.getElementById('root')).render(<Card />) // те ж саме що Card()

//// Створимо компонент Head і зарендеримо його в Card

//// компонент, отже має вигляд функції JS, тільки з великої літери
// const Head = () => {         
//   return <p>I am Head</p>
// }

// const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       className="card" style={{ width: "18rem" }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title: {photo.title}</h5>
// //так ми його зарендерили
//     <Head/>                                                     
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
// } 
  
// ReactDOM.createRoot(document.getElementById('root')).render(<Card />) // те ж саме що Card()

// // Передамо в компонент Head аргумент-об'єкт, який називається props


// const Head = (props) => {         
//   return <p id={props.id} className={props.clas}>I am Head</p>
// }

// const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       className="card" style={{ width: "18rem" }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//         <h5 className="card-title">Card title: {photo.title}</h5>
        // об'єкт, який передається як аргумент в компонент Head в JS
//         {/* {Head({id: 'id-123', clas: 'card-title'})}*/}
//         //в JSX (всі ці атрибути є одним об'єктом, який залітає в props)
//         <Head id='id-123' clas='card-title'/>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
// } 
  
// ReactDOM.createRoot(document.getElementById('root')).render(<Card />) // те ж саме що Card()


// //Робимо деструктуризацію 

// const Head = ({id, clas}) => {         
//   return <p id={id} className={clas}>I am Head</p>
// }

// const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       className="card" style={{ width: "18rem" }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//         <h5 className="card-title">Card title: {photo.title}</h5>
//         {/* об'єкт, який передається як аргумент в компонент Head в JS */}
//         {/* {Head({id: 'id-123', clas: 'card-title'})}*/}
//         {/* в JSX (всі ці атрибути є одним об'єктом, який залітає в props) */}
//         <Head id='id-123' clas='card-title'/>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// })
// } 
  
// ReactDOM.createRoot(document.getElementById('root')).render(<Card />) // те ж саме що Card()


////Розкидаємо компоненти Head та Card по файлах

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)