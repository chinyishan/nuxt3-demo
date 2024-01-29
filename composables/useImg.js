import { filename } from "pathe/utils";

export const useImg = () => {
  const globJpg = import.meta.glob("~/assets/images/*.jpg", { eager: true }); //eager 在編譯時就執行此動態

  const imagesJpg = Object.fromEntries(
    Object.entries(globJpg).map(([key, value]) => [
      filename(key),
      value.default,
    ])
  );

  const globPng = import.meta.glob("~/assets/images/*.png", { eager: true });

  const imagesPng = Object.fromEntries(
    Object.entries(globPng).map(([key, value]) => [
      filename(key),
      value.default,
    ])
  );

  return {
    globJpg,
    imagesJpg,
    globPng,
    imagesPng,
  };
};
