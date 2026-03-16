import React, { useState } from 'react';
import './AdminPortal.css';
import Hero from './Hero';
import Gallery from './Gallery';

const AdminPortal = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('hero');
  const [pendingUploads, setPendingUploads] = useState([]);

  // 1. HERO STATE
  const [heroImages, setHeroImages] = useState(() => {
    const saved = localStorage.getItem('demoHeroImages');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. GALLERY STATE (This was missing!)
  const [galleryImages, setGalleryImages] = useState(() => {
    const saved = localStorage.getItem('demoGalleryImages');
    return saved ? JSON.parse(saved) : [];
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newUploads = files.map(file => ({
        file,
        previewUrl: URL.createObjectURL(file),
        tempId: Math.random().toString(36).substr(2, 9)
      }));
      setPendingUploads([...pendingUploads, ...newUploads]);
    }
  };

  const removePendingUpload = (tempId) => {
    setPendingUploads(pendingUploads.filter(p => p.tempId !== tempId));
  };

  const handleBulkUpload = (e) => {
    e.preventDefault();
    if (pendingUploads.length === 0) return;

    const newItems = pendingUploads.map(p => ({
      id: Date.now() + Math.random(), 
      url: p.previewUrl 
    }));

    // Save to the correct section based on the active tab
    if (activeTab === 'hero') {
      const updatedHero = [...heroImages, ...newItems];
      setHeroImages(updatedHero);
      localStorage.setItem('demoHeroImages', JSON.stringify(updatedHero)); 
    } else {
      const updatedGallery = [...galleryImages, ...newItems];
      setGalleryImages(updatedGallery);
      localStorage.setItem('demoGalleryImages', JSON.stringify(updatedGallery)); 
    }
    
    setPendingUploads([]); 
  };

  const handleDelete = (idToRemove) => {
    // Delete from the correct section based on the active tab
    if (activeTab === 'hero') {
      const updatedHero = heroImages.filter(img => img.id !== idToRemove);
      setHeroImages(updatedHero);
      localStorage.setItem('demoHeroImages', JSON.stringify(updatedHero)); 
    } else {
      const updatedGallery = galleryImages.filter(img => img.id !== idToRemove);
      setGalleryImages(updatedGallery);
      localStorage.setItem('demoGalleryImages', JSON.stringify(updatedGallery)); 
    }
  };

  // Determine which images show up in the left sidebar list
  const currentLiveImages = activeTab === 'hero' ? heroImages : galleryImages;

  return (
    <div className="admin-split-layout">
      {/* LEFT SIDE: CONTROLS */}
      <div className="admin-editor-panel">
        <header className="editor-header">
          <h2>Visual Editor</h2>
          <button className="editor-logout-btn" onClick={onLogout}>Exit</button>
        </header>

        <div className="editor-tabs">
          <button className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}>Hero</button>
          <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>Gallery</button>
        </div>

        <div className="upload-queue-zone">
          <input 
            type="file" 
            id="multi-upload" 
            accept="image/*" 
            multiple 
            onChange={handleFileChange} 
            className="hidden-file-input"
          />
          <label htmlFor="multi-upload" className="multi-upload-label">
            + Select Images
          </label>

          {pendingUploads.length > 0 && (
            <div className="pending-queue">
              <h4>Ready to Upload ({pendingUploads.length})</h4>
              <div className="pending-grid">
                {pendingUploads.map(p => (
                  <div key={p.tempId} className="pending-item" style={{ backgroundImage: `url(${p.previewUrl})` }}>
                    <button onClick={() => removePendingUpload(p.tempId)}>&times;</button>
                  </div>
                ))}
              </div>
              <button onClick={handleBulkUpload} className="bulk-upload-btn">Push to Live</button>
            </div>
          )}
        </div>

        <div className="active-images-list">
          <h3>Currently Live</h3>
          {currentLiveImages.map(img => (
            <div key={img.id} className="live-image-row">
              <img src={img.url} alt="live" />
              <span>ID: {img.id.toString().slice(-4)}</span>
              <button onClick={() => handleDelete(img.id)}>Delete</button>
            </div>
          ))}
          {currentLiveImages.length === 0 && <p style={{color: '#666'}}>No images yet.</p>}
        </div>
      </div>

      {/* RIGHT SIDE: LIVE PREVIEW */}
      <div className="admin-live-preview">
        <div className="live-indicator">LIVE PREVIEW ON</div>
        <div className="preview-scaler">
          {activeTab === 'hero' ? (
            <Hero adminPreviewImages={heroImages.map(img => img.url)} />
          ) : (
            <Gallery adminPreviewImages={galleryImages.map(img => img.url)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;