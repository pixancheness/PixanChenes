export type IndigenousCouncilSection = "hampolol" | "xcupilcacab";

export interface IndigenousCouncilImage {
  id: string;
  src: string;
  captionKey?: "caption";
}

export const indigenousCouncilImages: Record<
  IndigenousCouncilSection,
  IndigenousCouncilImage[]
> = {
  hampolol: [
    {
      id: "hampolol-1",
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1785386393/WhatsApp_Image_2026-07-25_at_08.47.40_ipwyru.jpg",
    },
    {
      id: "hampolol-2",
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1785386392/WhatsApp_Image_2026-07-25_at_08.47.40_1_heud6v.jpg",
    },
    {
      id: "hampolol-3",
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1785386392/WhatsApp_Image_2026-07-25_at_08.47.40_2_dbrek7.jpg",
      captionKey: "caption",
    },
  ],
  xcupilcacab: [
    {
      id: "xcupilcacab-1",
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1785386695/WhatsApp_Image_2026-07-26_at_18.24.07_bqasbj.jpg",
      captionKey: "caption",
    },
  ],
};
