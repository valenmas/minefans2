document.addEventListener('DOMContentLoaded' , () => {
const overlay = document.getElemenyById('transition-overlay');
const video = document.getElementById('transition-video');
const link = document.querySelectorAll('.transicion-activa:not([target="_blank"])');
if (!overlay) return;

links.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const destination = Link.href;
		
		overlay.classList.add('active');
		
	if (video) {
		video.currenTime = 0;		
		video.play();
		
		video.onended = () => {
				window.location.href = destination;
		};
	}	else {
		setTimeout {() => {
			window.location.href = destination;
		}, 1000);
		}
	}};
}};

if (overlay.classList.contains('active'))	{
	overlay.classList.opacity = '1';
	
	setTimeout ( () => {
		overlay.classList.remove('active');
		
		if(video) {
			video.pause();
	}}, 300);
  }
}};  
		