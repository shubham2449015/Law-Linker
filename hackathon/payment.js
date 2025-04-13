const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // To serve uploaded images

// Create uploads directory if it doesn't exist
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// Handle payment submission
app.post('/submit-payment', upload.single('screenshot'), (req, res) => {
  const { lawyer, price, transactionId, paymentAmount } = req.body;
  const screenshot = req.file ? req.file.filename : null;

  if (!lawyer || !price || !transactionId || !paymentAmount || !screenshot) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Save details to a JSON file (for demo purpose)
  const paymentData = {
    lawyer,
    price,
    transactionId,
    paymentAmount,
    screenshot,
    timestamp: new Date().toISOString()
  };

  const dataPath = path.join(__dirname, 'payments.json');

  let existingData = [];
  if (fs.existsSync(dataPath)) {
    existingData = JSON.parse(fs.readFileSync(dataPath));
  }

  existingData.push(paymentData);
  fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));

  res.status(200).json({ message: 'Payment details stored successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
