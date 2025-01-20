"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobManagement, CandidateEvaluation } from "@/modules/admin";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="jobs">Job Management</TabsTrigger>
              <TabsTrigger value="candidates">Candidate Evaluation</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs">
              <JobManagement />
            </TabsContent>
            <TabsContent value="candidates">
              <CandidateEvaluation />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
