// Seleciona o elemento de vídeo:
const video = document.getElementById('video-player');

// Definido arrays de URLs dos videos:
const videoSource = [
    "https://cmaf.fly.latam.hbomaxcdn.com/videos/GYuFxFgzSGcIMvgEAAAAG/v/0_3d5bc3/v12.mp4",
    "https://cmaf.cf.latam.hbomaxcdn.com/videos/GYZ1KOABV3oydnQEAAAAE/0/f83e29/v/v11.mp4",
    "https://cmaf.akm.latam.hbomaxcdn.com/videos/GYk7rQgnSAJ25wgEAAAAC/0/cda460/v/v13.mp4"

];

// Define o indice inicial
currentVideoIndex = 0;

//adiciona um listner de evento ao video 
video.addEventListener("ended" , () => {
 //se o video atual for o ultimo da array,ele reenicia
    if(currentVideoIndex === videoSource.length - 1){
        currentVideoIndex = 0;
    } else{
        //passa para o proximo video
        currentVideoIndex++;
    }
    //Altera a fonte do video para o proximo da lista
    video.src = videoSource[currentVideoIndex];

    //responsavel pela reenicialização da produção
    video.play();
} )