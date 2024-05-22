import itemModel from "../models/itemModel.js";

const getAllItems = async (req, res) => {
  try {
    const items = await itemModel.find({});
    return res.json({ success: true, items });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

export { getAllItems };
