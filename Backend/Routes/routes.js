const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Jewellery = mongoose.model(
    "jewellery_data",  // collection name
    new mongoose.Schema({}, { strict: false }), // no schema
    "jewellery_data"   // explicitly set collection name
  );


// GET API
router.use("/data/:page", async (req, res) => {
    try {
      const pageName = req.params.page; // "page1", "page2", etc.
  
      const doc = await Jewellery.findOne(
        {}, 
        { [pageName]: 1, _id: 0 } // projection: only that page
      );
  
      if (!doc) return res.status(404).json({ error: "Page not found" });
  
      res.json(doc[pageName]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  



module.exports = router;
