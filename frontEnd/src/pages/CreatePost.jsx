import React from "react";

const CreatePost = () => {
  return (
    <div className="allpages">
      <div className="container d-flex align-items-center justify-content-center flex-column p-3">
        <h3
          style={{ width: "max-content" }}
          className=" border-bottom border-2 border-dark "
        >
          Create New Post
        </h3>

        <form className="container d-flex align-items-center justify-content-center flex-column ">
          <input type="text" placeholder="Add title to your post" />
          <select className="select_father">
            <option disabled value="">
              Select A Category
            </option>
            <option disabled value="">
              Select A Category
            </option>
            <option value="">Coffee</option>
          </select>
          <textarea placeholder="Add Description" rows="10"></textarea>
          <input type="file" name="file" id="file" />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
