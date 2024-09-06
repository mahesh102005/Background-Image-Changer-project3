document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeImageBtn');
    const images = [
        'url("https://c4.wallpaperflare.com/wallpaper/236/996/32/black-car-audi-rs7-wallpaper-preview.jpg")',
        'url("https://wallpapers.com/images/hd/black-car-4k-8iilwvng2997orpp.jpg")',
        'url("https://wallpapers.com/images/hd/black-car-4k-wnfjwxcbybpwbs08.jpg")',
        'url("https://wallpaperaccess.com/full/263822.jpg")'
    ];
    let currentIndex = 0;

    button.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        document.body.style.backgroundImage = images[currentIndex];
    });
});
