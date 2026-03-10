import React from 'react';
import VisaLayout from '../components/VisaLayout';

const RohullahHashimi: React.FC = () => {
  const visaData = {
    referenceNumber: "88005622045",
    imageSrc: "./images/elham.jpg",
    name: "Hashimi Sayed Rohullah",
    passportNo: "P03874627",
    passportCountry: "Afghanistan",
    visaCategory: "Medical",
    visaSubCategory: "Short-Term",
    applicationType: "Entry",
    stayingFacility: "Single Entry",
    visaStartDate: "01 Mar 2026",
    visaEndDate: "29 May 2026",
    visaDuration: "60 day(s)"
  };

  return <VisaLayout data={visaData} />;
};

export default RohullahHashimi;
