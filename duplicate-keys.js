const fs = require('fs');
const path = require('path');

const zhContent = require('./src/messages/zh.json');
const enContent = require('./src/messages/en.json');

const duplicateKeys = (obj) => {
  const newObj = { ...obj };
  
  // Duplicate keys with "corbu" prefix
  newObj.corbuMeta = obj.meta;
  newObj.corbuHero = obj.hero;
  newObj.corbuIntro = obj.intro;
  newObj.corbuBasicInfo = obj.basicInfo;
  newObj.corbuHours = obj.hours;
  newObj.corbuTickets = obj.tickets;
  newObj.corbuTransport = obj.transport;
  newObj.corbuKnowledge = obj.knowledge;
  newObj.corbuRoute = obj.route;
  newObj.corbuPhotoSpots = obj.photoSpots;
  newObj.corbuHotels = obj.hotels;
  newObj.corbuGallery = obj.gallery;
  newObj.corbuReviews = obj.reviews;
  newObj.corbuMap = obj.mapSection;
  newObj.corbuFooter = obj.corbuFooter || obj.footer;
  newObj.officialManagement = obj.officialManagement;
  newObj.corbuRecommendations = {
    title: "探索更多",
    attractionsTitle: "附近景点",
    toursTitle: "推荐行程与活动",
    attractions: [],
    tours: []
  };

  return newObj;
};

fs.writeFileSync(path.join(__dirname, 'src/messages/zh.json'), JSON.stringify(duplicateKeys(zhContent), null, 2));
fs.writeFileSync(path.join(__dirname, 'src/messages/en.json'), JSON.stringify(duplicateKeys(enContent), null, 2));
