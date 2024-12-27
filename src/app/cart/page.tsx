// pages/shopping-cart.tsx
import React from "react";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";

const ShoppingCart: React.FC = () => {
  return (
    <div>
      <NavBar />
    <div >
      <HeroBanner title="Shopping Cart" />
    </div>
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 p-4">Product</th>
                <th className="border border-gray-200 p-4">Price</th>
                <th className="border border-gray-200 p-4">Quantity</th>
                <th className="border border-gray-200 p-4">Total</th>
                <th className="border border-gray-200 p-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {["image-15.png", "image-16", "image-73", "image-74", "image-75.png"].map((image, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-4 flex items-center space-x-4">
                    <Image
                      src={`/images/${image}`}
                      alt="Product Image"
                      className="w-16 h-16 object-cover"
                    />
                    <span>Product Name</span>
                  </td>
                  <td className="border border-gray-200 p-4">$15.00</td>
                  <td className="border border-gray-200 p-4">
                    <div className="flex items-center space-x-2">
                      <button className="px-2 py-1 bg-gray-100 rounded">-</button>
                      <input
                        type="number"
                        min="1"
                        className="w-12 text-center border border-gray-200 rounded"
                        defaultValue={1}
                      />
                      <button className="px-2 py-1 bg-gray-100 rounded">+</button>
                    </div>
                  </td>
                  <td className="border border-gray-200 p-4">$15.00</td>
                  <td className="border border-gray-200 p-4 text-red-500 cursor-pointer">&times;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Coupon Code</h3>
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full p-3 border border-gray-200 rounded mb-4"
            />
            <button className="px-4 py-2 bg-yellow-500 text-white rounded">Apply</button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Total Bill</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>$50.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>$205.00</span>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-yellow-500 text-white rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;