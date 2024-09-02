import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="mt-8 font-bold text-3xl">Dashboard</div>
        <button >
          <div className="flex items-center text-sm text-red-500">
           Logout 
          <LogOut className="w-4 h-4 ml-2" />
          </div>
        </button>
      </div>
      <div className="mt-16">
        <div className="font-bold text-2xl">Approve Reviews</div>
        <div className="flex flex-col gap-y-6 mt-2">
          {Array.from({ length: 3 }).map((item) => (
            <Card>
              <CardContent className="pt-6">
                <div className="font-bold text-sm ">
                  <div>
                    Email:{" "}
                    <span className="font-normal">example@example.com</span>
                  </div>
                  <div>
                    Business Name: <span className="font-normal">Example</span>
                  </div>
                  <div>
                    Business ID: <span className="font-normal">23289</span>
                  </div>
                  <div>
                    Comment:{" "}
                    <span className="font-normal">This is a review</span>
                  </div>
                  <div>
                    Rating: <span className="font-normal">4</span>
                  </div>
                </div>
                <div className="flex gap-x-4 mt-4">
                  <Button className="bg-green-100 text-green-500 hover:bg-green-200">
                    Approve
                  </Button>
                  <Button className="bg-red-100 text-red-500 hover:bg-red-200">
                    Reject
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

export default Dashboard;
