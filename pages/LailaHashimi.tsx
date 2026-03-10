import React from 'react';
import VisaLayout from '../components/VisaLayout';

const LailaHashimi: React.FC = () => {
  const visaData = {
    referenceNumber: "88005787036",
    imageSrc: "./images/layla.jpg",
    name: "Hashimi Laila",
    passportNo: "P03856676",
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

export default LailaHashimi;
