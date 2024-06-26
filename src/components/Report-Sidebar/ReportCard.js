import React from 'react';
import "../../dist/css/ReportCard.css"; // Importing CSS for styling the ReportCard component

const ReportCard = () => {
  return (
    <div className="report-card"> {/* Main container for the report card */}
      <div className="report-card-c1"> {/* First section of the report card */}
        
        <div className="report-card-profile"> {/* Profile section */}
          <div className="report-card-profile-text-wrap"> {/* Wrapper for profile icon and text */}
            <div className="profile-icon"></div> {/* Placeholder for profile icon */}
            <div className="report-text"> {/* Wrapper for profile name and username */}
              <h5 className='report-text-name'>Name</h5> {/* Profile name */}
              <h6 className='report-text-username'>@username</h6> {/* Profile username */}
            </div>
          </div>
        </div>
        
        <div className="report-card-alert"> {/* Alert section */}
          <div className="report-card-alert-wrap"> {/* Wrapper for alert text */}
            <h5 className='report-card-alert-text'>Report</h5> {/* Alert text */}
          </div>
        </div>
        
      </div>
      <div className="report-card-c2"> {/* Second section of the report card */}
        <p className='report-card-message'>Report Msg, only first 30 characters.</p> {/* Report message */}
      </div>
    </div>
  );
}

export default ReportCard; // Exporting the ReportCard component as default
