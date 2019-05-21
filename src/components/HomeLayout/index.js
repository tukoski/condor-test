import React from "react";
import PropTypes from "prop-types";
/* Emerald */
import Avatar from "emerald-ui/lib/Avatar";
/* Styles */
import "./style.scss";

function HomeLayout({ images }) {
  const rows = getRows(images);

  return (
    <div id="HomeLayout">
      <h1 className="bold">Our Team</h1>
      <p className="bold">
        These are the people living the "Junior developer for life" way
      </p>
      <div>{rows}</div>
    </div>
  );
}

/**
 * Return the images in rows with 3 or 4 avatars
 * @param {Array} images
 */
function getRows(images) {
  let rows = [],
    row = [];
  let count = 0,
    aux = 3;

  for (let i = 0; i < images.length; i++) {
    count++;
    if (count <= aux) {
      row.push(
        <Avatar
          key={`avatar-${i}`}
          className="avatar"
          style={{
            backgroundImage: `url(${images[i].images.thumbnail.url})`
          }}
        />
      );
    } else {
      rows.push(
        <div key={`row-${i}`} className="row">
          {row}
        </div>
      );
      aux = aux === 3 ? 4 : 3;
      count = 0;
      row = [];
    }
  }

  return rows;
}

HomeLayout.propTypes = {
  images: PropTypes.array.isRequired
};

export default HomeLayout;
