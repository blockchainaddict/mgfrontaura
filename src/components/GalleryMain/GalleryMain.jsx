import { useState } from "react";
import "./GalleryMain.scss";
import { photosArr } from "../../data/photosArr";

function GalleryMain() {
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filterSetup, setFilterSetup] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  // Toggles the filter when a checkbox is checked/unchecked
  const onChangeFilter = (e) => {
    const value = e.target.value;
    setFilterSetup(
      (prev) =>
        prev.includes(value)
          ? prev.filter((filter) => filter !== value) // Remove the filter if it's unchecked
          : [...prev, value] // Add the filter if it's checked
    );
  };

  const onApplyFilter = () => {
    const filterPhotos = photosArr.filter((item) => {
      return item.tags.some((tag) => filterSetup.includes(tag));
    });

    setFilteredPhotos(filterPhotos);

    if (filterSetup.length === 0) {
      setFilterActive(false);
    } else {
      setFilterActive(true);
    }
  };

  return (
    <div className="gallery-main-wrapper">
      <h2>Gallery</h2>

      <div className="filter-menu">
        <h4>Filters</h4>

        <div className="filter-subsection">
          <div className="input-pair">
            <label htmlFor="color">Color</label>
            <input type="checkbox" value="color" onChange={onChangeFilter} />
          </div>
          <div className="input-pair">
            <label htmlFor="b&w">B&W</label>
            <input type="checkbox" value="b&w" onChange={onChangeFilter} />
          </div>
          <div className="input-pair">
            <label htmlFor="animal">Animal</label>
            <input type="checkbox" value="animal" onChange={onChangeFilter} />
          </div>
          <div className="input-pair">
            <label htmlFor="landscape">Landscape</label>
            <input
              type="checkbox"
              value="landscape"
              onChange={onChangeFilter}
            />
          </div>
        </div>

        <button onClick={onApplyFilter} className="button-primary">
          Apply Filter
        </button>
      </div>

      <div className="gallery-container">
        {!filterActive
          ? photosArr.map((item, i) => {
              return (
                <img
                  className="gallery-img"
                  src={`img/${item.id}.jpg`}
                  alt="img"
                  key={i}
                />
              );
            })
          : filteredPhotos.map((item, i) => {
              return (
                <img
                  className="gallery-img"
                  src={`img/${item.id}.jpg`}
                  alt="img"
                  key={i}
                />
              );
            })}
      </div>
    </div>
  );
}

export default GalleryMain;
