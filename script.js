const container = document.getElementById('video-container');
const button = document.getElementById('get-video');

button.addEventListener('click', () => {
  Twilio.Video.createLocalVideoTrack().then(track => {
    setTimeout(() => {
      container.classList.add('live');
    }, 2000);
    container.append(track.attach());

    const ribbon = document.createElement("p");
    ribbon.classList.add("ribbon");
    // ribbon.append(document.createTextNode("Your ribbon"));
    ribbon.append(document.createElement("IMG"));
    container.append(ribbon);

    // has to be "p". if you do "IMG" theres some thin white border 
    const bottomleftcute = document.createElement("p");
    bottomleftcute.classList.add("bottomleftcute");
    bottomleftcute.append(document.createElement("IMG"));
    container.append(bottomleftcute);

    button.remove();
  });
})