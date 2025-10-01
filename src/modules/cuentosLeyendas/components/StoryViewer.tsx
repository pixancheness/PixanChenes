"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Legend } from "../types/legend";

interface StoryViewerProps {
  legend: Legend;
  locale: string;
}

interface TabsProps {
  activeTab: "story" | "narrate";
  onTabChange: (tab: "story" | "narrate") => void;
  t: any;
}

function Tabs({ activeTab, onTabChange, t }: TabsProps) {
  return (
    <div className="border-b border-yellow-200 mb-8">
      <nav className="flex space-x-8">
        <button
          onClick={() => onTabChange("story")}
          className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
            activeTab === "story"
              ? "border-yellow-500 text-yellow-600"
              : "border-transparent text-gray-500 hover:text-yellow-600 hover:border-yellow-300"
          }`}
        >
          {t("Stories.tabs.story")}
        </button>
        <button
          onClick={() => onTabChange("narrate")}
          className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
            activeTab === "narrate"
              ? "border-yellow-500 text-yellow-600"
              : "border-transparent text-gray-500 hover:text-yellow-600 hover:border-yellow-300"
          }`}
        >
          {t("Stories.tabs.narrate")}
        </button>
      </nav>
    </div>
  );
}

interface StoryContentProps {
  legend: Legend;
  t: any;
}

function StoryContent({ legend, t }: StoryContentProps) {
  return (
    <div className="space-y-8">
      {/* Video Section */}
      {legend.videoUrl && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg
              className="w-5 h-5 text-yellow-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            {t("Stories.content.watchVideo")}
          </h3>
          <div className="aspect-video bg-yellow-100 rounded-lg flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src={legend.videoUrl.replace("watch?v=", "embed/")}
              title={legend.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Audio Section */}
      {legend.content.audioUrl && (
        <div className="bg-orange-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg
              className="w-5 h-5 text-orange-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            {t("Stories.content.listenAudio")}
          </h3>
          <div className="bg-white rounded-lg p-4 border border-orange-200">
            <audio controls className="w-full" preload="metadata">
              <source src={legend.content.audioUrl} type="audio/mpeg" />
              <source src={legend.content.audioUrl} type="audio/wav" />
              <source src={legend.content.audioUrl} type="audio/ogg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
            <p className="text-sm text-gray-600 mt-2">
              {t("Stories.content.audioDescription")}
            </p>
          </div>
        </div>
      )}

      {/* Text Content */}
      <div className="bg-white rounded-xl border border-yellow-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <svg
            className="w-5 h-5 text-yellow-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          {t("Stories.content.readStory")}
        </h3>
        <div className="prose prose-yellow max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {legend.content.text}
          </p>
        </div>
      </div>
    </div>
  );
}

interface NarrateContentProps {
  legend: Legend;
  t: any;
}

function NarrateContent({ legend, t }: NarrateContentProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <svg
            className="w-5 h-5 text-yellow-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
          {t("Stories.content.narrateStory")}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {t("Stories.content.fullScript")}
        </p>
        <div className="prose prose-yellow max-w-none">
          <div className="text-gray-800 leading-relaxed whitespace-pre-line font-medium">
            {legend.content.script}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StoryViewer({ legend, locale }: StoryViewerProps) {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<"story" | "narrate">("story");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Breadcrumb */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg border border-yellow-100 mb-8">
          <div className="p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-yellow-900 mb-4">
                {legend.title}
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Summary */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {t("Stories.info.summary")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {legend.metadata.summary}
                  </p>
                </div>

                {/* Origin */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {t("Stories.info.origin")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {legend.metadata.origin}
                  </p>
                </div>

                {/* Keywords */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    {t("Stories.info.keywords")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {legend.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Narrators */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {t("Stories.info.narrators")}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-800">
                        {t("Stories.info.narrator")}:{" "}
                        {legend.narrators.storyteller}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("Stories.info.date")}:{" "}
                        {formatDate(legend.narrators.date)}
                      </p>
                    </div>
                    {legend.narrators.students.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          {t("Stories.info.students")}:
                        </p>
                        <ul className="space-y-1">
                          {legend.narrators.students.map((student, index) => (
                            <li key={index} className="text-sm text-gray-600">
                              • {student}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Characters */}
                {legend.metadata.characters.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {t("Stories.info.characters")}
                    </h3>
                    <div className="space-y-3">
                      {legend.metadata.characters.map((character, index) => (
                        <div
                          key={index}
                          className="bg-yellow-50 rounded-lg p-4"
                        >
                          <h4 className="font-medium text-yellow-900 mb-1">
                            {character.name}
                          </h4>
                          <p className="text-sm text-gray-700">
                            {character.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-8">
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} t={t} />

          {activeTab === "story" && <StoryContent legend={legend} t={t} />}
          {activeTab === "narrate" && <NarrateContent legend={legend} t={t} />}
        </div>
      </div>
    </div>
  );
}
