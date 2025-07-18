export const destinations = [
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1709623868300-e3b78cad10e1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDesc: 'The land of Gods and Himalayan Serenity',
    activities: [
      {
        id: 'nainital_almora_kausani_chakori',
        name: 'Nainital to Almora to Kausani to Chakori (Bageshwar, Baijnath)',
        imageUrl: "https://t.eucdn.in/tourism/lg/baijnath-1211338.webp",
        selected: false
      },
      {
        id: 'naukuchiatal_binsar_mukteshwar',
        name: 'Naukuchiatal to Binsar to Mukteshwar to Munsiari to Ranikhet',
        imageUrl: 'https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/07/Naukuchiatal-1200x900-1.jpg',
        selected: false
      },
      {
        id: 'darma_valley',
        name: 'Dharchura, Darma Valley and Nainital',
        imageUrl: 'https://2.bp.blogspot.com/-rngKuIcReB4/WnbeVFUrVCI/AAAAAAAA6eI/TAcWVnHONScpXkdFUumqq2LdS6IBbfIxwCKgBGAs/s1600/IMG_20170517_082706242_HDR.jpg',
        selected: false
      },
      {
        id: 'amritsar',
        name: 'Amritsar Golden Temple',
        imageUrl: 'https://www.whyweseek.com/wp-content/uploads/2018/03/Golden-Temple-at-Night-Amritsar-1024x683.jpg',
        selected: false
      },
      {
        id: 'chopta',
        name: 'Chopta - Tungnath - Chandrashila',
        imageUrl: 'https://thetravelboat.com/wp-content/uploads/2022/12/Chopta-Tungnath-Trek-Tour-from-Rishikesh.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Homestay'
    ],
    metadata: {
      region: 'North India',
      popular: true,
      idealFor: ['trekking', 'culture']
    }
  },
  {
    id: 'kerala',
    name: 'Kerala',
    imageUrl: 'https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/kerela_1_base.jpg',
    shortDesc:"Land of backwaters and tranquility",
    activities: [
      {
        id: 'thiruvanthapuram',
        name: 'Thiruvanthapuram tour',
        imageUrl: 'https://www.treebo.com/blog/wp-content/uploads/2017/12/Places-to-visit-in-Thiruvananthapuram_1.jpg',
        selected: false
      },
      {
        id: 'allepey_and_kumarkom_house_boat_tour',
        name: 'Allepey and KumarKom House Boat tour',
        imageUrl: 'https://c.myholidays.com/packages/fc2ec97c-35a7-4e78-852d-bcd78502935f/original/6694ff06-747e-4c65-8f39-2bcd41513f3f.webp',
        selected: false
      },
      {
        id: 'munnar',
        name: 'Munnar',
        imageUrl: 'https://escapeartistkatie.com/wp-content/uploads/2022/05/Munnar.jpg',
        selected: false
      },
      {
        id: 'Thekaddy_and_Periyar',
        name: 'Thekaddy & Periyar ',
        imageUrl: 'https://www.xandari.com/images/resorts/cardamomcounty/tiger-at-the-periyar-tiger-reserve.jpg',
        selected: false
      },
      {
        id: 'kochi',
        name: 'Kochi',
        imageUrl: 'https://casualwalker.com/wp-content/uploads/2019/04/Kochi_Cochin_Kerala_Trip00221-1024x683.jpg',
        selected: false
      },
      {
        id: 'wayanad',
        name: 'Wayanad Village Tour',
        imageUrl: 'http://wayanady.com/wp-content/uploads/2018/11/banasura2.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Airbnb'
    ],
    metadata: {
      region: 'Southern India',
      popular: true,
      idealFor: ['romance', 'photography']
    }
  },

  {
    id: 'rajasthan',
    name: 'Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDesc: 'Land of Kings, deserts, and palaces',
    activities: [
      {
        id: 'jaipur',
        name: 'Jaipur',
        imageUrl: 'https://images.unsplash.com/photo-1524229648276-e66561fe45a9?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        selected: false
      },
      {
        id: 'bikaner',
        name: 'Bikaner',
        imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.bOvM5sgmgvux95sz-9GvjQHaE8?pid=Api&P=0&h=180',
        selected: false
      },
      {
        id: 'jaisalmer',
        name: 'Jaisalmer',
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/Day08_Jaisalmer_GrandIndiaTour_01_compressed_20180226142515.jpg',
        selected: false
      },
      {
        id: 'jodhpur',
        name: 'Jodhpur',
        imageUrl: 'https://www.tripsavvy.com/thmb/drguWn0Ts2sgcaC4nzkvmg_qCVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-487516963-4ec40bee52fd45f3b1bd57d37a147c89.jpg',
        selected: false
      },
      {
        id: 'udaypur',
        name: 'Udaypur',
        imageUrl: 'https://cdn.audleytravel.com/-/-/79/181024176050033208125049055046212110057015060127.jpg',
        selected: false
      },
      {
        id: 'mount_abu',
        name: 'Mount Abu',
        imageUrl: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/Toad%20Rock%20View%20Point.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Airbnb'
    ],
    metadata: {
      region: 'West India',
      popular: true,
      idealFor: ['history', 'heritage']
    }
  },

  {
    id: 'maharashtra',
    name: 'Maharashtra',
    imageUrl: 'https://www.alliedcarrentals.com/wp-content/uploads/2019/08/Gateway-of-India.jpg',
    shortDesc: 'Manhattan of India',
    activities: [
      {
        id: 'lonavla',
        name: 'Lonavla and Khandala',
        imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/lonavaladestimgs/mmt/activities/m_Rajmachi_Fort_Lonavala_1_l_480_640.jpg',
        selected: false
      },
      {
        id: 'ajanta',
        name: 'Ajanta and Ellora Caves',
        imageUrl: 'http://www.journeytoexplore.com/wp-content/uploads/2018/11/1__b_2qpzlNxq9q4Ac0Lxlkg.jpeg',
        selected: false
      },
      {
        id: 'MahaPanch',
        name: 'Mahabaleshwar & Panchghani',
        imageUrl: 'https://www.indianholidaytrip.com/upload/static/images/Mahabaleshwar.jpg',
        selected: false
      },
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Airbnb'
    ],
    metadata: {
      region: 'West India',
      popular: true,
      idealFor: ['history', 'heritage']
    }
  },

  {
    id: 'goa',
    name: 'Goa',
    imageUrl: 'https://goa-tourism.org.in/images/places-to-visit/headers/sinquerim-beach-goa-timings-entry-fee-goa-tourism-header-cr-hrishikesh-sharma.jpg',
    shortDesc: 'Serene Beaches & exciting parties',
    activities: [
      {
        id: 'beach',
        name: 'North Goa Beach Circuit',
        imageUrl: 'https://im.whatshot.in/img/2021/Oct/kalacha-beach-cropped-1634635294.jpg',
        selected: false
      },
      {
        id: 'relax',
        name: 'South Goa Relaxation Tour',
        imageUrl: 'https://awalkintheworld.com/wp-content/uploads/2020/12/palolem-beach-south-goa-1920x1080.jpg',
        selected: false
      },
      {
        id: 'church',
        name: 'Old Goa church and fontainhas tour',
        imageUrl: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/Our-Lady-of-Immaculate-Conception.jpg',
        selected: false
      },
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Airbnb'
    ],
    metadata: {
      region: 'West India',
      popular: true,
      idealFor: ['history', 'heritage']
    }
  },

  {
    id: 'northeast india',
    name: 'North East India',
    imageUrl: 'https://travelogyindia.b-cdn.net/storage/app/upload/northeast-history.jpg',
    shortDesc: 'Find Peace and Tranquility',
    activities: [
      {
        id: 'shillong',
        name: 'Shillong and Cherapunjee',
        imageUrl: 'https://www.kajaawa.com/wp-content/uploads/2022/03/Nohkalikai-Falls-1-kaga.jpg',
        selected: false
      },
      {
        id: 'tawang',
        name: 'Tawang',
        imageUrl: 'https://easternroutes.com/wp-content/uploads/2017/12/Sela_Pass_Gate-Tawang-Arunachal_Pradesh.jpg',
        selected: false
      },
      {
        id: 'kaziranga',
        name: 'Kaziranga National Park in Assam',
        imageUrl: 'https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/kp1--9fc463.jpg',
        selected: false
      },
      {
        id: 'gangtok',
        name: 'Gangtok Tour',
        imageUrl: 'https://www.tusktravel.com/blog/wp-content/uploads/2020/05/The-10-most-popular-tourist-attractions-in-Gangtok.jpg',
        selected: false
      },
      {
        id: 'ziro',
        name: 'Ziro Valley',
        imageUrl: 'https://travellersworldonline.com/wp-content/uploads/2023/06/15-June-Bali-1-1.jpg',
        selected: false
      },
      {
        id: 'majuli',
        name: 'Majuli island Assam',
        imageUrl: 'https://www.meghalayatourcabs.com/wp-content/uploads/2019/05/Majuli-River-Island-Assam-Tourist-Spots.jpg',
        selected: false
      },
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Airbnb'
    ],
    metadata: {
      region: 'West India',
      popular: true,
      idealFor: ['history', 'heritage']
    }
  }
];

// Optional: Helper functions for data access
export const getDestinationById = (id) => 
  destinations.find(dest => dest.id === id);

export const getPopularDestinations = () => 
  destinations.filter(dest => dest.metadata.popular);

export const getDestinationsByRegion = (region) => 
  destinations.filter(dest => dest.metadata.region === region);