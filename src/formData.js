// // src/formData.js
// export const initialFormData = {
//   // Personal
//   fullName: "",
//   gender: "",
//   caste: "",
//   birthPlace: "",
//   birthDate: "",
//   birthTime: "",
//   nakshatram: "",
//   rasi: "",
//   height: "",
//   color: "",
//   weight: "",
//   education: "",
//   occupation: "",
//   salary: "",
//   siblings: "",
//   gothram: "",

//   // Parents
//   fatherName: "",
//   fatherJob: "",
//   motherName: "",
//   motherJob: "",
//   guardian: "",

//   // Address
//   address: "",

//   // Horoscope
//   raasi: Array(12).fill(""),
//   navamsa: Array(12).fill(""),

//   // Photo
//   photo: "",
// };

// // map of absolute positions (values in mm, tweak after testing)
// export const fieldPositions = {
//   fullName: { top: 45, left: 35 },
//   gender: { top: 50, left: 120 },
//   caste: { top: 60, left: 35 },
//   birthPlace: { top: 70, left: 35 },
//   birthDate: { top: 80, left: 35 },
//   birthTime: { top: 80, left: 120 },
//   nakshatram: { top: 90, left: 35 },
//   rasi: { top: 90, left: 120 },
//   height: { top: 100, left: 35 },
//   color: { top: 100, left: 85 },
//   weight: { top: 100, left: 135 },
//   education: { top: 110, left: 35 },
//   occupation: { top: 120, left: 35 },
//   salary: { top: 130, left: 35 },
//   siblings: { top: 140, left: 35 },
//   gothram: { top: 150, left: 35 },

//   fatherName: { top: 160, left: 35 },
//   fatherJob: { top: 170, left: 35 },
//   motherName: { top: 180, left: 35 },
//   motherJob: { top: 190, left: 35 },
//   guardian: { top: 200, left: 35 },

//   address: { top: 210, left: 35 },

//   photo: { top: 50, right: 20, width: 35, height: 45 },

//   raasi: { top: 180, left: 40, size: 80 },
//   raasiCells: [
//     { top: 0, left: 20, w: 18, h: 16 }, // 1
//     { top: 0, left: 40, w: 18, h: 16 }, // 2
//     { top: 20, left: 60, w: 18, h: 16 }, // 3
//     { top: 40, left: 60, w: 18, h: 16 }, // 4
//     { top: 60, left: 60, w: 18, h: 16 }, // 5
//     { top: 60, left: 40, w: 18, h: 16 }, // 6
//     { top: 60, left: 20, w: 18, h: 16 }, // 7
//     { top: 40, left: 0, w: 18, h: 16 }, // 8
//     { top: 20, left: 0, w: 18, h: 16 }, // 9
//     { top: 0, left: 0, w: 18, h: 16 }, // 10
//     { top: 0, left: 60, w: 18, h: 16 }, // 11
//     { top: 20, left: 40, w: 18, h: 16 }, // 12
//   ],

//   // Navamsa block wrapper
//   navamsa: { top: 180, right: 40, size: 80 },
//   navamsaCells: [
//     { top: 0, left: 20, w: 18, h: 16 }, // repeat with same structure
//     { top: 0, left: 40, w: 18, h: 16 },
//     { top: 20, left: 60, w: 18, h: 16 },
//     { top: 40, left: 60, w: 18, h: 16 },
//     { top: 60, left: 60, w: 18, h: 16 },
//     { top: 60, left: 40, w: 18, h: 16 },
//     { top: 60, left: 20, w: 18, h: 16 },
//     { top: 40, left: 0, w: 18, h: 16 },
//     { top: 20, left: 0, w: 18, h: 16 },
//     { top: 0, left: 0, w: 18, h: 16 },
//     { top: 0, left: 60, w: 18, h: 16 },
//     { top: 20, left: 40, w: 18, h: 16 },
//   ],
// };

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

  // Horoscope (12 cells each)
  raasi: Array(12).fill(""),
  navamsa: Array(12).fill(""),

  // Photo
  photo: "",
};

// map of absolute positions (values in mm, tweak after testing)
export const fieldPositions = {
  // Personal + Parents + Address
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

  // Photo
  photo: { top: 55, right: 0, width: 102, height: 147 },

  // Horoscope (wrapper boxes + individual cells)
  raasi: { top: 211, left: 2, size: 70 },
  raasiCells: [
    { top: 0, left: 18, w: 19, h: 16 }, // 1
    { top: 20, left: 60, w: 18, h: 16 }, // 3
    { top: 40, left: 60, w: 18, h: 16 }, // 4
    { top: 60, left: 60, w: 18, h: 16 }, // 5
    { top: 60, left: 40, w: 18, h: 16 }, // 6
    { top: 60, left: 20, w: 18, h: 16 }, // 7
    { top: 40, left: 0, w: 18, h: 16 }, // 8
    { top: 20, left: 0, w: 18, h: 16 }, // 9
    { top: 0, left: 0, w: 18, h: 16 }, // 10
    { top: 0, left: 60, w: 18, h: 16 }, // 11
    { top: 20, left: 40, w: 18, h: 16 }, // 12
    { top: 0, left: 37, w: 19, h: 16 }, // 2
  ],

  navamsa: { top: 250, right: 30, size: 70 },
  navamsaCells: [
    { top: 0, left: 20, w: 18, h: 16 },
    { top: 0, left: 40, w: 18, h: 16 },
    { top: 20, left: 60, w: 18, h: 16 },
    { top: 40, left: 60, w: 18, h: 16 },
    { top: 60, left: 60, w: 18, h: 16 },
    { top: 60, left: 40, w: 18, h: 16 },
    { top: 60, left: 20, w: 18, h: 16 },
    { top: 40, left: 0, w: 18, h: 16 },
    { top: 20, left: 0, w: 18, h: 16 },
    { top: 0, left: 0, w: 18, h: 16 },
    { top: 0, left: 60, w: 18, h: 16 },
    { top: 20, left: 40, w: 18, h: 16 },
  ],
};
