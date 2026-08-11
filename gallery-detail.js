(function () {
  const params = new URLSearchParams(window.location.search);
  const item = params.get('item');
  const map = {
    'golden-hour-wedding': {
      title: 'Golden Hour Wedding',
      desc: 'Romantic seaside ceremony coverage captured at sunset.',
      images: [
        'jerimic images/Golden Hour Wedding/IMGL3873.jpg.webp',
        'jerimic images/Golden Hour Wedding/IMGL3729.jpg.webp',
        'jerimic images/Golden Hour Wedding/IMGL3744.jpg.webp',
        'jerimic images/Golden Hour Wedding/IMGL3856.jpg.webp',
        'jerimic images/Golden Hour Wedding/IMGL3890.jpg.webp',
        'jerimic images/Golden Hour Wedding/IMGL3897.jpg.webp',
      ],
    },
    'editorial-fashion': {
      title: 'Editorial Fashion',
      desc: 'High-fashion editorial shoots capturing artistic vision.',
      images: [
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_1.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_2.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_3.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_4.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_5.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_6.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_7.webp',
        'jerimic images/Editorial Fashion/jerimicstudio__2026-02-24T071102.000Z_8.webp',
        'jerimic images/Editorial Fashion/welientertainment__2026-02-15T131505.000Z.webp',
        'jerimic images/Editorial Fashion/wurraola__2025-10-28T143240.000Z.webp',
        'jerimic images/Editorial Fashion/wurraola__2025-10-28T143240.000Z_1.webp',
        'jerimic images/Editorial Fashion/wurraola__2025-10-28T143240.000Z_2.webp',
        'jerimic images/Editorial Fashion/wurraola__2025-10-28T143240.000Z_3.webp',
        'jerimic images/Editorial Fashion/wurraola__2025-10-28T143240.000Z_4.webp',
        'jerimic images/Editorial Fashion/8M7A1140-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1029-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1043-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1048-Edit-2.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1910-Edit.jpg (3).webp',
        'jerimic images/Editorial Fashion/IMGL1921-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1922-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1926-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1927-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1934-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1944-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1945-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1952-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1984-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1993-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL1995-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2000-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2022-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2026-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2028-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2040-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2049-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2055-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2058-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2064-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2071-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2077-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2078-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2079-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2080-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2081-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2087-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2090-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2091-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2092-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2102-Edit.jpg.webp',
        'jerimic images/Editorial Fashion/IMGL2111-Edit.jpg.webp',
      ],
    },
    'studio-portrait': {
      title: 'Studio Portrait',
      desc: 'Warm light and expressive character study.',
      images: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80',
      ],
    },
    'luxury-celebration': {
      title: 'Luxury Celebration',
      desc: 'Fine art details and celebration moments.',
      images: [
        'jerimic images/Luxury Celebration/jerimicstudio__2026-03-07T183338.000Z_2.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-03-07T183338.000Z_1.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-03-07T183338.000Z_2.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_1.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_10.webp',

        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_11.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_12.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_13.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_14.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_15.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_16.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_17.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_18.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_2.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_3.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_4.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_5.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_6.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_7.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_8.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-04T053150.000Z_9.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_1.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_10.jpg',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_11.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_12.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_13.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_2.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_3.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_4.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_5.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_6.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_7.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_8.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_9.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_10.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_11.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_12.webp',
        'jerimic images/Luxury Celebration/jerimicstudio__2026-04-19T055546.000Z_13.webp',
      ],
    },
    'campaign-visuals': {
      title: 'Campaign Visuals',
      desc: 'Minimal aesthetic for contemporary brand campaigns.',
      images: [
        'jerimic images/Campaign Visuals/jerimicstudio__2025-11-26T171607.000Z.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-04-25T060847.000Z.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-04-25T060847.000Z_1.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-04-25T060847.000Z_2.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-04-25T060847.000Z_3.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z_1.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z_2.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z_3.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z_4.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z_5.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z_6.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-05-23T024949.000Z_7.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-07-11T072933.000Z.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-07-11T072933.000Z_1.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-07-11T072933.000Z_5.webp',
        'jerimic images/Campaign Visuals/jerimicstudio__2026-07-11T072933.000Z_6.webp',
      ],
    },
    'student-picture': {
      title: 'Student Picture',
      desc: 'Student portrait collection.',
      images: [
        'jerimic images/Student Picture/jerimicstudio__2026-06-04T145110.000Z(1).webp',
        'jerimic images/Student Picture/jerimicstudio__2026-06-04T145110.000Z.webp',
      ],
    },
    'natural-connection': {
      title: 'Natural Connection',
      desc: 'Authentic moments captured with calm direction.',
      images: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=80',
      ],
    },
  };

  const target = map[item] || {
    title: 'Gallery Item',
    desc: 'Selected work from Jerimic Studio.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
    ],
  };

  document.getElementById('detail-title').textContent = target.title;
  document.getElementById('detail-desc').textContent = target.desc;

  const gallery = document.getElementById('gallery-grid');
  const heroImage = document.getElementById('detail-image');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeButton = lightbox?.querySelector('.lightbox-close');
  const uniqueImages = Array.from(new Set(target.images));

  if (gallery) {
    const gridImages = uniqueImages.slice(1);
    gallery.innerHTML = gridImages
      .map((src, index) => {
        return `
          <figure class="grid-card" data-src="${src}">
            <img src="${src}" alt="${target.title} image ${index + 2}" />
          </figure>
        `;
      })
      .join('');
  }

  if (heroImage && uniqueImages.length) {
    heroImage.src = uniqueImages[0];
  }

  const openLightbox = (src) => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = src;
    lightbox.hidden = false;
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImage.src = '';
  };

  gallery?.querySelectorAll('.grid-card').forEach((card) => {
    card.addEventListener('click', () =>
      openLightbox(card.getAttribute('data-src')),
    );
  });

  closeButton?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox?.hidden) {
      closeLightbox();
    }
  });
})();
