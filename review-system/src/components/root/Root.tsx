import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle, CardHeader } from "../ui/card";
import { Star, ArrowUpRight } from "lucide-react";
import { Search } from "lucide-react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const Root = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8080/api/products/all");
    setProducts(response.data);
  };
  console.log(products);
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-2xl my-4 items-center flex justify-between">
        <div className="font-bold">ReviewUS</div>
        <Button
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </Button>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-32">
        <div className="text-4xl font-semibold text-center">
          Welcome to ReviewUS. Rate your favorite businesses.
        </div>
        <div className="w-full flex justify-center mt-12">
          <Input
            className="max-w-4xl w-full h-12"
            placeholder="Search for a business"
          />
          <Button className="h-12">
            <Search className="w-4 h-4 " />
          </Button>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto flex justify-center mt-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="Food">Food</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Salon">Salon</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-4 gap-12 ">
          {products.map((item) => (
            <Card className="max-w-[350px]">
              <CardHeader>
                <CardTitle className="text-center">{item.shop_name}</CardTitle>
              </CardHeader>
              <CardContent className="w-full">
                <div className="w-full flex justify-center">
                  <div className="w-[200px] h-[200px] bg-gray-400" />
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="my-2 flex items-center text-sm">
                    {" "}
                    <Star className="w-4 h-4 mr-2" />
                    Rating- {item.review_agg}
                  </div>
                  <Button
                    onClick={() => {
                      navigate(`/business/${item._id}`);
                    }}
                  >
                    See Reviews
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Root;
