// ==========================================
// CENTRAL DATABASE (Stock, Vouchers & Images)
// ==========================================

// 🎟️ VOUCHER DATABASE
const voucherDatabase = {
  "KEYMATRIX10": 10,  // 10% Off
};

// 📦 PRODUCT & STOCK DATABASE
// დარწმუნდი, რომ images ფოლდერში ფაილების სახელები ზუსტად ემთხვევა ამ დასახელებებს!
const defaultProducts = [
  { 
    id: 1, 
    name: "Clix x Matrix 60% Gaming Keyboard Blue Switch RGB", 
    category: "keyboard", 
    price: 5000,
    oldPrice: 119.99, // Triggers SALE badge
    stock: 2,
    image: "images/keyboard1.png" 
  },
  { 
    id: 2, 
    name: "Matrix Stealth RGB Wireless Mouse", 
    category: "mouse", 
    price: 19.99,
    oldPrice: null, // Regular price (No SALE badge)
    stock: 5, 
    image: "images/mouse1.png" 
  }
];
