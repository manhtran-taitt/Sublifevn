import React from "react";
import Link from "next/link";
import SolutionsGrid from "@/components/SolutionsGrid";

export default function AllSolutionsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <SolutionsGrid />
    </div>
  );
}
