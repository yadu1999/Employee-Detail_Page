
import React from 'react';

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="text-sm font-medium text-foreground">{value}</p>
  </div>
);

const EmploymentDetailsCard = () => {
  return (
    <div className="content-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Employment Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <DetailItem label="Client" value="Invision Pvt. Ltd" />
        <DetailItem label="Location" value="Melbourne, Australia" />
        <DetailItem label="Employment Type" value="Contract" />
        <DetailItem label="Mode" value="Hybrid" />
        <DetailItem label="Reporting to" value="Mary Houston - COO" />
      </div>
    </div>
  );
};

export default EmploymentDetailsCard;
