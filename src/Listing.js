import React from "react";

export const Listing = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Listing</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
                
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
