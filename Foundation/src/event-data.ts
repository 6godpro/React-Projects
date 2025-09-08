const decemberModules = import.meta.glob("./assets/december_outreach*.jpg", {
  eager: true,
});

// Convert glob imports into arrays of image paths
const toImages = (modules: Record<string, any>) =>
  Object.values(modules).map((mod: any) => mod.default);

export const events = [
  {
    id: "december-outreach",
    title: "2024 Christmas Outreach",
    images: toImages(decemberModules),
  },
  {
    id: "december-outreach",
    title: "2024 Christmas Outreach",
    images: toImages(decemberModules),
  },
  {
    id: "december-outreach",
    title: "2024 Christmas Outreach",
    images: toImages(decemberModules),
  },
];
