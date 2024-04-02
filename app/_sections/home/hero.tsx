"use client";
import { Box, TextField } from "@radix-ui/themes";
import { FC } from "react";

interface HeroProps {
  onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Hero: FC<HeroProps> = (props) => {
  const { onSearch } = props;

  return (
    <div
      className="bg-cover bg-fixed bg-center h-[50vh] grid place-items-center w-screen"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://th.bing.com/th/id/R.da0e7b2ac56ed7b45266371e8257a9df?rik=JjFjMnjMCUgwtg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f09%2fFree-All-Pokemon-Photo.jpg&ehk=eRQ%2byWaV%2fhsmNnAAVK4bv7MDW9yda8ZIsF9ZLP6ZRZU%3d&risl=&pid=ImgRaw&r=0)",
      }}
    >
      <Box width={{ md: "60vw" }} className="bg-slate-500 w-[90vw]">
        <TextField.Root
          size="3"
          placeholder="Search by Pokemon name"
          onChange={onSearch}
        />
      </Box>
    </div>
  );
};
