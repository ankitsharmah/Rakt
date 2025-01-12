import React, { useState, useEffect, useRef } from 'react';
import { PlaceholdersAndVanishInput } from '../extui/components/ui/placeholders-and-vanish-input';

const DynamicPlaceholderInput = () => {
  const placeholders = [
    "Search blood camps",
    "find Blood banks",
    "check blood Availablity",
    
  ];
  function onc(){
    console.log("cccc");
  }

  return (
  
      
      <PlaceholdersAndVanishInput onSubmit={onc} onChange={onc} placeholders={placeholders} />
    
  );
};

export default DynamicPlaceholderInput;