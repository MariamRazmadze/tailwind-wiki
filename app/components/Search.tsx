"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="w-[300px] flex bg-white  rounded-xl justify-center md:justify-between relative"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" p-2 pl-4 w-[200px]  text-xl rounded-xl border-none outline-none"
        placeholder="search here..."
      />
      <button className="absolute text-3xl font-bold top-2 right-4">
        <CiSearch />
      </button>
    </form>
  );
}
