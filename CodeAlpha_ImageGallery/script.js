const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Mountain Landscape",
        description: "Beautiful view of mountains during sunset with vibrant colors reflecting on the water.",
        category: "nature",
        date: "June 12, 2025",
    },
    {
        id: 2,
        src: "https://st2.depositphotos.com/23282022/43497/i/450/depositphotos_434978872-stock-photo-skyline-denver-bathed-morning-sunlight.jpg",
        title: "City Skyline",
        description: "Modern city architecture at dusk with lights starting to illuminate the buildings.",
        category: "urban",
        date: "May 5, 2025",
    },
    {
        id: 3,
        src: "https://png.pngtree.com/background/20240904/original/pngtree-nationaldressed-russian-girl-fetching-water-from-a-rustic-well-photo-picture-image_10391075.jpg",
        title: "Portrait Photography",
        description: "Professional portrait photography with natural lighting and soft background.",
        category: "portrait",
        date: "April 18, 2025",
    },
    {
        id: 4,
        src: "https://i0.wp.com/picjumbo.com/wp-content/uploads/soft-smoke-abstract-background-free-image.jpeg?w=600&quality=80",
        title: "Abstract Art",
        description: "Colorful abstract painting with geometric shapes and fluid patterns.",
        category: "abstract",
        date: "July 22, 2025",
    },
    {
        id: 5,
        src: "https://media.istockphoto.com/id/1173544006/photo/winding-road.jpg?s=612x612&w=0&k=20&c=_VMEnB08arEsLnbES0knQUWHPrCD8TQFCy99JC4RZIQ=",
        title: "Forest Path",
        description: "Sunlight filtering through trees in a dense forest creating beautiful light patterns.",
        category: "nature",
        date: "August 3, 2025",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Urban Architecture",
        description: "Architectural details of modern urban structures with clean lines and symmetry.",
        category: "urban",
        date: "March 15, 2025",
    },
    {
        id: 7,
        src: "https://img.freepik.com/premium-photo/confident-stylish-bearded-man-with-business-look-fashion-beauty-barbershop-concept-mens-wear-confident-businessman-young-handsome-guy-office-suit-stylish-male-wear-formal-clothes_474717-3893.jpg",
        title: "Fashion Portrait",
        description: "Stylish portrait with creative lighting and modern fashion elements.",
        category: "portrait",
        date: "February 28, 2025",
    },
    {
        id: 8,
        src: "https://img.freepik.com/premium-photo/thought-human-brain-form-modern-abstract-art-dark-background_124507-109800.jpg",
        title: "Geometric Patterns",
        description: "Modern abstract geometric design with contrasting colors and precise lines.",
        category: "abstract",
        date: "January 10, 2025",
    },
    {
        id: 9,
        src: "https://img.freepik.com/premium-photo/volcano-wallpaper_1134901-176840.jpg",
        title: "Majestic Waterfall",
        description: "Powerful waterfall in a natural setting with mist creating rainbows in the sunlight.",
        category: "nature",
        date: "September 5, 2025",
    },
    {
        id: 10,
        src: "https://t4.ftcdn.net/jpg/01/14/29/77/360_F_114297755_AYP5rQcVsVPe5GfXs08DxKLaXBXl8l09.jpg",
        title: "Modern Bridge",
        description: "Contemporary bridge architecture with unique design and lighting.",
        category: "urban",
        date: "October 12, 2025",
    },
    {
        id: 11,
        src: "https://img.freepik.com/free-photo/studio-portrait-young-beautiful-brunette-woman-against-black-background_93675-133019.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Creative Portrait",
        description: "Artistic portrait with unique composition and dramatic lighting effects.",
        category: "portrait",
        date: "November 8, 2025",
    },
    {
        id: 12,
        src: "https://images.stockcake.com/public/5/5/6/55659e0b-8d41-47f0-8c6b-00cadbddbb14_medium/abstract-fluid-art-stockcake.jpg",
        title: "Colorful Abstract Fluid",
        description: "Vibrant abstract artwork with fluid shapes and harmonious color transitions.",
        category: "abstract",
        date: "December 1, 2025",
    },
    {
        id: 13,
        src: "https://media.istockphoto.com/id/1953393599/photo/northern-lights-over-the-snowy-mountains-frozen-sea-reflection-in-water-at-winter-night-in.jpg?s=612x612&w=0&k=20&c=XrcgA5CYzr-WtQ2nwTyYo0iDuZFlwyZ__9sRHT7Cn-A=",
        title: "Mountain Peak",
        description: "Snow-capped mountain peak against a clear blue sky.",
        category: "nature",
        date: "January 15, 2025",
    },
    {
        id: 14,
        src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSklFCzz7WFvcdfr6GA2r-w1prKS82xIQALw7CDeSNzFufZEwHz",
        title: "City Lights",
        description: "Urban nightscape with city lights creating patterns in the darkness.",
        category: "urban",
        date: "February 20, 2025",
    },
    {
        id: 15,
        src: "https://img.freepik.com/free-photo/cute-young-woman-outdoor_624325-2565.jpg?semt=ais_se_enriched&w=740&q=80",
        title: "Thoughtful Portrait",
        description: "Portrait capturing thoughtful expression with natural window light.",
        category: "portrait",
        date: "March 5, 2025",
    },
    {
        id: 16,
        src: "https://png.pngtree.com/thumb_back/fh260/background/20231001/pngtree-abstract-3d-rendering-visualizing-the-interconnectedness-of-data-transfer-in-network-image_13561991.png",
        title: "Digital Art",
        description: "Modern digital art with abstract forms and neon color palette.",
        category: "abstract",
        date: "April 10, 2025",
    },
    {
        id: 17,
        src: "https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=eLKpOLUr0frM1GLxpiLLT4Rnmjkkq6iM6HqSyRRMnbc=",
        title: "Desert Landscape",
        description: "Vast desert landscape with sand dunes and dramatic cloud formations.",
        category: "nature",
        date: "May 18, 2025",
    },
    {
        id: 18,
        src: "https://media.istockphoto.com/id/1474265288/photo/asphalt-road-with-city-skyline-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=lTo5_SgSWFL4isO2qLp1qgFmzOSVu6WQ-OWOceCHtTI=",
        title: "Urban Geometry",
        description: "Geometric patterns in urban architecture creating visual interest.",
        category: "urban",
        date: "June 3, 2025",
    },
    {
        id: 19,
        src: "https://png.pngtree.com/thumb_back/fh260/background/20231219/pngtree-hot-air-balloon-flight-photo-image_15526678.png",
        title: "Air ballons",
        description: "A vibrant portrait featuring colorful air balloons rising gracefully into the sky.",
        category: "portrait",
        date: "July 12, 2025",
    },
    {
        id: 20,
        src: "https://media.gettyimages.com/id/1879995464/video/abstract-energy-sphere-with-glowing-bright-particles.jpg?s=640x640&k=20&c=Qd-Rtzzlh0RbvillO-qKFTrxKaJsGryrLoUObPRTyVU=",
        title: "Abstract Circle",
        description: "Circle abstract art with marbling effects and vibrant color combinations.",
        category: "abstract",
        date: "August 8, 2025",
    },
    {
        id: 21,
        src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Autumn Forest",
        description: "Colorful autumn forest with leaves changing colors and soft ground coverage.",
        category: "nature",
        date: "September 15, 2025",
    },
    {
        id: 22,
        src: "https://img.pikbest.com/photo/20241113/asphalt-square-road-and-modern-city-skyline_11076804.jpg!bw700",
        title: "Cityscape Panorama",
        description: "Wide panorama of a modern cityscape during golden hour.",
        category: "urban",
        date: "October 22, 2025",
    },
    {
        id: 23,
        src: "https://t4.ftcdn.net/jpg/06/35/82/31/360_F_635823178_zO8K67yoXhWNUtHS0PWTjqsgpgp5kPNQ.jpg",
        title: "Load Krishna",
        description: "A serene depiction of Lord Krishna embodying divine grace, beauty, and spiritual harmony.",
        category: "portrait",
        date: "November 5, 2025",
    },
    {
        id: 24,
        src: "https://media.istockphoto.com/id/1460853312/photo/abstract-connected-dots-and-lines-concept-of-ai-technology-motion-of-digital-data-flow.webp?b=1&s=612x612&w=0&k=20&c=x0QPuKC83SPVcM7Wx364nTusL776cWWPL23U8HmlCfw=",
        title: "Modern Art Composition",
        description: "Contemporary art composition with abstract forms and minimalistic approach.",
        category: "abstract",
        date: "December 1, 2025",
    },
    {
        id: 25,
        src: "https://www.timeforkids.com/wp-content/uploads/2024/01/coral_1.jpg?w=640",
        title: "Sea",
        description: "A calm and endless expanse of blue water stretching toward the distant horizon under sunlight.",
        category: "nature",
        date: "September 15, 2025",
    },
    {
        id: 26,
        src: "https://static.toiimg.com/thumb/108875210/Mandir.jpg?width=636&height=358&resize=4",
        title: "Prem Mandir",
        description: "A magnificent white marble temple glowing with divine beauty, celebrating love and devotion at Prem Mandir.",
        category: "temple",
        date: "September 15, 2025",
    },
    {
        id: 27,
        src: "https://media.istockphoto.com/id/956025806/photo/pink-flamingos-in-mexico.jpg?s=612x612&w=0&k=20&c=I29CwsUztJQlXufWmw2bvsBtoRhV2-swYljYsVrw6XY=",
        title: "Landscape with Animals",
        description: "A peaceful natural scene featuring animals living freely within a picturesque landscape.",
        category: "nature",
        date: "September 15, 2025",
    },
    {
        id: 28,
        src: "https://cdn1.prayagsamagam.com/media/2023/05/24212654/kedarnath-4-1024x576.webp",
        title: "Kedernath Temple",
        description: "A sacred Himalayan temple surrounded by majestic mountains and peaceful spiritual atmosphere.",
        category: "temple",
        date: "September 15, 2025",
    },
    {
        id: 29,
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/57/7d/ec/photo0jpg.jpg?w=900&h=-1&s=1",
        title: "Mayapur Iskcon Mandir",
        description: "A grand and serene temple complex of Mayapur ISKCON, radiating devotion and spiritual beauty.",
        category: "temple",
        date: "September 15, 2025",
    },
    {
        id: 30,
        src: "https://jagannathtempledigha.com/wp-content/uploads/2025/04/7-1024x577.jpg",
        title: "Digha Jagannath Temple",
        description: "A beautiful coastal shrine dedicated to Lord Jagannath, blending spiritual charm with Digha’s peaceful atmosphere.",
        category: "temple",
        date: "September 15, 2025",
    }
];

