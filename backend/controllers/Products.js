import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
// import { Op } from "sequelize";

export const getProducts = async (req, res) => {
  try {
    let response;
    if (req.role === "Admin") {
      response = await Product.findAll({
        attributes: { exclude: ["userid"] },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
        ],
      });
    } else {
      response = await Product.findAll({
        where: {
          userid: req.userid,
        },
        attributes: { exclude: ["userid"] },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    let response;
    if (req.role === "Admin") {
      response = await Product.findOne({
        attributes: { exclude: ["userid"] },
        where: {
          product_id: req.params.product_id,
        },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
        ],
      });
    } else {
      response = await Product.findOne({
        where: {
          // [Op.and]: [(product_id: product.product_id), (userid: req.userid)],
          userid: req.userid,
          product_id: req.params.product_id,
        },
        attributes: { exclude: ["userid"] },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
        ],
      });
    }
    if (!response)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const response = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      userid: req.userid,
    });
    res.status(201).json({ message: "Product created successfully", response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        product_id: req.params.product_id,
      },
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    if (req.role === "Admin") {
      await Product.update(
        {
          product_name: req.body.product_name,
          price: req.body.price,
        },
        {
          where: {
            product_id: product.product_id,
          },
        }
      );
    } else {
      if (product.userid !== req.userid)
        return res
          .status(403)
          .json({ message: "You are not authorized to update this product" });
      await Product.update(
        {
          product_name: req.body.product_name,
          price: req.body.price,
        },
        {
          where: {
            product_id: product.product_id,
            userid: req.userid,
          },
        }
      );
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        product_id: req.params.product_id,
      },
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    if (req.role === "Admin") {
      await Product.destroy({
        where: {
          product_id: product.product_id,
        },
      });
    } else {
      if (product.userid !== req.userid)
        return res
          .status(403)
          .json({ message: "You are not authorized to delete this product" });
      await Product.destroy({
        where: {
          product_id: product.product_id,
          userid: req.userid,
        },
      });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
