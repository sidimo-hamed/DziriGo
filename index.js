 const places = {
            hotels: [
                {
                    id: 1,
                    name: "ماريوت قسنطينة ",
                    category: "hotels",
                    location: "Cité des Arcades Romaines | شارع وادي الرمال",
                    rating: 4.5,
                    price: 26000,
                    phone: "031731000",
                    hours: "24/7",
                    open: true,
                    image: "/images/1.jpg",
                    area: "وسط المدينة"
                },
                {
                    id: 2,
                    name: "فندق الحسين",
                    category: "hotels",
                    location: "Ville Nouvelle UV7 Lot 17/18،قسنطينة ",
                    rating: 4.2,
                    price: 6500,
                    phone: "031 75 00 00",
                    hours: "24/7",
                    open: true,
                    image: "/images/2.jpg",
                    area: "الكدية"
                },
                {
                    id: 3,
                    name: "فندق الباي",
                    category: "hotels",
                    location: " Lot n°101 ghazi onama، الطريق الوطني رقم 3 (طريق باتنة)، قسنطينة",
                    rating: 4.0,
                    price: 7200,
                    phone: "561 92 73 34",
                    hours: "24/7",
                    open: true,
                    image: "/images/3.jpg",
                    area: "وسط المدينة"
                }
            ],
            restaurants: [
                {
                    id: 4,
                    name: "اغرسان",
                    category: "restaurants",
                    location: "58 شارع العربي بن مهيدي. قسنطينة",
                    rating: 4.6,
                    price: 1500,
                    phone: "560906580",
                    hours: "11:00 - 23:00",
                    open: true,
                    image: "/images/4.jpg",
                    area: "وسط المدينة"
                },
                {
                    id: 5,
                    name: "مطعم Apex",
                    category: "restaurants",
                    location: "علي منجلي، الشطر الثاني 171، 25000، قسنطينة، الجزائر",
                    rating: 4.3,
                    price: 1200,
                    phone: " 540 94 97 65",
                    hours: "12:00 - 22:00",
                    open: false,
                    image: "/images/5.jpg",
                    area: "بومزو"
                }
            ],
            malls: [
                {
                    id: 6,
                    name: "مول سانتيا",
                    category: "malls",
                    location: "علي منجلي، قسنطينة",
                    rating: 4.4,
                    price: 0,
                    phone: "031 77 66 55",
                    hours: "09:00 - 21:00",
                    open: true,
                    // image: "",
                    area: "وسط المدينة"
                },
                {
                    id: 7,
                    name: "سوق الجمعة",
                    category: "malls",
                    location: "زواغي، قسنطينة",
                    rating: 3.8,
                    price: 0,
                    phone: "031 88 99 77",
                    hours: "08:00 - 18:00",
                    open: true,
                    // image: "",
                    area: "زواغي"
                }
            ],
            transport: [
                {
                    id: 8,
                    name: "محطة الترامواي - وسط المدينة",
                    category: "transport",
                    location: "ساحة أول نوفمبر، قسنطينة",
                    rating: 4.0,
                    price: 50,
                    phone: "031 92 00 00",
                    hours: "05:30 - 22:00",
                    open: true,
                    // image: "",
                    area: "وسط المدينة"
                },
                {
                    id: 9,
                    name: "محطة الحافلات الرئيسية",
                    category: "transport",
                    location: "كريم بلقاسم، قسنطينة",
                    rating: 3.5,
                    price: 100,
                    phone: "031 93 11 22",
                    hours: "05:00 - 20:00",
                    open: true,
                    // image: "",
                    area: "وسط المدينة"
                }
            ],
            tourism: [
                {
                    id: 10,
                    name: "جسر سيدي مسيد المعلق",
                    category: "tourism",
                    location: "وسط المدينة، قسنطينة",
                    rating: 5.0,
                    price: 0,
                    phone: "-",
                    hours: "طوال اليوم",
                    open: true,
                    // image: "",
                    area: "وسط المدينة"
                },
                {
                    id: 11,
                    name: "قصر الباي أحمد",
                    category: "tourism",
                    location: "القصبة، قسنطينة",
                    rating: 4.7,
                    price: 200,
                    phone: "031 94 55 66",
                    hours: "09:00 - 17:00",
                    open: true,
                    // image: "",
                    area: "وسط المدينة"
                }
            ],
            services: [
                {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "services",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "services",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "services",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                }
            ],
            bligthbkings: [
                {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "bligthbkings",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "bligthbkings",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "bligthbkings",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                }
            ],
            gamescities: [
                {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "gamescities",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "gamescities",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "مستشفى بن باديس الجامعي",
                    category: "gamescities",
                    location: "بن باديس، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    // image: "",
                    area: "بلدية ابن باديس"
                }
            ]
        };

        let currentCategory = 'hotels';
        let currentPlaces = places.hotels;

        function displayPlaces(placesArray) {
            const container = document.getElementById('placesContainer');
            container.innerHTML = '';
            
            placesArray.forEach(place => {
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4';
                
                const priceText = place.price === 0 ? 'مجاني' : `من ${place.price} DA`;
                const phoneText = place.phone === '-' ? 'غير متوفر' : place.phone;
                
                col.innerHTML = `
                    <div class="place-card">
                        <div class="place-img-wrapper">
                            <img src="${place.image}" alt="${place.name}" class="place-img">
                            <div class="rating-badge">
                                <i class="fas fa-star"></i> ${place.rating}
                            </div>
                            <div class="status-badge ${place.open ? '' : 'closed'}">
                                ${place.open ? 'مفتوح الآن' : 'مغلق'}
                            </div>
                        </div>
                        <div class="place-body">
                            <h3 class="place-name">${place.name}</h3>
                            <div class="place-location">
                                <i class="fas fa-map-marker-alt"></i>
                                ${place.location}
                            </div>
                            <div class="place-info">
                                ${place.price > 0 ? `
                                <div class="info-item">
                                    <i class="fas fa-money-bill-wave"></i>
                                    <span>${priceText}</span>
                                </div>
                                ` : ''}
                                <div class="info-item">
                                    <i class="fas fa-clock"></i>
                                    <span>${place.hours}</span>
                                </div>
                                ${place.phone !== '-' ? `
                                <div class="info-item">
                                    <i class="fas fa-phone"></i>
                                    <span>${phoneText}</span>
                                </div>
                                ` : ''}
                            </div>
                            <div class="place-actions">
                                <button class="btn-details" onclick="viewDetails(${place.id})">
                                    <i class="fas fa-info-circle"></i> التفاصيل
                                </button>
                                <button class="btn-location" onclick="viewLocation(${place.id})">
                                    <i class="fas fa-map"></i>
                                </button>
                                ${place.phone !== '-' ? `
                                <button class="btn-call" ">
                                    <i class="fas fa-phone"></i>
                                </button>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(col);
            });

        }


        function viewDetails(placeId) {
            const allPlaces = [...places.hotels, ...places.restaurants, ...places.malls, ...places.transport, ...places.tourism, ...places.services];
            const place = allPlaces.find(p => p.id === placeId);
            alert(`تفاصيل: ${place.name}\n\nالموقع: ${place.location}\nالتقييم: ${place.rating} نجوم\nساعات العمل: ${place.hours}\nالهاتف: ${place.phone}`);
        }

        function viewLocation(placeId) {
            alert(' فتح الموقع على خرائط Google Maps');
              
        }

    

        function switchCategory(category) {
            currentCategory = category;
            currentPlaces = places[category];
            
            
            const titles = {
                hotels: '<i class="fas fa-hotel"></i> الفنادق في قسنطينة',
                restaurants: '<i class="fas fa-utensils"></i> المطاعم في قسنطينة',
                malls: '<i class="fas fa-shopping-bag"></i> المولات في قسنطينة',
                transport: '<i class="fas fa-bus"></i> محطات النقل في قسنطينة',
                tourism: '<i class="fas fa-landmark"></i> الأماكن السياحية في قسنطينة',
                services: '<i class="fas fa-hospital"></i> وكالات سياحة وأسفار في قسنطينة',
                bligthbkings: '<i class="fas fa"></i> حجز طيران في قسنطينة',
                gamescities: '<i class="fas fa-landmark"></i>  مدن الألعاب والترفيه في قسنطينة'
            };
            
            document.getElementById('categoryTitle').innerHTML = titles[category];
            
              
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
            });
            document.querySelector(`[data-category="${category}"]`).classList.add('active');
            
            displayPlaces(currentPlaces);
        }

        function filterPlaces() {
            const area = document.getElementById('areaFilter').value;
            const rating = document.getElementById('ratingFilter').value;
            const sort = document.getElementById('sortFilter').value;
            
            let filtered = [...currentPlaces];
            
            if (area !== 'جميع المناطق') {
                filtered = filtered.filter(p => p.area === area);
            }
            

            if (rating === '5 نجوم') {
                filtered = filtered.filter(p => p.rating >= 4.8);
            } else if (rating === '4+ نجوم') {
                filtered = filtered.filter(p => p.rating >= 4.0);
            } else if (rating === '3+ نجوم') {
                filtered = filtered.filter(p => p.rating >= 3.0);
            }

            
            if (sort === 'الأعلى تقييماً') {
                filtered.sort((a, b) => b.rating - a.rating);
            } else if (sort === 'الأقل سعراً') {
                filtered.sort((a, b) => a.price - b.price);
            }
            
            displayPlaces(filtered);
        }

        
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                switchCategory(category);
            });
        });

        document.getElementById('areaFilter').addEventListener('change', filterPlaces);
        document.getElementById('ratingFilter').addEventListener('change', filterPlaces);
        document.getElementById('sortFilter').addEventListener('change', filterPlaces);

        document.getElementById('citySelector').addEventListener('change', function() {
            const city = this.value;
            alert(`سيتم تحميل بيانات ولاية: ${this.options[this.selectedIndex].text}`);
         
        });

        
        document.addEventListener('DOMContentLoaded', () => {
            displayPlaces(currentPlaces);
        });