// DOM Elements
const gallery = document.getElementById('imageGallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxDate = document.getElementById('lightboxDate');
const lightboxSize = document.getElementById('lightboxSize');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageNumbers = document.getElementById('pageNumbers');
const totalImages = document.getElementById('totalImages');
const totalCategories = document.getElementById('totalCategories');
const downloadBtn = document.querySelector('.download-btn');

// Pagination variables
let currentPage = 1;
const imagesPerPage = 8;
let filteredImages = [...images];
let currentFilter = 'all';
let currentImageIndex = 0;

// Initialize gallery
function initializeGallery() {
    totalImages.textContent = images.length;

    // Count unique categories
    const categories = [...new Set(images.map(img => img.category))];
    totalCategories.textContent = categories.length;

    renderGallery();
    setupEventListeners();
}

// Render gallery with pagination
function renderGallery() {
    gallery.innerHTML = '';

    // Calculate pagination
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const imagesToShow = filteredImages.slice(startIndex, endIndex);

    // Render images
    imagesToShow.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', image.category);
        galleryItem.setAttribute('data-id', image.id);

        galleryItem.innerHTML = `
                    <div class="image-container">
                        <img src="${image.src}" alt="${image.title}" loading="lazy">
                        <div class="image-overlay"></div>
                        <div class="image-category">${image.category}</div>
                    </div>
                    <div class="image-info">
                        <h3>${image.title}</h3>
                        <p>${image.description.substring(0, 80)}...</p>
                        <div class="image-actions">
                            <button class="action-btn view-btn" title="View Full Size">
                                <i class="fas fa-expand"></i>
                            </button>
                            <button class="action-btn like-btn" title="Like Image">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="action-btn download-btn" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                `;

        gallery.appendChild(galleryItem);

        // Add click event to view button
        const viewBtn = galleryItem.querySelector('.view-btn');
        viewBtn.addEventListener('click', () => {
            const globalIndex = filteredImages.findIndex(img => img.id === image.id);
            openLightbox(globalIndex);
        });

        // Add click event to like button
        const likeBtn = galleryItem.querySelector('.like-btn');
        likeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            this.innerHTML = '<i class="fas fa-heart"></i>';
            this.style.color = '#ff4757';
        });

        // Add click event to download button
        const downloadBtn = galleryItem.querySelector('.download-btn');
        downloadBtn.addEventListener('click', async function (e) {
            e.stopPropagation();
            // alert(`Downloading: ${image.title}`);

            // Save original content and state
            const originalHTML = this.innerHTML;
            const originalColor = this.style.color;
            const originalBg = this.style.backgroundColor;
            
            // Show loading state
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            this.style.color = '#4169e1';
            this.disabled = true;

            try {
                // Fetch the image to ensure it's accessible
                const response = await fetch(image.src, {
                    mode: 'cors',
                    headers: new Headers({
                        'Origin': window.location.origin
                    })
                });

                if (!response.ok) {
                    throw new Error('Image fetch failed');
                }

                // Convert to blob
                const blob = await response.blob();

                // Create object URL
                const blobUrl = URL.createObjectURL(blob);

                // Create download link
                const downloadLink = document.createElement('a');
                downloadLink.href = blobUrl;

                // Create filename
                const cleanTitle = image.title
                    .toLowerCase()
                    .replace(/[^a-z0-9\s]/g, '')
                    .replace(/\s+/g, '_');
                const fileExtension = blob.type.split('/')[1] || 'jpg';

                downloadLink.download = `nexus_gallery_${cleanTitle}_${image.id}.${fileExtension}`;
                downloadLink.setAttribute('download', downloadLink.download);

                // Trigger download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                // Clean up object URL
                setTimeout(() => URL.revokeObjectURL(blobUrl), 100);

                // Show success state
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.color = '#4CAF50';

                // Show notification
                showDownloadNotification(image.title);

            } catch (error) {
                console.error('Download failed:', error);

                // Show error state
                this.innerHTML = '<i class="fas fa-exclamation"></i>';
                this.style.color = '#ff4757';

                // Show error message
                showDownloadError(image.title);

                // Fallback to basic download method
                setTimeout(() => {
                    const fallbackLink = document.createElement('a');
                    fallbackLink.href = image.src;
                    fallbackLink.download = `image_${image.id}.jpg`;
                    document.body.appendChild(fallbackLink);
                    fallbackLink.click();
                    document.body.removeChild(fallbackLink);
                }, 500);
            } finally {
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.color = originalColor;
                    this.style.backgroundColor = originalBg;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
    updatePagination();
}

// Helper functions for notifications
function showDownloadNotification(imageTitle) {
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Downloading: ${imageTitle}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(25, 25, 40, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(138, 43, 226, 0.3);
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

function showDownloadError(imageTitle) {
    const error = document.createElement('div');
    error.className = 'download-error';
    error.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>Failed to download: ${imageTitle}</span>
    `;

    error.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(255, 71, 87, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 71, 87, 0.3);
        color: #ff4757;
        padding: 15px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;

    document.body.appendChild(error);

    setTimeout(() => {
        error.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(error), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .download-notification i {
        color: #4CAF50;
    }
    
    .download-error i {
        color: #ff4757;
    }
`;
document.head.appendChild(style);

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

    // Update page numbers
    pageNumbers.innerHTML = '';

    // Always show first page
    addPageNumber(1);

    // Show ellipsis if needed
    if (currentPage > 3) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.style.padding = '0 5px';
        pageNumbers.appendChild(ellipsis);
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        addPageNumber(i);
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.style.padding = '0 5px';
        pageNumbers.appendChild(ellipsis);
    }

    // Always show last page if there's more than 1 page
    if (totalPages > 1) {
        addPageNumber(totalPages);
    }

    // Update button states
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    // Update active page number
    document.querySelectorAll('.page-number').forEach(btn => {
        if (parseInt(btn.textContent) === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Helper function to add page number button
function addPageNumber(page) {
    const pageBtn = document.createElement('div');
    pageBtn.className = 'page-number';
    pageBtn.textContent = page;
    pageBtn.addEventListener('click', () => {
        currentPage = page;
        renderGallery();
    });
    pageNumbers.appendChild(pageBtn);
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update active filter
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Get filter value
            currentFilter = this.getAttribute('data-filter');

            // Filter images
            if (currentFilter === 'all') {
                filteredImages = [...images];
            } else {
                filteredImages = images.filter(image => image.category === currentFilter);
            }

            // Reset to first page
            currentPage = 1;
            renderGallery();
        });
    });

    // Lightbox controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Page navigation
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderGallery();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderGallery();
        }
    });

    // Close lightbox when clicking outside
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show previous image in lightbox
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightbox();
}

// Show next image in lightbox
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightbox();
}

// Update lightbox content
function updateLightbox() {
    const image = filteredImages[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.title;
    lightboxTitle.textContent = image.title;
    lightboxDesc.textContent = image.description;
    lightboxCategory.textContent = image.category.charAt(0).toUpperCase() + image.category.slice(1);
    lightboxDate.textContent = image.date;
    lightboxSize.textContent = image.size;
}

// Initialize the gallery when page loads
document.addEventListener('DOMContentLoaded', initializeGallery);
