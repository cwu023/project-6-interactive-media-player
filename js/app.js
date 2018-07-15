//slects the video element with querySelector since there's only on video element
const video = document.querySelector('video');

//selects all span elements with querySelectorAll since it will select all matches in an array
//and will have an index number for each
const span = document.querySelectorAll('span');

//selects all p elements with querySelector
const captions = document.querySelector('.captions');

//hightlight corresponding captions according to video playtime
video.addEventListener('timeupdate', () => {
  for (let i = 0; i < span.length; i++) {
    //current time of the video
    const currentTime = video.currentTime;

    //start time of each caption in the span element, remember to add [i] since
    //each span is returned with an index number
    const start = span[i].getAttribute('data-start');

    //end time of each caption in the span element, remember to add [i]
    const end = span[i].getAttribute('data-end');

    //if condition is met, hightlight the captions, if not return to original color
    if (currentTime > start && currentTime < end) {
      span[i].style.color = "red";
    } else {
      span[i].style.color = "white";
    }
  }
})

//When click on any caption, video will play at the corresponding time
captions.addEventListener('click', (e) => {
  //if the clicked element is span, run the code
  //remember to use uppercase for span since tagName only return in uppercase
  if ( e.target.tagName == ('SPAN') ) {
    video.currentTime = e.target.getAttribute('data-start');
    video.play();
  }
})
