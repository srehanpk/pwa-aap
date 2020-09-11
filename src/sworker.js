export default function sWorker () {

  let sWorker = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(sWorker).then ((result) => {

    console.log("result", result);
  })
  .catch ((err)=> {

    console.log("Err", err);
  })
}




