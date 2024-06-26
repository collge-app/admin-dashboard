import React from 'react';
import "../../dist/css/ReportSidebar.css"; // Importing CSS for styling the component
import ReportCard from './ReportCard.js'; // Importing the ReportCard component

// Functional component to render the sidebar with reports
const ReportSidebar = () => {
  return (
    <div className='parent-container-rs'> {/* Parent container for the sidebar */}
      
        <div className="container-b"> {/* Container for the title, report cards, and link */}
            <h3 className='title'>Reports</h3> {/* Title for the sidebar */}
            <ReportCard /> {/* ReportCard component instance */}
            <ReportCard /> {/* ReportCard component instance */}
            <ReportCard /> {/* ReportCard component instance */}
            <div className="anchor-text-parent-container">
                <button href='#' className='see-more-anchor'>See More +</button> {/* Link to view more reports */}
            </div>
            
        </div>

    </div>
  );
}

export default ReportSidebar; // Exporting the component as default

