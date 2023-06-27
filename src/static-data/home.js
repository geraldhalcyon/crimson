const homeData = {
    title: 'Home',
    slug: '/',
    blocks: [
        {
            blockType: 'video_banner',
            title: 'ALABANG. IN A HEARTBEAT',
            video: 'https://sunishsadasivan.hippovideo.io/video/embed/LDkuGaDtcqQja1LrnZ12p9bpm1rlm_xzovd-KwfzXD0?org_tok=EkftNVDFrILIkMQrfCy1vQ&autoplay=true&loop=true&controls=false',
            image: {
                path:'/video-poster.webp',
                width: 1200,
                height: 644,
                alt: 'a chef serving a food to a customer',
            },
        },
        {
            blockType: 'home_about',
            image: {
                path:'/Block_Riding-Together-is-Better-x-large.webp',
                width: 800,
                height: 533,
                alt: 'a group of people smiling',
            },
            description: "<p>Crimson Hotel Filinvest City, Manila is a five-star hotel located in one of the metro’s modern central business districts and premier lifestyle destinations in southern Manila. With its contemporary guestrooms, first-rate amenities, delightful dining options, and heartfelt hospitality combined with a cosmopolitan vibe, it offers a charming staycation experience to both business travelers and leisure guests.</p><br><p>A mere 10km away from the Ninoy Aquino International Airport (NAIA), the hotel sits in a highly convenient location where it can be easily accessed via Skyway or South Luzon Expressway (SLEX).</p><br><p>Crimson Hotel Filinvest City, Manila was certified by the Department of Tourism and recognized by World Travel & Tourism Council for being compliant with the health and hygiene standard protocols.</p>",
            reviews: {
                topDescription:{
                    rating1: '4.1',
                    rating2: '/5',
                    details: 'Very good',
                    percent: 'TOP 6% of Hotels in Muntinlupa',
                    link: 'Based on 2953 reviews',
                },
                modtitle1:'Reviews Summary',
                modtitle2: 'Reviews by sources',
                modtitle3: 'What kind of trip are you planning?',
                wb1:{
                    title: 'TripAdvisor',
                    rating: '4.5/5',
                    numReviews: '2,818 Reviews',
                },
                wb2:{
                    title: 'Booking.com',
                    rating: '8.2/10',
                    numReviews: '903 Reviews',
                },
                wb3:{
                    title: 'Hotels.com',
                    rating: '8.2/10',
                    numReviews: '1,053 Reviews',
                },
                wb4:{
                    title: 'Expedia',
                    rating: '4.1/5',
                    numReviews: '997 Reviews',
                },
                categories: [
                    {
                        name: 'Family',
                        title: '"Nice one and affordable!!"',
                        description:"<p>Claire and I decided to have our Christmas break with the kids in Manila this time so we went for Crimson Alabang. Happy? Yes. Good value for the money? Yes also. Friendly staff? Yes! Nothing to compare with the big brands around the Philippines. Happy that I did not spend thousand more pesos in Shangri-la and I went for this...</p>",
                        belowDescription: 'From TripAdvisor',
            
                    },
                    {
                        name: 'Business',
                        title: '"Extremely Friendly and Helpful Staff"',
                        description:"<p>I had to stay here for mandatory quarantine and had no problems. The staff was extremely friendly and helpful. The internet was fast although you can only connect 2 devices at a time if you're only using the free wifi. My room on the 22nd floor had a nice view too.</p>",
                        belowDescription: 'From TripAdvisor',
                    },
                    {
                        name: 'Friends',
                        title: '"comfortable even in a mandatory quarantine"',
                        description:"<p>Very patient and helpful. from the front desk staff to cleaners. All pleasant.</p>",
                        belowDescription: 'From Booking.com',
                    },
                    {
                        name: 'Couple',
                        title: '"Exceptional"',
                        description:"<p>Checked in on my husbands birthday. The hotel surprisingly upgraded my room reservation from deluxe to executive room. They even prepared a simple balloon bouquet and cake. Breakfast buffet is good and the staffs are all accomadating. We really had a great time</p>",
                        belowDescription: 'From Booking.com',
                    },
                ],

            }
        },
        {
            blockType: 'home_services',
            slider: [
                {
                    title: 'LOCAL ADVANTAGE',
                    description: '<p>Your ultimate staycations awaits in the South of Manila. Crimson Hotel Filinvest City Manila is offering specials rate for Local Residents using promo code <b>"Local"</b></p>',
                    link: 'Read More',
                    path: '/',
                    image: {
                        path: '/Swimming-Pool-home-x-large.webp',
                        width: 800,
                        height: 533,
                        alt: 'swimming pool',
                    }
                },
                {
                    title: 'Your Dream Vecation Awaits!',
                    link: 'Read More',
                    path: '/',
                    image: {
                        path: '/Crimson---Flexible-Re-booking-Promo_studies2-02-(2)-home-x-large.webp',
                        width: 800,
                        height: 533,
                        alt: 'Worry-free Bookings',
                    }
                },
            ],
            
            servicesDetails1: {
                title: 'Your dream Vacation',
                link: 'Read More',
                description: '<p>Crimson Hotel Filinvest City, Manila was certified by the Department of Tourism and recognized by World Travel & Tourism Council for being compliant with the health and hygiene standard protocols.</p>',
                path: '/offers',
                image: {
                    path: '/Crimson---Flexible-Re-booking-Promo_studies2-02-(2)-home-x-large.webp',
                    width: 800,
                    height: 533,
                    alt: 'Worry-free Bookings',
                }
            },
        
            servicesDetails2:[
                {
                    title: 'Our Guestrooms offer comfort, familiarity and homeliness',
                    link: 'Booking',
                    path: 'https://www.simplebooking.it/ibe/search?hid=3066&lang=EN&tt_claim_key=claim%3A6f430a1fdeb02310959f497578e3ff0297cd60e40763eb87d5718bad9f4e5929%3Aundefined%3A1687150895565',
                    image: {
                        path: '/banner_premierclub_scswff_c_scale_w_1833.webp',
                        width: 1200,
                        height: 800,
                        alt: 'OUR GUESTROOMS OFFER COMFORT, FAMILIARITY AND HOMELINESS',
                    },
                },
                {
                    title: 'Contemporary cuisine with focus on fresh & healthy',
                    path:'',
                    image: {
                        path: '/manila-home-layer-3-b_eswttv_c_scale_w_1833.webp',
                        width: 1200,
                        height: 800,
                        alt: 'CONTEMPORARY CUISINE WITH FOCUS ON FRESH &amp; HEALTHY',
                    }
                },
                {
                    title: 'Meetings, Seminars, Conventions, Debuts, or Weedings at Crimson',
                    link: 'Request for a quote now',
                    path: '/events-meetings',
                    image: {
                        path: '/manila-home-layer-4-a_okqccz_c_scale_w_1833.webp',
                        width: 1200,
                        height: 800,
                        alt: 'MEETINGS, SEMINARS, CONVENTIONS, DEBUTS, OR WEDDINGS AT CRIMSON',
                    }
                }
            ],

        },
        {
            blockType: 'non_home_about',
            title: 'About Us',
            slug: '/',
            image:{
                path:'/about-us.webp',
                width:1200,
                height:720,
                alt:'Manila About Us Page Slider',
            },
            descriptionTop:'<p>Offering breathtaking design and stunning views over Alabang, Crimson Hotel Filinvest City, Manila stands as an iconic architectural marvel in Southern Manila. Opt for a City View room to enjoy breathtaking vistas of the gorgeous skyline. If you can turn your eyes away from the window, head down to sample outbursts of Mediterranean fare at Café Eight and share romantic after-dinner cocktails at the Lobby Lounge. Looking for the perfect spot to unwind? The photogenic poolside is bedecked with luxurious Dedon nest chairs and plush loungers that set the tone for a relaxing retreat. Every element is richly-designed and continues to innovate, as the hotel continuously elevates its facilities to enrich your stay.</p>',
            descriptionMid:'<p>Come and experience the refreshing enhancements that we’ve done today. Imagine peering palm trees lining the thoroughfares, picture-perfect sundowners and a view of the glitzy skyscrapers above Southern Manila. Before you know it, you too will be under its spell. Alabang is known as a flourishing city that is not as crowded as its neighbors in the greater Metro Manila. Crimson Hotel Filinvest City, Manila perfectly sits just by the border of Skyway, easily accessible to major roads, yet delivers a graceful urban oasis for your refuge from the daily grind. The hotel’s location in the heart of Alabang positions you just steps away from trendy shopping malls, dining options and plenty of exciting activities to discover.</p>',
            descriptionBtm:'<p>Show-stopping piece Strikingly Filipino yet inspired by the global art scene, stop and stare at Crimson’s treasure trove of perfectly-crafted Filipino artworks spread across the gallery, public spaces and function rooms of the hotel. Dressed to the nines Elegant, bold and stylish -- each Crimson host reverberates the core of our service with couture ensembles designed by the Philippines’ most celebrated fashion designer – Mr. Francis Libiran.</p>',
            image1:{
                path:'/aboutimg_01-x-large.webp',
                width:800,
                height:533,
                alt:'a man and woman in the hallway',
            },
            image2:{
                path:'/aboutimg_02-x-large.webp',
                width:800,
                height:533,
                alt:'bedroom',
            },
            image3:{
                path:'/aboutimg_03-x-large.webp',
                width:800,
                height:533,
                alt:'a flower and painting in the hallway',
            },
            image4:{
                path:'/aboutimg_04-x-large.webp',
                width:800,
                height:533,
                alt:'occasion',
            },
            btn:'Book Now',
        },
    ],
}

export default homeData; 