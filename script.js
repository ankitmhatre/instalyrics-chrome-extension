async function fetchData() {
  const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
  const record = await res.json();
  document.getElementById("date").innerHTML = record.data[0].date;
  document.getElementById("areaName").innerHTML = record.data[0].areaName;
  document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
  document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
}
fetchData();

document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var d = document.getElementById("text");
  // onClick's logic below:
  a.addEventListener("click", function () {
   


    if ("mediaSession" in navigator) {
        console.log(navigator.mediaSession)
d.innerHTML =  navigator.mediaSession.metadata


    //   navigator.mediaSession.metadata = new MediaMetadata({
    //     title: "Never Gonna Give You Up",
    //     artist: "Rick Astley",
    //     album: "Whenever You Need Somebody",
    //     artwork: [
    //       {
    //         src: "https://dummyimage.com/96x96",
    //         sizes: "96x96",
    //         type: "image/png",
    //       },
    //       {
    //         src: "https://dummyimage.com/128x128",
    //         sizes: "128x128",
    //         type: "image/png",
    //       },
    //       {
    //         src: "https://dummyimage.com/192x192",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "https://dummyimage.com/256x256",
    //         sizes: "256x256",
    //         type: "image/png",
    //       },
    //       {
    //         src: "https://dummyimage.com/384x384",
    //         sizes: "384x384",
    //         type: "image/png",
    //       },
    //       {
    //         src: "https://dummyimage.com/512x512",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //     ],
    //   });
    }
  });
});

// if ('mediaSession' in navigator) {

//     navigator.mediaSession.metadata = new MediaMetadata({
//     title: 'Never Gonna Give You Up',
//     artist: 'Rick Astley',
//     album: 'Whenever You Need Somebody',
//     artwork: [
//         { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
//         { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
//         { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
//         { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
//         { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
//         { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
//     ]
//     });

//     navigator.mediaSession.setActionHandler('play', function() {});
//     navigator.mediaSession.setActionHandler('pause', function() {});
//     navigator.mediaSession.setActionHandler('seekbackward', function() {});
//     navigator.mediaSession.setActionHandler('seekforward', function() {});
//     navigator.mediaSession.setActionHandler('previoustrack', function() {});
//     navigator.mediaSession.setActionHandler('nexttrack', function() {});
// }
