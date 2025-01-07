"use client";

import { OpenInV0Form } from "@/components/open-in-v0-form";
import LandingPageTest from "@/registry/example/landing-page-test";

export default function TestV0Page() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Test V0 Integration</h1>
        <OpenInV0Form name="landing-page-test" />
      </div>
      <div className="border rounded-lg p-4">
        <LandingPageTest />
      </div>
    </div>
  );
}
