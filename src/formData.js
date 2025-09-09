

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
  // houseType: "", // own | rental | lease
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
    own: { top: 202, left: 60 },   // test positions
    rental: { top: 202, left: 6 },
    lease: { top: 202, left: 27 },
  },

  // Horoscope wrapper + cells
  raasi: { top: 210, left: 3, size: 70 },
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
