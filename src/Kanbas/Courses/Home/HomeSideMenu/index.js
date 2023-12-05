import React from "react";

const HomeSideMenuHeader = () => {
  return (
    <div>
      <button class="btn btn-secondary">Unpublish</button>
      <button class="btn btn-success">Published</button>
      <div class="mt-4 mb-4">
        <ul class="list-group">
          <li class="list-group-item">Import Existing Content</li>
          <li class="list-group-item">Import From Commons</li>
          <li class="list-group-item">Choose Home Page</li>
          <li class="list-group-item">View Course Stream</li>
          <li class="list-group-item">New Announcement</li>
          <li class="list-group-item">New Anyalytics</li>
          <li class="list-group-item">View Course Notifications</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeSideMenuHeader;
