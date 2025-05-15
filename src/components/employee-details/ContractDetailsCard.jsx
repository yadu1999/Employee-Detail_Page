
import React from 'react';

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="text-sm font-medium text-foreground">{value}</p>
  </div>
);

const ContractDetailsCard = () => {
  return (
    <div className="content-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Contract Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <DetailItem label="Started working on" value="12/05/2023" />
        <DetailItem label="Contract starting Date" value="12/05/2024" />
        <DetailItem label="Contract End Date" value="12/05/2025" />
        <DetailItem label="Increment Date" value="12/05/2025" />
      </div>
    </div>
  );
};

export default ContractDetailsCard;
