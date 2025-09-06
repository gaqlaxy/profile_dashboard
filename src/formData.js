// src/formData.js
export const initialFormData = {
  // Personal
  fullName: "",
  gender: "",
  caste: "",
  birthPlace: "",
  birthDate: "",
  birthTime: "",
  nakshatram: "",
  rasi: "",
  height: "",
  color: "",
  weight: "",
  education: "",
  occupation: "",
  salary: "",
  siblings: "",
  gothram: "",

  // Parents
  fatherName: "",
  fatherJob: "",
  motherName: "",
  motherJob: "",
  guardian: "",

  // Address
  address: "",

  // Horoscope
  raasi: Array(12).fill(""),
  navamsa: Array(12).fill(""),

  // Photo
  photo: "",
};

// map of absolute positions (values in mm, tweak after testing)
export const fieldPositions = {
  fullName: { top: 45, left: 35 },
  gender: { top: 50, left: 120 },
  caste: { top: 60, left: 35 },
  birthPlace: { top: 70, left: 35 },
  birthDate: { top: 80, left: 35 },
  birthTime: { top: 80, left: 120 },
  nakshatram: { top: 90, left: 35 },
  rasi: { top: 90, left: 120 },
  height: { top: 100, left: 35 },
  color: { top: 100, left: 85 },
  weight: { top: 100, left: 135 },
  education: { top: 110, left: 35 },
  occupation: { top: 120, left: 35 },
  salary: { top: 130, left: 35 },
  siblings: { top: 140, left: 35 },
  gothram: { top: 150, left: 35 },

  fatherName: { top: 160, left: 35 },
  fatherJob: { top: 170, left: 35 },
  motherName: { top: 180, left: 35 },
  motherJob: { top: 190, left: 35 },
  guardian: { top: 200, left: 35 },

  address: { top: 210, left: 35 },

  photo: { top: 50, right: 20, width: 35, height: 45 },

  raasi: { top: 250, left: 30, size: 70 },
  navamsa: { top: 250, right: 30, size: 70 },
};
