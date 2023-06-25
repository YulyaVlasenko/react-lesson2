import data from "../../data.json"
import { Head } from "../Head/Head"
// import css from './Card.module.css'
// import clsx from 'clsx'
import { Container, Photo } from "./Card.styled";

// export const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       >
//       <img src={photo.url}
//       alt={photo.title} />
//   <div>
//         <h5>Card title: {photo.title}</h5>
       
//         <Head id='id-123' clas='card-title'>
//           qwerty
//           <div>qwerty</div>
//           <p>qwerty</p>
//         </Head>
//     <a href="#">Go somewhere</a>
//   </div>
// </div>
// )
// })
// }


// //Інлайнові стилі атрибутом style не юзаються

// export const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       key={photo.id}
//       style = {{backgroundColor: 'black'}}
//       >
//       <img src={photo.url}
//       alt={photo.title} />
//   <div>
//         <h5>Card title: {photo.title}</h5>
       
//         <Head id='id-123' clas='card-title'>
//           qwerty
//           <div>qwerty</div>
//           <p>qwerty</p>
//         </Head>
//     <a href="#">Go somewhere</a>
//   </div>
// </div>
// )
// })
// }


// //Модульний CSS: створюється папка кожного компонента з розширенням .module.css, імпортується сутність з цієї папки,
// //присвоюються класи формату  <div className={css.main}>



// export const Card = () => {
//   return data.map((photo) => {
//   return (
//     <div
//       id="test"
//       key={photo.id}
//       className={css.main}
//       >
//       <img src={photo.url}
//         alt={photo.title}
//         className={css.photo}
//       />
//   <div>
//         <h5>Card title: {photo.title}</h5>
       
//         <Head id='id-123' clas='card-title'>
//           qwerty
//           <div>qwerty</div>
//           <p>qwerty</p>
//         </Head>
//     <a href="#">Go somewhere</a>
//   </div>
// </div>
// )
// })
// }


// //Стилі за умовою

// export const Card = ({isOnline}) => {
//   return data.map((photo) => {
//   return (
//     <div
//       id="test"
//       key={photo.id}
//       className={isOnline ? css.red : css.blue}
//       >
//       <img src={photo.url}
//         alt={photo.title}
//         className={css.photo}
//       />
//   <div>
//         <h5>Card title: {photo.title}</h5>
       
//         <Head id='id-123' clas='card-title'>
//           qwerty
//           <div>qwerty</div>
//           <p>qwerty</p>
//         </Head>
//     <a href="#">Go somewhere</a>
//   </div>
// </div>
// )
// })
// }

// //Композиція класів

// export const Card = ({isOnline}) => {
//   return data.map((photo) => {
//   return (
//     <div
//       id="test"
//       key={photo.id}
//       className={isOnline ? `${css.main} ${css.red}` :
//                             `${css.main} ${css.blue}`}
//       >
//       <img src={photo.url}
//         alt={photo.title}
//         className={css.photo}
//       />
//   <div>
//         <h5>Card title: {photo.title}</h5>
       
//         <Head id='id-123' clas='card-title'>
//           qwerty
//           <div>qwerty</div>
//           <p>qwerty</p>
//         </Head>
//     <a href="#">Go somewhere</a>
//   </div>
// </div>
// )
// })
// }

// //Композиція класів з використанням бібліотеки clsx

// export const Card = ({isOnline, isOffline}) => {
//   return data.map((photo) => {
//   return (
//     <div
//       id="test"
//       key={photo.id}
//       // //clsx('foo', true && 'bar', 'baz');
//         // className={clsx(css.main,
//         // isOnline && css.red,
//         //!isOnline && css.blue)}
        
//       // // як об'єкт clsx({ foo:true, bar:false, baz:isTrue() }):
//       // className={clsx(css.main, { [css.red]: isOnline },
//       //                            {[css.blue]: isOffline})}
      
//       //тернарний вираз
//       className={clsx(css.main, isOnline ? css.red : css.blue)}
//       >
//       <img src={photo.url}
//         alt={photo.title}
//         className={css.photo}
//       />
//   <div>
//         <h5>Card title: {photo.title}</h5>
       
//         <Head id='id-123' clas='card-title'>
//           qwerty
//           <div>qwerty</div>
//           <p>qwerty</p>
//         </Head>
//     <a href="#">Go somewhere</a>
//   </div>
// </div>
// )
// })
// }




// CSS in JS. Бібліотека styled-components. Container(замінив div) та Photo(замінив img) - це компоненти з файлу Card.styled.js
// прокидуємо пропс isHide

export const Card = ({isOnline, isOffline}) => {
  return data.map((photo) => {
  return (
    <Container
      key={photo.id}
      isHide = {isOnline}
      >
      <Photo src={photo.url}
        alt={photo.title} />
      <h5>Card title: {photo.title}</h5>
  <div>
        <h5>Card title: {photo.title}</h5>
       
        <Head id='id-123' clas='card-title'>
          qwerty
          <div>qwerty</div>
          <p>qwerty</p>
        </Head>
    <a href="#">Go somewhere</a>
  </div>
</Container>
)
})
}

