const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfnUbZouvJC_8N6ufVfkNsYCAVpvcG_Vc041mY7CQz2sqvbrw/viewform?usp=header";

const events = [
    {title: "Tech Innovation Summit", date: "Dec 10, 2025", time: "10:00 AM - 12:00 PM", venue: "Online (Zoom)", img: "img/1.jpg" },
    {title: "Digital Marketing Workshop", date: "Dec 11, 2025", time: "2:00 PM - 4:00 PM", venue: "Online (Zoom)", img: "img/2.jpg" },
    {title: "Leadership & Team Building", date: "Dec 12, 2025", time: "9:00 AM - 11:00 AM", venue: "Online (Google Meet)", img: "img/3.jpg" },
    {title: "AI & Machine Learning Bootcamp", date: "Dec 14, 2025", time: "1:00 PM - 3:00 PM", venue: "Online (Zoom)", img: "img/4.jpg" },
    {title: "Entrepreneurship Talk", date: "Dec 15, 2025", time: "5:00 PM - 6:30 PM", venue: "Online (Zoom)", img: "img/5.jpg" },
    {title: "UI/UX Design Conference", date: "Dec 16, 2025", time: "7:00 PM - 9:00 PM", venue: "Online (Google Meet)", img: "img/6.jpg" },
    {title: "Digital Tech Workshop", date: "Dec 17, 2025", time: "2:00 PM - 4:00 PM", venue: "Online (Zoom)", img: "img/7.jpg" },
    {title: "Design Workshop", date: "Dec 18, 2025", time: "2:00 PM - 4:00 PM", venue: "Online (Zoom)", img: "img/8.jpg" },
    {title: "Code Summit", date: "Dec 19, 2025", time: "2:00 PM - 4:00 PM", venue: "Online (Google Meet)", img: "img/9.jpg" },    
];

const gridContainer = document.getElementById('events-grid');
const modal = document.getElementById('qr-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const qrImage = document.getElementById('qr-image');
const modalEventTitle = document.getElementById('modal-event-title');
const modalEventTime = document.getElementById('modal-event-time');

events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <img src="${event.img}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Venue:</strong> ${event.venue}</p>
        <button class="check-in-btn" onclick="openModal('${event.title}', '${event.date}', '${event.time}')">Check In</button>
    `;
    gridContainer.appendChild(card);
});

window.openModal = function(title, date, time) {
    modalEventTitle.innerText = title;
    modalEventTime.innerText = `${date} • ${time}`;
    
    const encodedLink = encodeURIComponent(googleFormLink);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedLink}`;
    
    modal.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});