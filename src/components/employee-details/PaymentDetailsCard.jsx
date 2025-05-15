
import React from 'react';

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="text-sm font-medium text-foreground">{value}</p>
  </div>
);

const PaymentDetailsCard = () => {
  return (
    <div className="content-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Payment Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <DetailItem label="Salary (per month)" value="$5500" />
        <DetailItem label="Monthly Payment Date" value="7th" />
        <DetailItem label="Invoice cycle ends" value="Last day of the month" />
        <DetailItem label="Last Increment" value="15%" />
      </div>
    </div>
  );
};

export default PaymentDetailsCard;
