import React from "react";

const Resume = () => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 80px)' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/Siddharth-Budgude-print.pdf`}
        title="Siddharth Budgude Resume"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default Resume;
