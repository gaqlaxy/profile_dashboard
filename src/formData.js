
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

//   // Horoscope (12 cells each)
//   raasi: Array(12).fill(""),
//   navamsa: Array(12).fill(""),

//   // Photo
//   photo: "",
// };

// // map of absolute positions (values in mm, tweak after testing)
// export const fieldPositions = {
//   // Personal + Parents + Address
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

//   // Photo
//   photo: { top: 55, right: -0.4, width: 102, height: 147 },

//   // Horoscope (wrapper boxes + individual cells)
//   raasi: { top: 211, left: 2, size: 70 },

//   raasiCells: [
//     { top: 0, left: 37, w: 19, h: 16 }, // 1 (top middle)
//     { top: 0, left: 56.3, w: 18, h: 16 }, // 2 (top right)
//     { top: 16, left: 56.3, w: 18, h: 17 }, // 3
//     { top: 33, left: 56.3, w: 18, h: 16 }, // 4
//     { top: 49, left: 56.3, w: 18, h: 15.5 }, // 5 (bottom right)
//     { top: 49, left: 37.6, w: 18, h: 15.5 }, // 6
//     { top: 49, left: 18.3, w: 18.5, h: 15.5 }, // 7 (bottom middle)
//     { top: 49, left: 0, w: 18, h: 15.5 }, // 8
//     { top: 33, left: 0, w: 18, h: 16 }, // 9
//     { top: 16, left: 0, w: 18, h: 17 }, // 10
//     { top: 0, left: 0, w: 18, h: 16 }, // 11 (top left)
//     { top: 0, left: 18, w: 19, h: 16 }, // 12
//   ],

//   navamsa: { top: 211, right: 60, size: 70 },

//   navamsaCells: [
//     { top: 0, left: 19, w: 18, h: 15 }, // 1 (top middle)
//     { top: 0, left: 37, w: 18, h: 15 }, // 2 (top right)
//     { top: 0, left: 55, w: 18, h: 15 }, // 12
//     { top: 15, left: 55, w: 18, h: 18 }, // 3
//     { top: 33, left: 55, w: 18, h: 16 }, // 4
//     { top: 49, left: 55, w: 18, h: 15.5 }, // 5 (bottom right)
//     { top: 49, left: 37, w: 18, h: 15.5 }, // 6
//     { top: 49, left: 19, w: 18, h: 15.5 }, // 7 (bottom middle)
//     { top: 49, left: 0, w: 19, h: 15.5 }, // 8
//     { top: 33, left: 0, w: 19, h: 16 }, // 9
//     { top: 15, left: 0, w: 19, h: 18 }, // 10
//     { top: 0, left: 0, w: 19, h: 15 }, // 11 (top left)
//   ],
// };


// src/formData.js
export const initialFormData = {
  // Personal
  registerNumber: "",
  introducedBy: "",
  inam: "",
  name: "",
  city: "",
  dob: "",
  time: "",
  star: "",
  raasiText: "", // note: to avoid clash with horoscope raasi (12 boxes)
  height: "",
  color: "",
  laknam: "",
  education: "",
  work: "",
  monthlyIncome: "",
  birthOrder: "",
  youngerBrother: "",
  youngerSister: "",
  elderBrother: "",
  elderSister: "",

  // Parents
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",

  // Expectations
  expectation: "",
  houseType: "", // own | rental | lease
  // Address
  address: "",

  // Horoscope (12 cells each)
  raasi: Array(12).fill(""),
  navamsa: Array(12).fill(""),

  // Photo
  photo: "",
};

// Map of absolute positions (values in mm, tweak after testing)
export const fieldPositions = {
  // Example placements (update according to your PNG)
  registerNumber: { top: 48.5, left: 28 },
  introducedBy: { top: 48.5, left: 83 },
  inam: { top: 56.4, left: 17 },
  name: { top: 64, left: 18 },
  city: { top: 73.8, left: 27 },
  dob: { top: 84, left: 30 },
  time: { top: 84, left: 84 },
  star: { top: 94, left: 28 },
  raasiText: { top: 94, left: 82 },
  height: { top: 104, left: 20 },
  color: { top: 104, left: 51 },
  laknam: { top: 104, left: 88 },
  education: { top: 112, left: 17 },
  work: { top: 119.5, left: 22 },
  monthlyIncome: { top: 143, left: 35 },
  birthOrder: { top: 142.8, left: 91 },
  youngerBrother: { top: 152, left: 25 },
  youngerSister: { top: 152, left: 51 },
  elderBrother: { top: 152, left: 74 },
  elderSister: { top: 152, left: 99 },

  fatherName: { top: 160.8, left: 32 },
  fatherOccupation: { top: 168, left: 35 },
  motherName: { top: 176.3, left: 28 },
  motherOccupation: { top: 184.4, left: 31 },

  expectation: { top: 194, left: 28 },

  address: { top: 202.9, left: 90 },

  // Photo
  photo: { top: 55, right: -0.4, width: 102, height: 147 },

  houseTypeTicks: {
    own: { top: 230, left: 60 },   // test positions
    rental: { top: 230, left: 90 },
    lease: { top: 230, left: 120 },
  },

  // Horoscope wrapper + cells
  raasi: { top: 210, left: 2, size: 70 },
  raasiCells: [
    { top: 0, left: 37, w: 19, h: 16 }, // 1
    { top: 0, left: 56.3, w: 18, h: 16 }, // 2
    { top: 16, left: 56.3, w: 18, h: 17 }, // 3
    { top: 33, left: 56.3, w: 18, h: 16 }, // 4
    { top: 49, left: 56.3, w: 18, h: 15.5 }, // 5
    { top: 49, left: 37.6, w: 18, h: 15.5 }, // 6
    { top: 49, left: 18.3, w: 18.5, h: 15.5 }, // 7
    { top: 49, left: 0, w: 18, h: 15.5 }, // 8
    { top: 33, left: 0, w: 18, h: 16 }, // 9
    { top: 16, left: 0, w: 18, h: 17 }, // 10
    { top: 0, left: 0, w: 18, h: 16 }, // 11
    { top: 0, left: 18, w: 19, h: 16 }, // 12
  ],

  navamsa: { top: 210, right: 60, size: 70 },
  navamsaCells: [
    { top: 0, left: 19, w: 18, h: 15 }, // 1
    { top: 0, left: 37, w: 18, h: 15 }, // 2
    { top: 0, left: 55, w: 18, h: 15 }, // 12
    { top: 15, left: 55, w: 18, h: 18 }, // 3
    { top: 33, left: 55, w: 18, h: 16 }, // 4
    { top: 49, left: 55, w: 18, h: 15.5 }, // 5
    { top: 49, left: 37, w: 18, h: 15.5 }, // 6
    { top: 49, left: 19, w: 18, h: 15.5 }, // 7
    { top: 49, left: 0, w: 19, h: 15.5 }, // 8
    { top: 33, left: 0, w: 19, h: 16 }, // 9
    { top: 15, left: 0, w: 19, h: 18 }, // 10
    { top: 0, left: 0, w: 19, h: 15 }, // 11
  ],
};
