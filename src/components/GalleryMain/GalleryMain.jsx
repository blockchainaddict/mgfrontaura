import { useState, useEffect } from "react";
import "./GalleryMain.scss";
import { photosArr } from "../../data/photosArr";

function GalleryMain() {
  const [travelPhotos, setTravelPhotos] = useState([]);
  const [portraitPhotos, setPortraitPhotos] = useState([]);
  const [naturePhotos, setNaturePhotos] = useState([]);
  const [productsPhotos, setProductsPhotos] = useState([]);
  const [activeTab, setActiveTab] = useState('travel'); // Default tab is travel

  // Initialize photo sections on component mount
  useEffect(() => {
    // Get newly added photos (IDs from 9853-9859)
    const newlyAddedPhotos = photosArr.filter(photo => 
      photo.id >= 9853 && photo.id <= 9859
    );
    
    // Get photos with portrait tag
    const portraitTaggedPhotos = photosArr.filter(photo => 
      photo.tags.includes('portrait')
    );
    
    // Find women portraits by ID (assuming IDs of portraits of women that need to be moved)
    const womenPortraitIds = [1052, 1053, 1370, 1414, 1436, 1567, 1580, 9858];
    
    // Combine all portrait photos
    const allPortraits = [...new Set([
      ...portraitTaggedPhotos.map(photo => photo.id),
      ...womenPortraitIds,
      ...newlyAddedPhotos.map(photo => photo.id)
    ])];
    
    // Set portraits as all photos that are in the allPortraits array
    const portraits = photosArr.filter(photo => 
      allPortraits.includes(photo.id)
    );
    
    // Set travel as photos that aren't portraits and have travel-related tags
    const travel = photosArr.filter(photo => 
      !allPortraits.includes(photo.id) &&
      photo.tags.some(tag => ['cities', 'landscape', 'architecture'].includes(tag))
    );
    
    // Set nature as photos that are neither portraits nor travel but have nature tags
    const nature = photosArr.filter(photo => 
      !allPortraits.includes(photo.id) &&
      !photo.tags.some(tag => ['cities', 'landscape', 'architecture'].includes(tag)) &&
      photo.tags.some(tag => ['nature', 'animals', 'flowers'].includes(tag))
    );
    
    // Products section starts empty - will be populated later
    const products = [];
    
    setTravelPhotos(travel);
    setPortraitPhotos(portraits);
    setNaturePhotos(nature);
    setProductsPhotos(products);
  }, []);

  // Handler for tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Helper function to render photo items
  const renderPhotoItems = (photos) => {
    return photos.map((item, i) => (
      <img
        className="gallery-img"
        src={`img/${item.id}.jpg`}
        alt="img"
        key={i}
        loading="lazy"
      />
    ));
  };

  // Helper function to render empty state for Products
  const renderEmptyProducts = () => {
    return (
      <div className="empty-section">
        <h3>Coming Soon</h3>
        <p>Product photography will be available here soon.</p>
      </div>
    );
  };

  return (
    <div className="gallery-main-wrapper">
      <h2>Gallery</h2>

      <div className="gallery-tabs">
        <div 
          className={`tab ${activeTab === 'travel' ? 'active' : ''}`}
          onClick={() => handleTabClick('travel')}
        >
          Travel
        </div>
        <div 
          className={`tab ${activeTab === 'portraits' ? 'active' : ''}`}
          onClick={() => handleTabClick('portraits')}
        >
          Portraits
        </div>
        <div 
          className={`tab ${activeTab === 'nature' ? 'active' : ''}`}
          onClick={() => handleTabClick('nature')}
        >
          Nature
        </div>
        <div 
          className={`tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => handleTabClick('products')}
        >
          Products
        </div>
      </div>

      <div className="gallery-tab-content">
        {activeTab === 'travel' && (
          <div className="gallery-container">
            {renderPhotoItems(travelPhotos)}
          </div>
        )}
        
        {activeTab === 'portraits' && (
          <div className="gallery-container">
            {renderPhotoItems(portraitPhotos)}
          </div>
        )}
        
        {activeTab === 'nature' && (
          <div className="gallery-container">
            {renderPhotoItems(naturePhotos)}
          </div>
        )}
        
        {activeTab === 'products' && (
          <div className="gallery-container">
            {productsPhotos.length > 0 ? renderPhotoItems(productsPhotos) : renderEmptyProducts()}
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryMain;
