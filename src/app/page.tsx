import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yi da Gbagyi App",
  description: "Explore the Gbagyi language with ease using our app! Dive into interactive lessons, quizzes, and engaging activities designed to help you grasp the fundamentals of this beautiful Nigerian language. Whether you're a beginner or looking to enhance your skills, our user-friendly interface makes learning enjoyable and accessible. Immerse yourself in Gbagyi culture and connect with native speakers as you embark on your language learning journey.",
};

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
    </main>
  );
}
