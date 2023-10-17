"use client";
import React from "react";
import { Page, View, Document, PDFViewer } from "@react-pdf/renderer";
import type { IResumeData } from "@/types";
import {
  ResumeContactMe,
  ResumeSkills,
  ResumeLanguages,
  Texto,
  ResumeProjects,
  ResumeExperience,
  ResumeEducation,
} from "./components";

export default function Resume({ data }: { data: IResumeData }) {
  return (
    <PDFViewer className="w-full h-full p-4">
      <Document>
        <Page size="A4">
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            <View
              style={{
                gap: 8,
                borderRight: 2,
                paddingRight: 2,
                borderColor: "#000000",
                width: "20%",
              }}
            >
              <ResumeContactMe data={data.contact} />
              <ResumeSkills data={data.skills} />
              <ResumeLanguages data={data.languages} />
            </View>
            <View style={{ width: "70%" }}>
              <View>
                <Texto size={24}>Aurimar Lopes</Texto>
                <Texto size={16}>Web/App Developer</Texto>
              </View>
              <View style={{ height: 20 }} />
              <View style={{ gap: 8 }}>
                <ResumeExperience data={data.experiences} />
                <ResumeProjects data={data.projects} />
                <ResumeEducation data={data.educations} />
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
