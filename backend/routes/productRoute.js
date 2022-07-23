const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controller/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getSingleProduct);
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
