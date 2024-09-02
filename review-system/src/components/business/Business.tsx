import React from "react";
import { useParams } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { User, Star } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import axios from "axios";

const Business = () => {
  const { id } = useParams();
  const [rating, setRating] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetchProducts();
    fetchReviews();
  }, [update]);
  const fetchProducts = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/products/byId?id=${id}`,
    );
    console.log(response.data);
    setProducts(response.data);
  };
  const fetchReviews = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/reviews/review_by_id?id=${id}`,
    );
    setReviews(response.data);
    console.log(response.data);
  };
  const postReview = async () => {
    try {
      const data = {
        product_id: id,
        user_id: "66d584569eacdd4bc00481b9",
        quality: 3,
        service: 3,
        value: parseInt(rating),
        comment: comment,
        approved: true,
      };
      console.log(data);
      const response = await axios.post(
        `http://localhost:8080/api/reviews/CreateReview`,
        data,
      );
      setComment("");
      setRating("");
      setUpdate((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(reviews);

  return (
    <div className="mt-8">
      <div className="mx-auto max-w-screen-lg ">
        <div className="text-center font-bold text-3xl">
          Write a Review for name
        </div>
        <div className="mt-32 mx-auto  w-[700px] ">
          <div className="grid grid-cols-[200px_1fr] gap-12 w-full">
            <div className="w-full">
              <div className="flex justify-center">
                <div className="w-[200px] h-[200px] bg-gray-400" />
              </div>
            </div>
            <div className="my-2 text-sm">
              <div className="font-bold text-lg">
                Name: <span className="font-normal">{products.shop_name}</span>
              </div>
              <div className="font-bold text-lg">
                Rating:{" "}
                <span className="font-normal">{products.review_agg}</span>
              </div>
              <div className="font-bold text-lg">
                Address: <span className="font-normal">{products.address}</span>
              </div>
              <div className="font-bold text-lg">
                Phone Number:{" "}
                <span className="font-normal">{products.phone_number}</span>
              </div>
              <div className=" text-gray-400 text-sm  mt-6">
                {" "}
                Have an image for this business?
              </div>
              <Button className="mt-2">Upload</Button>
            </div>
          </div>
          <div className="flex w-full mt-8">
            <Input
              placeholder="Write a Review"
              onChange={(e) => setComment(e.target.value)}
            ></Input>
            <Button onClick={() => postReview()}>
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-2">
            <div className="flex text-sm items-center font-bold">
              <Star className="w-4 h-4 mr-2" /> Rating
            </div>
            <RadioGroup
              defaultValue="option-one"
              className="flex gap-x-4 mt-4"
              onValueChange={(value) => setRating(value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="option-one" />
                <Label htmlFor="option-one">One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="option-two" />
                <Label htmlFor="option-two">Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="option-three" />
                <Label htmlFor="option-two">Three</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4" id="option-four" />
                <Label htmlFor="option-two">Four</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5" id="option-five" />
                <Label htmlFor="option-two">Five</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            {reviews.map((item) => (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-4">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-bold">{item.user_id}</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-bold">{item.value}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">{item.comment}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
