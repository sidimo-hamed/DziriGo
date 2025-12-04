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
                    open: true,
                    image: "/images/5.jpg",
                    area: "بومزو"
                },
                 {
                    id: 5,
                    name: "مطعم سينية الباي",
                    category: "restaurants",
                    location: " فيلالي حي قاضي بوبكر عمارة 'س'",
                    rating: 4.3,
                    price: 1000,
                    phone: "0776050404",
                    hours: "12:00 - 22:00",
                    open: false,
                    image: "/images/6.jpg",
                    area: "بومزو"
                }
            ],
            malls: [
                {
                    id: 6,
                    name: "Ritaj mall",
                    category: "malls",
                    location: "UV2 بالمدينة الجديدة علي منجلي",
                    rating: 4.4,
                    price: 0,
                    phone: "0560156704",
                    hours: "09:00 - 21:00",
                    open: true,
                    image: "/images/7.jpg",
                    area: "وسط المدينة"
                },
                {
                    id: 7,
                    name: "yes mall",
                    category: "malls",
                    location: "UV02، Lot N°06، المدينة الجديدة علي منجلي، قسنطينة",
                    rating: 3.8,
                    price: 0,
                    phone: "+213 30 34 59 59",
                    hours: "08:00 - 18:00",
                    open: true,
                    image: "/images/8.jpg",
                    area: "زواغي"
                }, {
                    id: 8,
                    name: "zahra mall",
                    category: "malls",
                    location: "حي 1600 مسكن، الخروب، قسنطينة",
                    rating: 4.4,
                    price: 0,
                    phone: "0560156704",
                    hours: "09:00 - 21:00",
                    open: true,
                    image: "/images/9.jpg",
                    area: "وسط المدينة"
                }
            ],
            transport: [
                {
                    id: 9,
                    name: "محطة الترامواي - وسط المدينة",
                    category: "transport",
                    location: "   قسنطينة",
                    rating: 3.0,
                    price: 50,
                    phone: "031 92 00 00",
                    hours: "05:30 - 22:00",
                    open: true,
                    image: "/images/tram.jpg",
                    area: "وسط المدينة"
                },
                {
                    id: 9,
                    name: "سيارات خاصة مع او بدون  سائق vip",
                    category: "transport",
                    location: "  ",
                    rating: 5,
                    price: 100,
                    phone: "031 93 11 22",
                    hours: "05:00 - 20:00",
                    open: true,
                    image: "/images/car-vip.webp",
                    area: "وسط المدينة"
                },
                     {
                    id: 9,
                    name: "سيارات الأجرة (Taxi)",
                    category: "transport",
                    location: "  ",
                    rating: 3.5,
                    price: 100,
                    phone: "031 93 11 22",
                    hours: "05:00 - 20:00",
                    open: true,
                    image: "/images/taxi.webp",
                    area: "وسط المدينة"
                }
            ],
            tourism: [
                {
                    id: 10,
                    name: "   ",
                    category: "tourism",
                    location: "منطقة علي منجلي، التوسعة UV 14، بلدية الخروب، ولاية قسنطينة",
                    rating: 5.0,
                    price: 1000,
                    phone: "+213 31 52 39 65",
                    hours: "طوال اليوم",
                    open: true,
                    image: "/images/16.jpg",
                    area: "وسط المدينة"
                },
                {
                    id: 11,
                    name: "جسر صالح باي",
                    category: "tourism",
                    location: " ",
                    rating: 4.7,
                    price: 200,
                    phone: "031 94 55 66",
                    hours: "09:00 - 17:00",
                    open: true,
                    image: "/images/saleh.webp",
                    area: "وسط المدينة"
                }
                ,
                {
                    id: 11,
                    name: "monument aux morts",
                    category: "tourism",
                    location: " ",
                    rating: 4.7,
                    price: 200,
                    phone: "031 94 55 66",
                    hours: "09:00 - 17:00",
                    open: true,
                    image: "/images/18.jpg",
                    area: "وسط المدينة"
                }
            ],
            services: [
                {
                    id: 12,
                    name: "belhoula tourisme et voyage",
                    category: "services",
                    location: "  قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "039291410",
                    hours: "24/7",
                    open: true,
                    image: "/images/13.jpg",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "laya travel",
                    category: "services",
                    location: "hôtel Hocine uv 7 lot 17/18 ali mendjeli",
                    rating: 4.1,
                    price: 0,
                    phone: "0561802458",
                    hours: "24/7",
                    open: true,
                    image: "/images/14.jpg",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "Numedia Travel",
                    category: "services",
                    location: "شارع سي عبد الله بوهروم، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031873686",
                    hours: "24/7",
                    open: true,
                    image: "/images/15.jpg",
                    area: "بلدية ابن باديس"
                }
            ],
            bligthbkings: [
                {
                    id: 12,
                    name: "Air Algerie",
                    category: "bligthbkings",
                    location: "38 شارع عبان رمضان، قسنطينة 25000",
                    rating: 4.1,
                    price: 0,
                    phone: "3302",
                    hours: "24/7",
                    open: true,
                    image: "/images/air-algerie.png",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "Tassili Airlines",
                    category: "bligthbkings",
                    location: "40 شارع بوبارتاخ، قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "21331920246",
                    hours: "24/7",
                    open: true,
                    image: "/images/Tassili_Airlines_logo.png",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "Turkish Airlines",
                    category: "bligthbkings",
                    location: "69، شارع عواطي مصطفى",
                    rating: 4.1,
                    price: 0,
                    phone: "+213 554 865 062",
                    hours: "24/7",
                    open: true,
                    image: "/images/TurkishAirlines_logo.jpg",
                    area: "بلدية ابن باديس"
                }
            ],
            gamescities: [
                {
                    id: 12,
                    name: "Aqua park amira land",
                    category: "gamescities",
                    location: "منطقة علي منجلي، التوسعة UV 14، بلدية الخروب، ولاية قسنطينة",
                    rating: 4.1,
                    price: 2500,
                    phone: "+213 31 52 39 65",
                    hours: "24/7",
                    open: true,
                    image: "/images/10.jpg",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "Snawber lend ",
                    category: "gamescities",
                    location: "حي  الواحد بوهالي العيد، وسط مدينة الخروب، ولاية قسنطينة",
                    rating: 4.1,
                    price: 0,
                    phone: "031 93 88 77",
                    hours: "24/7",
                    open: true,
                    image: "/images/11.jpg",
                    area: "بلدية ابن باديس"
                },
                 {
                    id: 12,
                    name: "Complexe l'étoile de l'est ",
                    category: "gamescities",
                    location: "  ",
                    rating: 4.1,
                    price: 0,
                    phone: "0560276201",
                    hours: "24/7",
                    open: true,
                    image: "/images/12.jpg",
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
                services: '<i class="fas fa-"></i> وكالات سياحة وأسفار في قسنطينة',
                bligthbkings: '<i class="fas fa"></i> حجز طيران في قسنطينة',
                gamescities: '<i class="fas fa"></i>  مدن الألعاب والترفيه في قسنطينة'
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

        function call(){
            alert("خدمة الاتصال غير متاحة! ");
        }