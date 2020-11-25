const container = document.getElementById('video_container');
const button = document.getElementById('get-video');

button.addEventListener('click', () => {
  Twilio.Video.createLocalVideoTrack().then(track => {
    container.append(track.attach());

    const ribbon = document.createElement("p");
    ribbon.classList.add("ribbon");
    ribbon.append(document.createElement("IMG"));
    container.append(ribbon);

    // // has to be "p". if you do "IMG" theres some thin white border 
    const bottomleftcute = document.createElement("p");
    bottomleftcute.classList.add("bottomleftcute");
    bottomleftcute.append(document.createElement("IMG"));
    container.append(bottomleftcute);

    const bottomrightcute = document.createElement("p");
    bottomrightcute.classList.add("bottomrightcute");
    bottomrightcute.append(document.createElement("IMG"));
    container.append(bottomrightcute);

    const leftbow = document.createElement("p");
    leftbow.classList.add("leftbow");
    leftbow.append(document.createElement("IMG"));
    container.append(leftbow);

    const rightwand = document.createElement("p");
    rightwand.classList.add("rightwand");
    rightwand.append(document.createElement("IMG"));
    container.append(rightwand);

    const hangingstar_right = document.createElement("p");
    hangingstar_right.classList.add("hangingstar_right");
    hangingstar_right.append(document.createElement("IMG"));
    container.append(hangingstar_right);

    const hangingstar_left = document.createElement("p");
    hangingstar_left.classList.add("hangingstar_left");
    hangingstar_left.append(document.createElement("IMG"));
    container.append(hangingstar_left);

    button.remove();
  });
})